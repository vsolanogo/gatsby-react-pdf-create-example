import React, { useContext, useEffect, useState } from 'react'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'
import { FileSelect } from './FileSelectNew'
import { FileDisplay } from './FileDisplayNew'
import { PostForm } from './PostFormNew'
import styled from '@emotion/styled'
import { StateContext } from '../../store/contactUs/contexts'
import { NameField } from './NameFieldNew'
import { EmailField } from './EmailFieldNew'
import { PhoneField } from './PhoneFieldNew'
import { SubjectField } from './SubjectFieldNew'
import { BudgetField } from './BudgetFieldNew'
import { MessageField } from './MessageFieldNew'
import { css } from '@emotion/react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useBoolean } from 'react-hookedup'
import { Element } from 'react-scroll'
import { LoopCircleLoading } from 'react-loadingg'
import { navigate } from 'gatsby'
import Shared from './SharedNew'
import { AlertFix } from '../shared'

const url = process.env.GATSBY_PROD ? 'https://mulhollandbot.site/api' : 'https://staging.mulhollandbot.site/api'

const axiosInstance = axios.create({
  baseURL: url,
})

const EForm = styled.form`
  width: 100%;
  border: 1px solid #e7e7e7;
  box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1.8em 2.1em;
  transition: all 0.4s;
  position: relative;
  font-family: 'Heebo', Arial, sans-serif;
  letter-spacing: 0.06em;
  align-self: flex-start;
  @media (max-width: 1100px) {
    max-width: 600px;
    margin: auto;
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

export const Component = () => {
  const { state, dispatch } = useContext(StateContext)
  const showSuccessMsg = useBoolean(false)
  const [fileselectKeyRerender, setFileselectKeyRerender] = useState('1')

  const { validateFields, nameError, mailError, phoneError, subjectError, descriptionError, budgetError } =
    state.contactUs

  const fieldsValid = !nameError && !mailError && !phoneError && !subjectError && !descriptionError && !budgetError

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

  useEffect(() => {
    if (showSuccessMsg.value && fieldsValid) {
      navigate(`/thank-you-contact-us/`)
    }
  }, [showSuccessMsg.value, fieldsValid])

  const pendingRequest = state.contactUs.pendingRequest.isLoading

  const errors = [
    nameError ? 'Invalid name' : false,
    mailError ? 'Invalid email' : false,
    phoneError ? 'Invalid phone' : false,
    descriptionError ? 'Description field is required' : false,
    budgetError ? 'Budget is required' : false,
    subjectError ? 'Please, choose subject' : false,
  ]
    .filter((i) => !!i)
    .join(', ')

  return (
    <>
      {showSuccessMsg.value && !fieldsValid && (
        <AlertFix
          css={css`
            font-family: 'Heebo', Arial, sans-serif;
            font-size: 15px;
          `}
        >
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
        <EPendingCover pending={pendingRequest}>
          <LoopCircleLoading color='#fd7114' />
        </EPendingCover>

        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            margin-bottom: 20px;

            @media (max-width: 1100px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <div>
            <Shared.FieldCaption>Name</Shared.FieldCaption>
            <NameField />
          </div>

          <div>
            <Shared.FieldCaption>Email</Shared.FieldCaption>
            <EmailField />
          </div>

          <div>
            <Shared.FieldCaption>
              Phone number
              <Element name='PhoneField' />
            </Shared.FieldCaption>
            <PhoneField />
          </div>

          <div>
            <Shared.FieldCaption>I'm looking for</Shared.FieldCaption>
            <SubjectField />
          </div>

          <div>
            <BudgetField />
          </div>
        </div>

        <Shared.FieldCaption>About the project</Shared.FieldCaption>
        <Element name='MessageField' />
        <MessageField />

        <div
          key={`fileselectkey${fileselectKeyRerender}`}
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          `}
        >
          <FileSelect
            setFileselectKeyRerender={setFileselectKeyRerender}
            fileselectKeyRerender={fileselectKeyRerender}
          />
          <div
            css={css`
              position: relative;
            `}
          ></div>
        </div>

        <FileDisplay />
        <PostForm />
      </EForm>
    </>
  )
}

export const ContactForm = (props) => (
  <RequestProvider value={axiosInstance}>
    <Component {...props} />
  </RequestProvider>
)
