import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/estimator/contexts'
import Shared from './shared'

const EButton = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.active ? '#97A3B4' : '#e4e8ee')};
  box-shadow: ${(props) => (props.active ? '0px 6px 15px rgba(0, 0, 0, 0.107654)' : 'unset')};
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  transition: all 0.2s;
  filter: ${(props) => (props.negated ? 'opacity(0.6)' : 'opacity(1)')};
  -webkit-tap-highlight-color: rgba(253, 115, 23, 0.34);
  @media (max-width: 640px) {
    margin-right: 0;
  }
  path {
    transition: all 0.3s;
    fill: ${(props) => (props.active ? '#fd7114' : '#333')};
  }
  :hover {
    border-color: #97a3b4;
    filter: opacity(1);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.107654);
  }
  .svgbg {
    fill: #fff;
  }
`
const EButtonContent = styled.div`
  background: #ffffff;
  border-radius: 5px;
  display: grid;
  grid-template-columns: min-content min-content auto;
  grid-column-gap: 18px;
  padding: 18px;
  align-items: center;
  min-height: 88px;
  @media (max-width: 640px) {
    min-height: 60px;
    padding: 6px;
  }
`

export const EstimatorButton = ({
  isRadioButton,
  isCheckBox,
  isCheckboxNegator,
  isCheckboxCleaner,
  img,
  text,
  serialNumber,
  reducerKey,
}) => {
  const { state, dispatch } = useContext(StateContext)
  const buttonType = !!isRadioButton ? 'radio' : 'check'
  const animateCheckmark = state.estimator.animateCheckmark

  const toDispatch = (newFields) => {
    dispatch({
      type: 'TOGGLE_BUTTON',
      buttonType: buttonType,
      reducerKey: reducerKey,
      newValues: newFields,
      serialNumber: serialNumber,
      boolean: true,
    })
  }

  const toggleRadiobox = () => {
    const negatedFields = Object.keys(state.estimator.steps[reducerKey]).reduce((accState, key) => {
      const field = accState[key]
      accState[key] = false
      return accState
    }, {})

    const newValuesRadiobox = {
      ...negatedFields,
      [serialNumber]: true,
    }

    toDispatch(newValuesRadiobox)
  }

  const toggleCheckbox = () => {
    const checkboxCleanerNumber = Object.keys(state.estimator.steps[reducerKey]).sort().reverse()[0]

    const newValuesCheckbox = {
      ...state.estimator.steps[reducerKey],
      [serialNumber]: !state.estimator.steps[reducerKey][serialNumber],
      [checkboxCleanerNumber]: false,
    }

    toDispatch(newValuesCheckbox)
  }

  const isActive = state.estimator.steps[reducerKey][serialNumber]

  const stepSerialNumbers = Object.keys(state.estimator.steps[reducerKey])
  const negated =
    reducerKey === '8List' || isCheckboxNegator
      ? false
      : stepSerialNumbers.reduce((accState, key) => {
          if (accState) {
            return accState
          }

          if (state.estimator.steps[reducerKey][key] && state.estimator.steps[reducerKey][stepSerialNumbers.length]) {
            return true
          }

          return false
        }, false)

  return (
    <EButton
      onClick={() => {
        isRadioButton ? toggleRadiobox() : toggleCheckbox()
        if (isCheckboxCleaner) {
          toggleRadiobox()
        }
      }}
      negated={negated}
      active={isActive}
    >
      <EButtonContent>
        {isRadioButton ? (
          <Shared.RoundCheckmark active={isActive} enableTransition={animateCheckmark} />
        ) : (
          <Shared.CubicleCheckmark active={isActive} enableTransition={animateCheckmark} />
        )}
        {img()}
        {text()}
      </EButtonContent>
    </EButton>
  )
}
