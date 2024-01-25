import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../store/estimator/contexts'
import Shared from './shared'
import { css } from '@emotion/react'

export const DescriptionField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { nameError, displayMailError, descriptionIsValid } = state.estimator
  const [descriptionInput, setDescriptionInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    dispatch({
      type: 'SET_DESCRIPTION',
      payload: descriptionInput.trim(),
    })
    dispatch({
      type: 'SET_DESCRIPTION_VALID_STATUS',
      payload: descriptionInput.trim().length > 0,
    })
  }, [descriptionInput])

  const handleDescriptionChange = (event) => {
    setDescriptionInput(event.target.value)
    dispatch({
      type: 'SET_FIELD_ERROR',
      name: 'nameError',
      error: null,
    })
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Shared.MailWrapper focused={isFocused}>
      <Shared.MailErrorLabel enabled={displayMailError && !descriptionIsValid}>
        This field is required
      </Shared.MailErrorLabel>
      <textarea
        placeholder='Describe your app'
        value={descriptionInput}
        onChange={handleDescriptionChange}
        onClick={() => {
          dispatch({ type: 'SET_FIELD_ERROR', name: 'nameError', error: null })
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
