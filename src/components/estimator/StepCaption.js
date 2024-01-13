import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/estimator/contexts'
import { css } from '@emotion/react'

const EStepCaption = styled.div`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => (props.highlight ? '#e75254' : '#333333')};
  margin: 44px 0 24px 0;
  transition: all 0.3s;
  @media (max-width: 640px) {
    margin: 22px 0 14px 0;
  }
`

export const StepCaption = ({ caption, reducerKey }) => {
  const { state, dispatch } = useContext(StateContext)

  const highlight = state.estimator.highlightUncheckedSteps
    ? !!state.estimator.uncheckedFields.includes(reducerKey)
    : false

  return (
    <div>
      <EStepCaption highlight={highlight}>{caption()}</EStepCaption>
    </div>
  )
}
