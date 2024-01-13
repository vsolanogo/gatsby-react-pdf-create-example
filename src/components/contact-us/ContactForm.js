import React, { useContext, useEffect } from 'react'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'
import { FileSelect } from './FileSelect'
import { FileDisplay } from './FileDisplay'
import { PostForm } from './PostForm'
import styled from '@emotion/styled'
import { StateContext } from '../../store/contactUs/contexts'
import { NameField } from './NameField'
import { EmailField } from './EmailField'
import { PhoneField } from './PhoneField'
import { SubjectField } from './SubjectField'
import { BudgetField } from './BudgetField'
import { MessageField } from './MessageField'
import { css } from '@emotion/react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useBoolean } from 'react-hookedup'
import { AlertFix } from '../shared'
import { Element } from 'react-scroll'
import { LoopCircleLoading } from 'react-loadingg'

const axiosInstance = axios.create({
  baseURL: '/api',
})

const EForm = styled.form`
  box-shadow: 7.3px 6.8px 23px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  max-width: 520px;
  padding: 24px 55px 20px 55px;
  transition: all 0.4s;
  position: relative;

  @media (max-width: 1200px) {
    padding: 12px 26px 10px 26px;
  }
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    padding: 14px;
  }
`
const EPendingCover = styled.div`
  background: #ffffffcc;
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.pending ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 333;
`
const Eh4 = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Component = ({ locale }) => {
  const { state, dispatch } = useContext(StateContext)
  const { validateFields, nameError, mailError, phoneError, subjectError } = state.contactUs

  // useTimeout(() => {
  //   try {
  //     window.Skype.ui({
  //       name: "dropdown",
  //       element: "generateSkypeCallDiv",
  //       participants: ["mykola.striletskyi"],
  //       imageSize: 24,
  //     })
  //   } catch {
  //     console.log("windw")
  //   }
  // }, 1000)

  useEffect(() => {
    if (requestFinished) {
      dispatch({ type: 'POST_REQUEST_FINISH' })
      showSuccessMsg.setFalse()
      if (fieldsValid) {
        showSuccessMsg.setTrue()
        dispatch({ type: 'CLEAR_FIELDS' })
      }
      if (!fieldsValid) {
        showSuccessMsg.setTrue()
      }
    }
  }, [requestFinished])

  const pendingRequest = state.contactUs.pendingRequest.isLoading

  const fieldsValid = !nameError && !mailError && !phoneError && !subjectError

  const showSuccessMsg = useBoolean(false)

  const errors = [
    nameError ? 'Invalid name' : false,
    mailError ? 'Invalid email' : false,
    phoneError ? 'Invalid phone' : false,
    subjectError ? 'Please, choose subject' : false,
  ]
    .filter((i) => !!i)
    .join(', ')

  return (
    <>
      {showSuccessMsg.value && fieldsValid && (
        <AlertFix>
          <SweetAlert
            type='success'
            title='Success!'
            btnSize='sm'
            onConfirm={() => {
              showSuccessMsg.setFalse()
            }}
          >
            Thanks for submitting.
          </SweetAlert>
        </AlertFix>
      )}

      {showSuccessMsg.value && !fieldsValid && (
        <AlertFix>
          <SweetAlert
            type='warning'
            title='Error'
            btnSize='sm'
            onConfirm={() => {
              showSuccessMsg.setFalse()
            }}
          >
            {errors}
          </SweetAlert>
        </AlertFix>
      )}

      <EForm
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Eh4>Drop us your idea</Eh4>
        <EPendingCover pending={pendingRequest}>
          <LoopCircleLoading color='#fd7114' />
        </EPendingCover>

        <NameField />

        <EmailField />

        <Element name='PhoneField' />
        <PhoneField />

        <Element name='SubjectField' />
        <SubjectField />

        <Element name='BudgetField' />
        <BudgetField />

        <Element name='MessageField' />
        <MessageField />

        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          `}
        >
          <FileSelect />
          <div
            css={css`
              position: relative;
            `}
          >
            <div id='generateSkypeCallDiv'></div>
          </div>
          <PostForm />
        </div>
        <FileDisplay />
      </EForm>
    </>
  )
}

export const ContactForm = (props) => (
  <RequestProvider value={axiosInstance}>
    <Component {...props} />
  </RequestProvider>
)
