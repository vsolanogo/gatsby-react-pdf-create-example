import React from 'react'
import styled from '@emotion/styled'
import EstimatorIcons from './icons'
import { StopWatchDescription } from './StopWatchDescription'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const EWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  padding: 0 20px;
  margin: auto;
`

const EBottomHighlight = styled.span`
  display: inline-block;
  position: relative;
  :after {
    content: '';
    width: 100%;
    position: absolute;
    border: 7px solid rgba(253, 113, 20, 0.2);
    left: 0;
    top: calc(100% - 19px);
    z-index: -1;
  }
`

const EH1 = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  margin: unset;
  color: #333333;
`
const EH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #333333;
  @media (max-width: 640px) {
    letter-spacing: -0.04em;
  }
`

const EButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 46px;
  grid-row-gap: 46px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
  }
`

const EButton = styled(Link)`
  border: 1px solid #e4e8ee;
  border-radius: 10px;
  box-shadow: none;
  transition: all 0.3s;
  background: #fff;

  cursor: pointer;
  align-items: center;
  padding: 0 30px 30px 30px;
  display: block;
  text-decoration: unset;
  path {
    transition: all 0.3s;
    fill: #1d1d1d;
  }
  &:hover {
    border: 1px solid transparent;
    box-shadow: -1px 12px 23px rgba(0, 0, 0, 0.107654);

    path {
      fill: #fd7114;
    }

    .svgbg {
      fill: #fff;
    }
  }
  .svgbg {
    fill: #fff;
  }
`

const EButtonContent = styled.div`
  padding: 10px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(130px, 1fr) 1fr min-content;
  align-items: center;
  justify-content: center;
  svg {
    justify-self: center;
  }
  @media (max-width: 640px) {
    grid-template-rows: minmax(80px, 1fr) 1fr min-content;
  }
`

const EButtonTitle = styled.div`
  font-weight: 500;
  font-size: 25px;
  color: #333333;
  margin: 10px 0;
`

const EButtonDescription = styled.div`
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  margin: 8px 0 20px 0;
  text-align: center;
`

const EButtonsButton = styled.div`
  border: 1px solid #fd7114;
  color: #333;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.6px;
  transition: all 0.3s;
  background: #fff;
  border-radius: 100px;
  padding: 20px;
  @media (max-width: 780px) {
    padding: 12px;
  }
  :hover {
    color: #fff;
    background: #fd7114;
  }
`

const Ec2 = styled.div`
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    min-height: 100px;
  }
`

const locales = {
  en: {
    toAppCostEstimatorMobile: '/estimate-your-app/platform?=mobile',
    toAppCostEstimatorWeb: '/estimate-your-app/platform?=web',
  },
}

export const PlatformSelect = ({ locale = 'en' }) => {
  // const setDefaultState = (str) => {
  //   window.location.href = `${window.location.href.replace(
  //     /estimate-your-app.*/,
  //     ""
  //   )}estimate-your-app/?platform=${str}`

  //   // window.history.pushState(
  //   //   {
  //   //     id: "stages",
  //   //   },
  //   //   document.title,
  //   //   `${window.location.href.replace(
  //   //     /estimate-your-app.*/,
  //   //     ""
  //   //   )}estimate-your-app/?platform=${str}`
  //   // )
  // }

  return (
    <EWrapper>
      <EH1>
        App Development <br /> Cost <EBottomHighlight>Calculator</EBottomHighlight>
      </EH1>
      <EH2>
        {!isMobile && <span>Have you ever wondered how much it costs to develop an app?</span>}
        <br />
        Get your budget calculated beforehand to foresee and plan your investments carefully.
        <div
          css={css`
            margin-top: 10px;
          `}
        >
          What type of an app are you planning to create?
        </div>
      </EH2>

      <EButtons>
        <EButton to={locales[locale].toAppCostEstimatorMobile}>
          <EButtonContent>
            <EstimatorIcons.MobilePlatform />
            <Ec2>
              <EButtonTitle>Mobile App </EButtonTitle>
              <EButtonDescription>For Smartphones/Tablets</EButtonDescription>
            </Ec2>
            <EButtonsButton>Get a Mobile Estimate</EButtonsButton>
          </EButtonContent>
        </EButton>

        <EButton to={locales[locale].toAppCostEstimatorWeb}>
          <EButtonContent>
            <EstimatorIcons.ComputerPlatform />
            <Ec2>
              <EButtonTitle>Web App</EButtonTitle>
              <EButtonDescription>Web App/Marketplace for Desktops</EButtonDescription>
            </Ec2>
            <EButtonsButton>Get a Web Estimate</EButtonsButton>
          </EButtonContent>
        </EButton>
      </EButtons>

      <StopWatchDescription />
    </EWrapper>
  )
}
