import React, { useContext, useEffect } from 'react'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './SharedNew'

export const NameField = () => {
  const { dispatch, state } = useContext(StateContext)
  const { nameError, clearFields } = state.contactUs
  const nameInput = useInput('')
  const nameFocus = useFocus()

  useEffect(() => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'name',
      fieldValue: nameInput.value,
    })
  }, [nameInput.value])

  useEffect(() => {
    if (clearFields) {
      nameInput.clear()
    }
  }, [clearFields])

  return (
    <Shared.InputWrapper active={nameFocus.focused || nameInput.hasValue} error={!!nameError}>
      <Shared.InputLabel active={nameInput.hasValue || !!nameError} error={!!nameError}>
        {!!nameError && <span>{nameError}</span>}
      </Shared.InputLabel>
      <Shared.Input
        placeholder='Your name'
        type='fullName'
        padding='6px 12px'
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
      />
    </Shared.InputWrapper>
  )
}
