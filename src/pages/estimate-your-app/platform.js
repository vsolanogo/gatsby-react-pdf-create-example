import React, { useReducer, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import Shared from '../../components/shared'
import { StateContext } from '../../store/estimator/contexts'
import appReducer from '../../store/estimator/reducers'
import { EstimatorSteps } from '../../components/estimator/EstimatorSteps'
import axios from 'axios'
import { RequestProvider } from 'react-request-hook'
import queryString from 'query-string'
import SEO from '../../components/seo'
import { animateScroll as scroll, animateScroll } from 'react-scroll'
import { isMobile, isFirefox, deviceDetect, osName } from 'react-device-detect'

const axiosInstance = axios.create({
  baseURL: '/api',
})

const animateCheckmark = () => {
  const obj = deviceDetect()

  if (osName === 'iOS') {
    return false
  }

  if (obj.browserName === 'Safari') {
    return false
  }

  return true
}

export const initialState = {
  estimator: {
    platform: undefined,
    captionsWithPrices: undefined,
    stepsFilled: undefined,
    sendPdfSuccess: undefined,
    sendPdf: undefined,
    userEmail: undefined,
    userPhone: undefined,
    userName: undefined,
    price: undefined,
    animateCheckmark: undefined,
    mailIsValid: undefined,
    nameIsValid: undefined,
    descriptionIsValid: undefined,
    description: undefined,
    phoneError: 'This field is required',
    displayMailError: undefined,
    uncheckedFields: [
      '1AppDesign',
      '2SignUpLogin',
      '3MapFunction',
      '4PhotosVideos',
      '5LiveChat',
      '6Payment',
      '7Notifications',
      '8List',
      '9SearchBar',
      '10AvailableOffline',
      '11Advertising',
      '12Admin',
    ],
    steps: {
      ['1AppDesign']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
      },
      ['2SignUpLogin']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
        ['4']: false,
      },
      ['3MapFunction']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
      },
      ['4PhotosVideos']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
      },
      ['5LiveChat']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
        ['4']: false,
      },
      ['6Payment']: {
        ['1']: false,
        ['2']: false,
      },
      ['7Notifications']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
        ['4']: false,
      },
      ['8List']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
        ['4']: false,
      },
      ['9SearchBar']: {
        ['1']: false,
        ['2']: false,
      },
      ['10AvailableOffline']: {
        ['1']: false,
        ['2']: false,
      },
      ['11Advertising']: {
        ['1']: false,
        ['2']: false,
        ['3']: false,
      },
      ['12Admin']: {
        ['1']: false,
        ['2']: false,
      },
    },
    countryIso2: 'us',
    ip: null,
  },
}

const platforms = {
  ['web']: 'Web App',
  ['mobile']: 'Mobile App',
}

const EstimatorWrapper = (props) => {
  const qsw = queryString.parse(props.location.search)

  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  return (
    <>
      <SEO />
      <Helmet
        title='Estimate Your App'
        meta={[
          {
            name: 'description',
            content:
              'Have you ever wondered how much does it cost to develop an app? Get your budget calculated beforehand to foresee and plan your investments carefully. What type of app are you planning to create?',
          },
        ]}
      >
        <html lang='en' />
      </Helmet>

      <div
        css={css`
          font-family: 'Montserrat', Arial, sans-serif;
          letter-spacing: -0.025em;
          min-height: 60vh;
        `}
      >
        <Shared.Divider />

        <Estimator {...props} />
      </div>

      <Shared.Divider />
    </>
  )
}

const Estimator = (props) => {
  const qs = queryString.parse(props.location.search)
  const platformVal = qs[''] ? qs[''] : 'web'
  const platform = platforms[platformVal]

  const [state, dispatch] = useReducer(appReducer, {
    estimator: { ...initialState.estimator, platform: platform },
  })

  const stepsFilled = Object.keys(state.estimator.steps).reduce((accState, key) => {
    const boolean = Object.keys(state.estimator.steps[key]).reduce((accState2, key2) => {
      if (!accState2) {
        if (state.estimator.steps[key][key2]) {
          return true
        }
      }
      return accState2
    }, false)

    accState.push(boolean)
    return accState
  }, [])

  const stepsFilledCount = stepsFilled.filter((i) => i).length

  const getUncheckedFields = () => {
    if (!state.estimator.captionsWithPrices) {
      return Object.keys(state.estimator.steps)
    }

    const captionsWithPrices = Object.keys(state.estimator.captionsWithPrices)

    const unchecked = Object.keys(state.estimator.steps).filter((i) => !captionsWithPrices.includes(i))

    dispatch({ type: 'SET_UNCHECKED_STEPS', payload: unchecked })

    // state.estimator.steps.filter(i=> Object.keys(i)[0])
  }

  useEffect(() => {
    getUncheckedFields()
  }, [state.estimator.stepsFilledCount])

  useEffect(() => {
    dispatch({ type: 'SET_STEPS_FILLED', payload: stepsFilled })
    dispatch({ type: 'SET_STEPS_FILLED_COUNT', payload: stepsFilledCount })
  }, [stepsFilledCount])

  const getIp = () => {}

  const fixMobileFirefoxAutoscrollToBottom = () => {
    if (isMobile && isFirefox) {
      animateScroll.scrollToTop({
        smooth: false,
        duration: 1,
      })
    }
  }

  useEffect(() => {
    fixMobileFirefoxAutoscrollToBottom()
    dispatch({ type: 'WHETHER_ANIMATE_CHECKMARK', payload: animateCheckmark() })
    fixMobileFirefoxAutoscrollToBottom()

    getUncheckedFields()
    fixMobileFirefoxAutoscrollToBottom()

    getIp()
    fixMobileFirefoxAutoscrollToBottom()
  }, [])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <EstimatorSteps />
    </StateContext.Provider>
  )
}

export default (props) => {
  return (
    <RequestProvider value={axiosInstance}>
      <EstimatorWrapper {...props} />
    </RequestProvider>
  )
}
