import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import Shared from '../components/shared'
import axios from 'axios'
import { RequestProvider } from 'react-request-hook'
import SEO from '../components/seo'
import { PlatformSelect } from '../components/estimator/PlatformSelect'

const axiosInstance = axios.create({
  baseURL: '/api',
})

const EstimatorWrapper = (props) => {
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

        <PlatformSelect />
      </div>

      <Shared.Divider />
    </>
  )
}

export default (props) => {
  return (
    <RequestProvider value={axiosInstance}>
      <EstimatorWrapper {...props} />
    </RequestProvider>
  )
}
