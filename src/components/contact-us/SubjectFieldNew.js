import React, { useState, useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import OutsideClickHandler from 'react-outside-click-handler'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './SharedNew'
import AngleSVG from '../../images/icons/angle.svg'
import DeviceDetect from '../DeviceDetect'

const lookingFor = ['Web development', 'Mobile development', 'Dedicated team', 'Opportunity discussion']

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

  const handleSelectChange = (e) => {
    setSubject(lookingFor[e.target.value])
  }

  return (
    <DeviceDetect
      render={({ isMobile, isBrowser }) => (
        <Shared.InputWrapper active={subjectOpen || subject.length > 0} error={!!subjectError}>
          <Shared.InputLabel active={subject.length > 0 || !!subjectError} error={!!subjectError}>
            {!!subjectError && <span>{subjectError}</span>}
          </Shared.InputLabel>

          <div
            css={css`
              height: 100%;
              > div {
                height: 100%;
              }
            `}
          >
            {isMobile && <SelectTag list={lookingFor} onChange={handleSelectChange} subject={subject} />}

            <OutsideClickHandler
              onOutsideClick={() => {
                setSubjectOpen(false)
              }}
            >
              <Shared.DropDownButton
                active={subject.length > 0}
                onClick={(e) => {
                  setSubjectOpen(!subjectOpen)
                }}
              >
                {subject.length > 0 && <Shared.DropDownButtonContent>{subject}</Shared.DropDownButtonContent>}

                <Shared.DropDownArrowWrapper open={subjectOpen && isBrowser}>
                  <img src={AngleSVG} alt='angle' />
                </Shared.DropDownArrowWrapper>
              </Shared.DropDownButton>
              <Shared.DropDown open={subjectOpen && isBrowser}>
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
      )}
    />
  )
}

const SelectTag = ({ onChange, list, subject }) => {
  return (
    <select
      onChange={onChange}
      onFocus={() => {
        if (subject.length === 0) {
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
          if (subject === i) {
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
