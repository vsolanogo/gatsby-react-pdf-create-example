import React, { useContext, useEffect } from 'react'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/estimator/contexts'
import Shared from './shared'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const DescriptionField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { nameError, displayMailError, descriptionIsValid } = state.estimator
  const descriptionInput = useInput('')
  const nameFocus = useFocus()

  useEffect(() => {
    dispatch({
      type: 'SET_DESCRIPTION',
      payload: descriptionInput.value.trim(),
    })
    dispatch({
      type: 'SET_DESCRIPTION_VALID_STATUS',
      payload: descriptionInput.value.trim().length > 0,
    })
  }, [descriptionInput.value])

  return (
    <Shared.MailWrapper focused={nameFocus.focused}>
      <Shared.MailErrorLabel enabled={displayMailError && !descriptionIsValid}>
        This field is required
      </Shared.MailErrorLabel>
      <textarea
        placeholder='Describe your app'
        {...descriptionInput.bindToInput}
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
          padding: 6px 12px 6px 12px;
          margin: 0px;
          box-shadow: none;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Montserrat', Arial, sans-serif;
        `}
        rows={'3'}
      />
    </Shared.MailWrapper>
  )
}
