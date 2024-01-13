import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/contactUs/contexts'
import { useRequest } from 'react-request-hook'
import { getUA, deviceDetect } from 'react-device-detect'

import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Shared, {
  SharedRightAngleOfTheButton2,
  SharedOrangeButtonWithRightAngle,
  SharedRightAngleOfTheButton,
} from '../../components/shared'

import validator from 'email-validator'

const nameSchema = yup.object().shape({
  name: yup.string().trim().required('This field is required').min(2, 'Too short').max(50, 'Too long'),
})

const descriptionSchema = yup.object().shape({
  description: yup.string().trim().required('This field is required').min(2, 'Too short'),
})

const budgetSchema = yup.object().shape({
  budget: yup.string().trim().required('This field is required'),
})

const subjectSchema = yup.object().shape({
  subject: yup.string().trim().required('Please, choose your subject'),
})

export const validateNumber = ({ phone, country }) => {
  if (!phone || !country) {
    return 'This field is required'
  }

  const numParsed = parsePhoneNumberFromString(phone.replace(/\s/g, ''), country.toUpperCase())

  if (!numParsed || !numParsed.isValid()) {
    return 'Incorrect phone number'
  }

  return 'valid'
}

const E = {}

E.OrangeButtonWithRightAngle = styled.button`
  ${SharedOrangeButtonWithRightAngle};
  margin: 0 0 0 auto;
`

export const PostForm = () => {
  const { state, dispatch } = useContext(StateContext)

  const deviceData = JSON.stringify(deviceDetect(), undefined, 2)
  const userAgent = getUA

  const {
    name,
    mail: email,
    subject,
    message: description,
    country,
    phone,
    budget,
    files,
    ipinfo,
    sessionUuid,
    mailError,
    phoneError,
    descriptionError,
    budgetError,
    sendPostRequest,
  } = state.contactUs

  useEffect(() => {
    if (sendPostRequest) {
      dispatch({ type: 'SEND_POST_REQUEST_FALSE' })
      postData()
    }
  }, [sendPostRequest])

  const validateFields = () => {
    try {
      nameSchema.validateSync({ name })
      dispatch({ type: 'SET_FIELD_ERROR', name: 'nameError', error: null })
    } catch (err) {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'nameError',
        error: err.message,
      })
    }

    try {
      descriptionSchema.validateSync({ description })
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'descriptionError',
        error: null,
      })
    } catch (err) {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'descriptionError',
        error: err.message,
      })
    }

    if (subject !== 'Opportunity discussion') {
      try {
        budgetSchema.validateSync({ budget })
        dispatch({
          type: 'SET_FIELD_ERROR',
          name: 'budgetError',
          error: null,
        })
      } catch (err) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          name: 'budgetError',
          error: err.message,
        })
      }
    } else {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'budgetError',
        error: null,
      })
    }

    if (!validator.validate(email)) {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'mailError',
        error: 'Invalid email',
      })
    } else {
      dispatch({ type: 'SET_FIELD_ERROR', name: 'mailError', error: null })
    }

    try {
      subjectSchema.validateSync({ subject })
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'subjectError',
        error: null,
      })
    } catch (err) {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'subjectError',
        error: err.message,
      })
    }

    if (validateNumber({ phone, country }) !== 'valid') {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'phoneError',
        error: validateNumber({ phone, country }),
      })
    } else {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'phoneError',
        error: null,
      })
    }
  }

  const handleSubmitClick = () => {
    validateFields()
    if (!name || !email || !subject || !phone) {
      return
    }
    validateFields()
    dispatch({ type: 'SEND_POST_REQUEST' })
  }

  const postData = () => {
    const fd = new FormData()

    files.forEach(function (e) {
      fd.append('attachment', e.file)
    })
  }

  return (
    <E.OrangeButtonWithRightAngle onClick={handleSubmitClick}>
      Submit
      <SharedRightAngleOfTheButton />
      <SharedRightAngleOfTheButton2 />
    </E.OrangeButtonWithRightAngle>
  )
}
