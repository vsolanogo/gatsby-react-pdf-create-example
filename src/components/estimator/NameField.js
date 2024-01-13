import React, { useContext, useEffect } from 'react'
import Icons, { SharedHuman } from '../../shared/icons'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/estimator/contexts'
import Shared from './shared'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const NameField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { nameError, displayMailError, nameIsValid } = state.estimator
  const nameInput = useInput('')
  const nameFocus = useFocus()

  useEffect(() => {
    dispatch({
      type: 'SET_NAME',
      payload: nameInput.value.trim(),
    })
    dispatch({
      type: 'SET_NAME_VALID_STATUS',
      payload: nameInput.value.trim().length > 0,
    })
  }, [nameInput.value])

  return (
    <Shared.MailWrapper focused={nameFocus.focused}>
      <Shared.MailErrorLabel enabled={displayMailError && !nameIsValid}>This field is required</Shared.MailErrorLabel>

      <div
        css={css`
          margin: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <SharedHuman width='20' height='20' />
      </div>
      <input
        placeholder='Name'
        type='fullName'
        padding='6px 12px 6px 44px'
        {...nameInput.bindToInput}
        onClick={() => {
          dispatch({ type: 'SET_FIELD_ERROR', name: 'nameError', error: null })
        }}
        onFocus={() => {
          nameFocus.bind.onFocus()
        }}
        onBlur={() => {
          nameFocus.bind.onBlur()
        }}
        css={css`
          height: 100%;
          border: none;
          color: #333;

          font-size: 14px;
          border-radius: 3px;
          width: 100%;
          position: relative;
          letter-spacing: 0.01rem;
          z-index: 0;
          background: #ffffff;
          line-height: 25px;
          padding: 0px;
          margin: 0px;
          box-shadow: none;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Montserrat', Arial, sans-serif;
          height: 48px;
        `}
      />
    </Shared.MailWrapper>
  )
}
