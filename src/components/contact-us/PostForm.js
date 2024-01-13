import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/contactUs/contexts'
import { useRequest } from 'react-request-hook'
import { getUA, deviceDetect } from 'react-device-detect'
import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { getVisitedPagesObjects } from '../../utils/storeVisitedPages'

const nameSchema = yup.object().shape({
  name: yup.string().trim().required('This field is required').min(2, 'Too short').max(50, 'Too long'),
})

const mailSchema = yup.object().shape({
  email: yup.string().trim().email('Invalid email').required('This field is required'),
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

E.SubmitButton = styled.button`
  background-color: #fd7114;
  color: #fff;
  border-radius: 100px;
  border: 0px;
  cursor: pointer;
  justify-self: center;

  padding: 7px 26px;
  text-decoration: unset;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 16px;
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
      mailSchema.validateSync({ email })
      dispatch({ type: 'SET_FIELD_ERROR', name: 'mailError', error: null })
    } catch (err) {
      dispatch({
        type: 'SET_FIELD_ERROR',
        name: 'mailError',
        error: err.message,
      })
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

    if (!name || !email || !subject || !phone || !description || !budget) {
      return
    }

    validateFields()

    dispatch({ type: 'SEND_POST_REQUEST' })
  }

  const postData = () => {
    const fd = new FormData()

    fd.append('sessionId', sessionUuid)
    fd.append('isValidEmail', !mailError)
    fd.append('isValidPhone', !phoneError)
    fd.append('name', name)
    fd.append('email', email)
    fd.append('phone', phone)
    fd.append('subject', subject)

    // if (budget === "Less than 20K") {
    //   fd.append("budget", JSON.stringify([20000]))
    // }

    // if (budget === "20-50K") {
    //   fd.append("budget", JSON.stringify([20000, 50000]))
    // }

    // if (budget === "More than 50K") {
    //   fd.append("budget", JSON.stringify([50000]))
    // }

    fd.append(
      'description',
      `Budget: ${budget}.
      \n ${description}`,
    )

    fd.append('countryIso2', country)
    fd.append('visitedPages', getVisitedPagesObjects())

    files.forEach(function (e) {
      fd.append('attachment', e.file)
    })

    dispatch({ type: 'POST_REQUEST_START' })
    dispatch({ type: 'CLEAR_FIELDS_FALSE' })
  }
 
  return <E.SubmitButton onClick={handleSubmitClick}>Submit</E.SubmitButton>
}
