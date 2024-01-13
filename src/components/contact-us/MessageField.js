import React, { useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './Shared'

const E = {}

E.TextareaInput = Shared.Input.withComponent('textarea')

export const MessageField = () => {
  const { state, dispatch } = useContext(StateContext)
  const { clearFields } = state.contactUs
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
      css={css`
        height: 124px;
      `}
    >
      <Shared.InputLabel active={messageInput.hasValue}>Your message</Shared.InputLabel>
      <E.TextareaInput
        placeholder='Your message (optional)'
        type='text'
        padding='6px 12px 6px 12px'
        {...messageInput.bindToInput}
        {...messageFocus.bind}
        css={css`
          resize: none;
          height: 120px;
        `}
      />
    </Shared.InputWrapper>
  )
}
