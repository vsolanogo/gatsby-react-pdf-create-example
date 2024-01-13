import React, { useContext, useEffect } from 'react'
import { SharedHuman } from '../../shared/icons'
import { useInput, useFocus } from 'react-hookedup'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './Shared'

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
        {!!nameError ? <span>{nameError}</span> : <span>Name</span>}
      </Shared.InputLabel>
      <Shared.FieldIconWrapper>
        <SharedHuman width='20' height='20' />
      </Shared.FieldIconWrapper>
      <Shared.Input
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
      />
    </Shared.InputWrapper>
  )
}
