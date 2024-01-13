import React, { useEffect, useContext } from 'react'
import { StateContext } from '../../store/estimator/contexts'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Element, scroller } from 'react-scroll'
import { SuggestedNextPlatformLink } from './SuggestedNextPlatformLink'
import { navigate } from 'gatsby'

const EOrangeVector = styled.div`
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  width: 266px;
  height: 231px;
  right: 100px;
  top: -108px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 293 256' fill='none'%3E%3Cpath d='M194.95 56.214c24.244 15.257 53.922 29.12 74.474 57.614s31.977 71.687 13.097 90.636c-18.88 19.02-68.064 13.864-107.286 22.154-39.292 8.22-68.622 29.818-97.394 28.633-28.772-1.254-57.057-25.22-69.388-54.618-12.33-29.33-8.64-63.954-4.668-100.67 4.04-36.645 8.43-75.24 30.096-90.985 21.597-15.675 60.4-8.43 89.173 3.483 28.842 11.913 47.652 28.563 71.896 43.75z' fill='%23fd7114'/%3E%3C/svg%3E");
  @media (max-width: 860px) {
    transform: scale(0.6);
    right: -60px;
    top: -100px;
  }
`
const EBlackVector = styled.div`
  background-repeat: no-repeat;
  width: 238px;
  height: 402px;
  position: absolute;
  z-index: 1;
  bottom: -181px;
  left: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 458' fill='none'%3E%3Cpath d='M26.266 399.346c-17.572-41.286-2.036-95.514-4.393-141.614-2.25-46.206-22.5-84.284-21.858-133.913S21.98 12.902 59.59 1.885C97.09-9.13 150.664 30.123 183.023 67.88c32.25 37.65 43.18 74.016 57.967 105.248 14.786 31.34 33.43 57.65 30.75 81.503s-26.68 45.244-51.324 85.247c-24.644 40.1-49.823 98.83-87.86 114.02-38.037 15.08-88.718-13.263-106.3-54.55z' fill='%23333'/%3E%3C/svg%3E");
  @media (max-width: 860px) {
    left: -50px;
    bottom: -260px;
    transform: scale(0.6);
  }
`

const EWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 170px 0 130px 0;
  @media (max-width: 860px) {
    margin: 70px 0 130px 0;
  }
`

const EInfo = styled.div`
  z-index: 10;
  background: transparent;
  width: 600px;
  height: 450px;
  position: relative;
  @media (max-width: 700px) {
    width: 80vw;
  }
`
const EGreenCheckmark = styled.div`
  height: 56px;
  width: 56px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M28 0C12.544 0 0 12.544 0 28C0 43.456 12.544 56 28 56C43.456 56 56 43.456 56 28C56 12.544 43.456 0 28 0ZM28 50.4C15.652 50.4 5.6 40.348 5.6 28C5.6 15.652 15.652 5.6 28 5.6C40.348 5.6 50.4 15.652 50.4 28C50.4 40.348 40.348 50.4 28 50.4ZM40.852 15.624L22.4 34.076L15.148 26.852L11.2 30.8L22.4 42L44.8 19.6L40.852 15.624Z' fill='%2300D983'/%3E%3C/svg%3E%0A");
  @media (max-width: 700px) {
    height: 34px;
    width: 34px;
  }
`

const EInfoTopWhiteBlock = styled.div`
  z-index: 200;
  background-color: white;
  padding: 0 70px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 25px -15px 50px rgba(0, 0, 0, 0.13);
  color: #333;
  @media (max-width: 860px) {
    padding: 0 20px;
  }
`

const EH2 = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #333333;
  margin-top: 20px;
  @media (max-width: 860px) {
    font-size: 20px;
    letter-spacing: -0.04em;
  }
`

const EDescription = styled.div`
  font-weight: 300;
  font-size: 17px;
  text-align: center;
  color: #333333;
  margin-top: 12px;
`

const button = () => css`
  border-radius: 100px;
  min-height: 56px;
  min-width: 336px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0 20px;
  text-align: center;
  @media (max-width: 860px) {
    width: 100%;
    min-width: unset;
  }
`

const EOrangeButton = styled.a`
  ${button};
  color: white;
  color: #fff;
  margin-top: 26px;
  background-color: #fd7114;
`

const EOrangeButtonTransparent = styled.a`
  ${button};
  color: white;
  color: #333;
  margin-top: 16px;
  border: 1px solid #fd7114;
`

export const numberWithSpaces = (x) => {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts.join('.')
}

export const SuccessEstimateWindow = ({ locale = 'en' }) => {
  const { state, dispatch } = useContext(StateContext)

  useEffect(() => {
    if (state.estimator.price) {
      navigate(`/thank-you-estimation/`, {
        state: {
          price: state.estimator.price,
        },
      })
    }
  }, [state.estimator.price])

  const currentUrl =
    state.estimator.platform === 'Mobile App'
      ? '/estimate-your-app/platform?=mobile'
      : '/estimate-your-app/platform?=web'

  const price = state.estimator.price ? numberWithSpaces(state.estimator.price) : ''

  return (
    <>
      &nbsp;
      <EWrapper
        css={css`
          display: none;
        `}
      >
        <Element name='SuccessEstimateWindow' />
        <EInfo>
          <EInfoTopWhiteBlock>
            <EGreenCheckmark />
            <EH2>Your approximate budget for this project is {`$${price} (+/- 30%)`.replace(/ /g, '\u00a0')}</EH2>
            <EDescription>Contact us to start your project right now.</EDescription>
            <EOrangeButton href='/booking-a-meeting/' target='_blank' rel='noreferrer'>
              Let's Build
            </EOrangeButton>
            <EOrangeButtonTransparent href={currentUrl}>Estimate again</EOrangeButtonTransparent>
          </EInfoTopWhiteBlock>
          <div
            css={css`
              background: 'transparent';
              height: 20px;
            `}
          ></div>

          <SuggestedNextPlatformLink locale={locale} />
        </EInfo>
        <EOrangeVector />
        <EBlackVector />
      </EWrapper>
    </>
  )
}

const OrangeVector = EOrangeVector
const Wrapper = EWrapper
const Info = EInfo
const InfoTopWhiteBlock = EInfoTopWhiteBlock
const H2 = EH2

export { OrangeVector, Wrapper, Info, InfoTopWhiteBlock, H2 }
