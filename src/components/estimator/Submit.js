import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/estimator/contexts'
import { useInput, useFocus } from 'react-hookedup'
import { SuccessEstimateWindow } from './SuccessEstimateWindow'
import { ErrorPdfRequestWindow } from './ErrorPdfRequestWindow'
import { css } from '@emotion/react'
import Sticky from 'react-sticky-el'
import { ProgressCircle } from './ProgressCircle'
import WindowDimentions from '../WindowDimentions'
import { isMobile } from 'react-device-detect'
import { Element, scroller } from 'react-scroll'
import { CircleToBlockLoading } from 'react-loadingg'
import Shared from './shared'
import { NameField } from './NameField'
import { PhoneField } from './PhoneField'
import { DescriptionField } from './DescriptionField'
import { SharedMail } from '../../shared/icons'
import validator from 'email-validator'

export const Submit = ({ locale = 'en' }) => {
  const { state, dispatch } = useContext(StateContext)
  const [rendered, setRendered] = useState(false)

  const { mailIsValid, displayMailError, nameIsValid, phoneError, descriptionIsValid } = state.estimator

  const [emailInput, setEmailInput] = useState('')
  const emailFocus = useFocus()

  useEffect(() => {
    setRendered(true)
  }, [])

  useEffect(() => {
    dispatch({ type: 'SET_EMAIL', email: emailInput })

    if (!validator.validate(emailInput)) {
      dispatch({ type: 'SET_MAIL_VALID_STATUS', payload: false })
    } else {
      dispatch({ type: 'SET_MAIL_VALID_STATUS', payload: true })
    }
  }, [emailInput])

  useEffect(() => {
    setEmailInput("")
  }, [!state.estimator.sendPdfSuccess])

  const handleSubmitButton = (e) => {
    e.preventDefault()
    validateSubmit()
  }

  const scrollToMailInput = () => {
    scroller.scrollTo('InvalidEmail', {
      smooth: true,
      offset: -150,
    })
  }

  const highlightUncheckedSteps = () => {
    dispatch({
      type: 'HIGHLIGHT_UNCHECKED_STEPS',
    })
  }

  const scrollToUncheckedStep = () => {
    scroller.scrollTo(state.estimator.uncheckedFields[0], {
      smooth: true,
      offset: -36,
    })
  }

  const validateSubmit = () => {
    if (state.estimator.uncheckedFields.length > 0) {
      scrollToUncheckedStep()
      highlightUncheckedSteps()
      return
    }

    if (!mailIsValid || !nameIsValid || !!phoneError || !descriptionIsValid) {
      dispatch({ type: 'SET_DISPLAY_MAIL_ERROR', payload: true })
      scrollToMailInput()
      return
    }

    sendForm()
  }

  const sendForm = () => {
    dispatch({ type: 'SEND_PDF_START' })
  }

  const { sendPdf } = state.estimator

  const handleInputMailKeyPress = (event) => {
    if (event.key === 'Enter') {
      validateSubmit()
    }
  }

  if (state.estimator.sendPdfSuccess) {
    return <SuccessEstimateWindow locale={locale} />
  }

  if (state.estimator.sendPdfError) {
    return <ErrorPdfRequestWindow />
  }

  return (
    <WindowDimentions
      render={({ width }) => (
        <>
          {rendered && (
            <div
              css={css`
                width: 130px;
                margin-left: auto;
              `}
            >
              <EStickyPos paddingLeft={width > 1300 ? (width - 1300) / 2 : 0}>
                <Sticky mode='bottom'>
                  {!state.estimator.sendPdfSuccess && !isMobile && !!state.estimator.platform && <ProgressCircle />}
                </Sticky>
              </EStickyPos>
            </div>
          )}

          <EWrapper>
            <ESubmitCover enabled={sendPdf} />
            {sendPdf && <Loader />}
            <Element name='InvalidEmail' />
            <div css={css(Shared.H2, `margin-bottom: 36px; `)}>
              Provide your email to get the rough estimate with a full feature list. Don’t worry, we’ll not spam you 😉
            </div>

            <NameField />

            <Shared.MailWrapper focused={emailFocus.focused}>
              <Shared.MailErrorLabel enabled={displayMailError && !mailIsValid}>Invalid email</Shared.MailErrorLabel>

              <div
                css={css`
                  margin: 0 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <SharedMail width='20' height='20' />
              </div>
              <input
                placeholder='Your Email'
                type='email'
                padding='6px 12px 6px 44px'
                value={emailInput}
                onChange={(e)=>{
                  setEmailInput(e.target.value)
                }}
                onFocus={() => {
                  emailFocus.bind.onFocus()
                }}
                onBlur={() => {
                  emailFocus.bind.onBlur()
                }}
                onKeyPress={handleInputMailKeyPress}
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
                  padding: 0px;
                  margin: 0px;
                  box-shadow: none;
                  font-size: 14px;
                  font-weight: 400;
                  font-family: 'Montserrat', Arial, sans-serif;
                  height: 48px;
                `}
              />
            </Shared.MailWrapper>

            <PhoneField />
            <DescriptionField />

            <ESubmitButton onClick={handleSubmitButton}>Estimate the Application Cost</ESubmitButton>
          </EWrapper>
        </>
      )}
    />
  )
}

const EWrapper = styled.div`
  margin: auto;
  max-width: 420px;
  margin-top: 46px;
  position: relative;
`

const ESubmitButton = styled.button`
  background: #fd7114;
  border-radius: 81px;
  width: 100%;
  border: none;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  min-height: 60px;

  margin: 26px 0;
  padding: 14px 10px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-tap-highlight-color: rgba(253, 115, 23, 0.34);
  @media (max-width: 640px) {
    padding: 7px 16px;
    font-size: 15px;
  }
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 9.8px 59px -18px #fd7114;
  }
`

const EStickyPos = styled.div`
  position: absolute;
  padding-top: 200px;
  padding-bottom: 20px;
  padding-left: ${(props) => `${props.paddingLeft}px`};
`

const Loader = () => (
  <div
    css={css`
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 999;
    `}
  >
    <CircleToBlockLoading color='#fd7114' />
  </div>
)

const ESubmitCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  /* filter: ${(props) => (props.enabled ? 'opacity(0.7)' : 'opacity(0)')}; */
  filter: opacity(0.7);
  z-index: 99;
  visibility: ${(props) => (props.enabled ? 'visible' : 'hidden')};
  transition: all 0.3s;
`
