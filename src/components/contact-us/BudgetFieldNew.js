import React, { useState, useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import { useBoolean } from 'react-hookedup'
import OutsideClickHandler from 'react-outside-click-handler'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './SharedNew'
import AngleSVG from '../../images/icons/angle.svg'
import { isMobile } from 'react-device-detect'
import DeviceDetect from '../DeviceDetect'

const budgetField = ['Web development', 'Mobile development', 'Dedicated team']

const budgetArray = ['Less than 20K', '20-50K', 'More than 50K']

export const BudgetField = () => {
  const { state, dispatch } = useContext(StateContext)
  const { subject, clearFields, budgetError } = state.contactUs

  const [budget, setBudget] = useState('')
  const budgetOpen = useBoolean(false)

  useEffect(() => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'budget',
      fieldValue: budget,
    })
  }, [budget])

  useEffect(() => {
    if (clearFields) {
      setBudget('')
    }
  }, [clearFields])

  const dropdownClick = () => {
    if (isMobile) {
      return
    }
    budgetOpen.toggle()
    dispatch({ type: 'SET_FIELD_ERROR', name: 'budgetError', error: null })
  }

  const handleSelectChange = (e) => {
    setBudget(budgetArray[e.target.value])
  }

  return (
    <DeviceDetect
      render={({ isMobile, isBrowser, isTablet }) => (
        <>
          {budgetField.indexOf(subject) > -1 && (
            <>
              <Shared.FieldCaption>Approx. budget</Shared.FieldCaption>
              <Shared.InputWrapper active={budgetOpen.value || budget.length > 0} error={!!budgetError}>
                <Shared.InputLabel active={!!budgetError} error={!!budgetError}>
                  {!!budgetError && <span>{budgetError}</span>}
                </Shared.InputLabel>

                <div
                  css={css`
                    height: 100%;
                    > div {
                      height: 100%;
                    }
                  `}
                >
                  {(isMobile || isTablet) && (
                    <SelectTag list={budgetArray} onChange={handleSelectChange} budget={budget} />
                  )}

                  <OutsideClickHandler onOutsideClick={budgetOpen.setFalse}>
                    <Shared.DropDownButton active={budget.length > 0} onClick={dropdownClick}>
                      {budget.length > 0 ? (
                        <Shared.DropDownButtonContent>{budget}</Shared.DropDownButtonContent>
                      ) : (
                        <Shared.DropDownButtonContent>Select budget</Shared.DropDownButtonContent>
                      )}

                      <Shared.DropDownArrowWrapper open={budgetOpen.value}>
                        <img src={AngleSVG} alt='angle icon' />
                      </Shared.DropDownArrowWrapper>
                    </Shared.DropDownButton>

                    {isBrowser && !isMobile && (
                      <Shared.DropDown open={budgetOpen.value}>
                        {budgetArray.map((i, index) => (
                          <button
                            key={`${i}${index}`}
                            onClick={() => {
                              setBudget(i)
                              budgetOpen.setFalse()
                            }}
                          >
                            {i}
                          </button>
                        ))}
                      </Shared.DropDown>
                    )}
                  </OutsideClickHandler>
                </div>
              </Shared.InputWrapper>
            </>
          )}
        </>
      )}
    />
  )
}

const SelectTag = ({ onChange, list, budget }) => {
  return (
    <select
      onChange={onChange}
      onFocus={() => {
        if (budget.length === 0) {
          onChange({ target: { value: 0 } })
        }
      }}
      css={css`
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: opacity(0);
        border: 1px solid #1ed;
        z-index: 2;
      `}
    >
      {list.map((i, index) => {
        let selected = false

        try {
          if (budget === i) {
            selected = true
          }
        } catch {}

        return (
          <option value={index} key={`${i}${index}Select`} selected={selected}>
            {i}
          </option>
        )
      })}
    </select>
  )
}
