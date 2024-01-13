import React, { useState, useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import OutsideClickHandler from 'react-outside-click-handler'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './Shared'
import { isMobile } from 'react-device-detect'
import { scroller } from 'react-scroll'

const lookingFor = [
  'Opportunity discussion',
  'Dedicated Team',
  'Mobile App Development',
  'Web Application Development',
  'Marketplace Development',
  'MVP Development',
  'Business consultation',
  'UI/UX Design',
  'Quality Assurance',
]

export const SubjectField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { subjectError, clearFields } = state.contactUs

  const [subject, setSubject] = useState('')
  const [subjectOpen, setSubjectOpen] = useState(false)

  useEffect(() => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'subject',
      fieldValue: subject,
    })
    dispatch({ type: 'SET_FIELD_ERROR', name: 'subjectError', error: null })
  }, [subject])

  useEffect(() => {
    if (clearFields) {
      setSubject('')
    }
  }, [clearFields])

  return (
    <Shared.InputWrapper active={subjectOpen || subject.length > 0} error={!!subjectError}>
      <Shared.InputLabel active={subject.length > 0 || !!subjectError} error={!!subjectError}>
        {!!subjectError ? <span>{subjectError}</span> : <span>I’m looking for</span>}
      </Shared.InputLabel>

      <div
        css={css`
          height: 100%;
          > div {
            height: 100%;
          }
        `}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            setSubjectOpen(false)
          }}
        >
          <Shared.DropDownButton
            active={subject.length > 0}
            onClick={(e) => {
              setSubjectOpen(!subjectOpen)

              if (isMobile) {
                scroller.scrollTo('SubjectField', {
                  smooth: true,
                  offset: -70,
                })
              }
            }}
          >
            {subject.length > 0 ? (
              <Shared.DropDownButtonContent>{subject}</Shared.DropDownButtonContent>
            ) : (
              <Shared.DropDownButtonContent>I’m looking for</Shared.DropDownButtonContent>
            )}
            <Shared.DropDownArrow />
          </Shared.DropDownButton>
          <Shared.DropDown open={subjectOpen}>
            {lookingFor.map((i, index) => (
              <button
                key={`${i}${index}`}
                onClick={() => {
                  setSubject(i)
                  setSubjectOpen(false)
                }}
              >
                {i}
              </button>
            ))}
          </Shared.DropDown>
        </OutsideClickHandler>
      </div>
    </Shared.InputWrapper>
  )
}
