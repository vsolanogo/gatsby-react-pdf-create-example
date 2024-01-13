import React, { useState, useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import { useBoolean } from 'react-hookedup'
import OutsideClickHandler from 'react-outside-click-handler'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './Shared'

const ShowBudgetIfLookingForIsNext = [
  'Dedicated Team',
  'Mobile App Development',
  'Web Application Development',
  'Marketplace Development',
  'MVP Development',
  'UI/UX Design',
  'Quality Assurance',
]

const budgetArray = ['Less than 20K', '20-50K', 'More than 50K']

export const BudgetField = () => {
  const { state, dispatch } = useContext(StateContext)
  const { subject, clearFields } = state.contactUs

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
    budgetOpen.toggle()
  }

  return (
    <>
      {ShowBudgetIfLookingForIsNext.indexOf(subject) > -1 && (
        <Shared.InputWrapper active={budgetOpen.value || budget.length > 0}>
          <Shared.InputLabel active={budget.length > 0}>Budget</Shared.InputLabel>
          <div
            css={css`
              height: 100%;
              > div {
                height: 100%;
              }
            `}
          >
            <OutsideClickHandler onOutsideClick={budgetOpen.setFalse}>
              <Shared.DropDownButton active={budget.length > 0} onClick={dropdownClick}>
                {budget.length > 0 ? (
                  <Shared.DropDownButtonContent>{budget}</Shared.DropDownButtonContent>
                ) : (
                  <Shared.DropDownButtonContent>Apx. Budget</Shared.DropDownButtonContent>
                )}
                <Shared.DropDownArrow />
              </Shared.DropDownButton>

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
            </OutsideClickHandler>
          </div>
        </Shared.InputWrapper>
      )}
    </>
  )
}
