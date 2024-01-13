import React, { useContext, useEffect } from 'react'
import { SharedMail } from '../../shared/icons'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './Shared'

export const EmailField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { mailError, clearFields } = state.contactUs

  const mailInput = useInput('')

  const mailFocus = useFocus()

  useEffect(() => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'mail',
      fieldValue: mailInput.value,
    })
  }, [mailInput.value])

  useEffect(() => {
    if (clearFields) {
      mailInput.clear()
    }
  }, [clearFields])

  return (
    <Shared.InputWrapper active={mailFocus.focused || mailInput.hasValue} error={!!mailError}>
      <Shared.InputLabel active={mailInput.hasValue || !!mailError} error={!!mailError}>
        {!!mailError ? <span>{mailError}</span> : <span>E-mail</span>}
      </Shared.InputLabel>

      <Shared.FieldIconWrapper>
        <SharedMail width='20' height='20' />
      </Shared.FieldIconWrapper>

      <Shared.Input
        padding='6px 12px 6px 44px'
        onClick={() => {
          dispatch({ type: 'SET_FIELD_ERROR', name: 'mailError', error: null })
        }}
        placeholder='E-mail'
        type='email'
        {...mailInput.bindToInput}
        onFocus={() => {
          mailFocus.bind.onFocus()
        }}
        onBlur={() => {
          mailFocus.bind.onBlur()
        }}
      />
    </Shared.InputWrapper>
  )
}
