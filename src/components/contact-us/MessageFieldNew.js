import React, { useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './SharedNew'

const E = {}

E.TextareaInput = Shared.Input.withComponent('textarea')

export const MessageField = () => {
  const { state, dispatch } = useContext(StateContext)
  const { clearFields, descriptionError } = state.contactUs
  const messageInput = useInput('')
  const messageFocus = useFocus()

  useEffect(() => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'message',
      fieldValue: messageInput.value,
    })
  }, [messageInput.value])

  useEffect(() => {
    if (clearFields) {
      messageInput.clear()
    }
  }, [clearFields])

  return (
    <Shared.InputWrapper
      active={messageFocus.focused || messageInput.hasValue}
      error={!!descriptionError}
      css={css`
        height: 124px;
      `}
    >
      <Shared.InputLabel active={messageInput.hasValue || !!descriptionError} error={!!descriptionError}>
        {!!descriptionError && <span>{descriptionError}</span>}
      </Shared.InputLabel>
      <E.TextareaInput
        placeholder=''
        type='text'
        padding='6px 12px 6px 12px'
        onClick={() => {
          dispatch({
            type: 'SET_FIELD_ERROR',
            name: 'descriptionError',
            error: null,
          })
        }}
        {...messageInput.bindToInput}
        {...messageFocus.bind}
        css={css`
          resize: none;
          height: 120px;
          margin: 0;
        `}
      />
    </Shared.InputWrapper>
  )
}
