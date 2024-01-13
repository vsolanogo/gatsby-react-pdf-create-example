import React, { useEffect, useContext, useState } from 'react'
import { StateContext } from '../../store/estimator/contexts'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import EstimatorIcons from './icons'
import { Element, scroller } from 'react-scroll'
import { isMobile } from 'react-device-detect'
import queryString from 'query-string'

const ENewEstimateSuggestion = styled.a`
  cursor: pointer;
  border-left: 10px solid #fd7114;
  box-shadow: -25px 15px 50px rgba(0, 0, 0, 0.13);
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  background-color: white;
  min-height: 100px;
  padding: 0 20px;
  align-items: center;
  grid-column-gap: 20px;
  text-decoration: none;
  color: #333;
  @media (max-width: 640px) {
    padding: 0 8px;
  }
  path {
    fill: #1d1d1d;
  }
  .svgbg {
    fill: #fff;
  }
`
const EArrow = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 21' fill='none'%3E%3Cpath fill-rule='evenodd' d='M2.5 0L.033 2.468 8.048 10.5.033 18.533 2.5 21 13 10.5 2.5 0z' fill='%231d1d1d'/%3E%3C/svg%3E");
`
const ESuggestionCaption = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  @media (max-width: 860px) {
    font-size: 16px;
  }
`
const ESuggestionDescription = styled.div`
  font-weight: 300;
  font-size: 15px;
`

export const SuggestedNextPlatformLink = ({ locale = 'en' }) => {
  const { state, dispatch } = useContext(StateContext)
  const [suggestedNextPlatformLink, setSuggestedNextPlatformLink] = useState('/estimate-your-app/platform?=mobile')

  useEffect(() => {
    const suggestedNextPlatformLink =
      state.estimator.platform === 'Mobile App'
        ? '/estimate-your-app/platform?=web'
        : '/estimate-your-app/platform?=mobile'

    setSuggestedNextPlatformLink(suggestedNextPlatformLink)
  }, [])

  return <Component suggestedNextPlatformLink={suggestedNextPlatformLink} platform={state.estimator.platform} />
}
const Component = ({ suggestedNextPlatformLink }) => {
  const [platform, setPlatform] = useState('mobile')

  useEffect(() => {
    const qs = queryString.parse(window.location.search)

    if (Object.keys(qs).length !== 0) {
      if (qs[''] === 'mobile') {
        setPlatform('mobile')
      } else {
        setPlatform('web')
      }
    }
  }, [])

  return (
    <>
      {platform === 'mobile' && (
        <ENewEstimateSuggestion href={'/estimate-your-app/platform?=web'}>
          {isMobile && <EstimatorIcons.ComputerPlatform height={24} width={38} />}
          {!isMobile && <EstimatorIcons.ComputerPlatform />}

          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <ESuggestionCaption>Estimate for Web App</ESuggestionCaption>
            <ESuggestionDescription>For Desktop</ESuggestionDescription>
          </div>

          <EArrow />
        </ENewEstimateSuggestion>
      )}

      {platform === 'web' && (
        <ENewEstimateSuggestion href={'/estimate-your-app/platform?=mobile'}>
          {isMobile && <EstimatorIcons.MobilePlatform height={31} width={20} />}
          {!isMobile && <EstimatorIcons.MobilePlatform />}

          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <ESuggestionCaption>Estimate for Mobile App</ESuggestionCaption>
            <ESuggestionDescription>For Smartphones/Tablets</ESuggestionDescription>
          </div>

          <EArrow />
        </ENewEstimateSuggestion>
      )}
    </>
  )
}
