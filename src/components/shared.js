import styled from '@emotion/styled'
import React from 'react'
import { css } from '@emotion/react'
import RightAngleSVG from '../images/icons/right-angle.svg'
import Img from 'gatsby-image'
import WindowDimentions from './WindowDimentions'
import { SharedRightAngle } from '../shared/icons'
import DeviceDetect from './DeviceDetect'

const E = {}

export const AlertFix = styled.div`
  position: absolute;
  a.btn.btn-sm.btn-primary {
    display: block;
    background-color: rgb(48, 133, 214);
    color: #fff;
    transition: all 0.3s;
    font-weight: 500;
    margin: 1em 0.3em 0;
    padding: 0.625em 2em;
    text-decoration: none;
    border-radius: 3px;
    font-weight: 500;
    :hover {
      background-color: #2d79c6;
    }
  }
`

export const SharedDeleteCV = styled.button`
  border: none;
  background: #fff;
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: center;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' fill='none'%3E%3Cpath d='M4 3.434L7.317.117a.4.4 0 0 1 .566 0 .4.4 0 0 1 0 .566L4.566 4l3.317 3.317a.4.4 0 0 1-.566.566L4 4.566.683 7.883a.4.4 0 0 1-.566 0 .4.4 0 0 1 0-.566L3.434 4 .117.683A.4.4 0 0 1 .683.117L4 3.434z' fill='%23ff4757'/%3E%3C/svg%3E");
  :hover {
    filter: saturate(10);
  }
`

export const SharedRightAngleOfTheButton2 = ({ isLeft }) => {
  if (isLeft) {
    return (
      <img
        src={RightAngleSVG}
        alt='arrow icon'
        css={css`
          display: inline;
          margin-right: 0.1em;
          height: 0.8em;
          transform: rotate(180deg);
          transition: all 0.2s cubic-bezier(0, 1, 1, 1);
        `}
      />
    )
  }
  return (
    <img
      src={RightAngleSVG}
      alt='arrow icon'
      css={css`
        display: inline;
        margin-left: 0.1em;
        height: 0.8em;
        transition: all 0.2s cubic-bezier(0, 1, 1, 1);
      `}
    />
  )
}

export const SharedRightAngleOfTheButton = ({ isLeft }) => {
  if (isLeft) {
    return (
      <img
        src={RightAngleSVG}
        alt='arrow icon'
        css={css`
          display: inline;
          margin-right: 1.25em;
          height: 0.8em;
          transform: rotate(180deg);
          transition: all 0.2s cubic-bezier(0, 1, 1, 1);
        `}
      />
    )
  }
  return (
    <img
      src={RightAngleSVG}
      alt='arrow icon'
      css={css`
        display: inline;
        margin-left: 1.25em;
        height: 0.8em;
        transition: all 0.2s cubic-bezier(0, 1, 1, 1);
      `}
    />
  )
}

export const SharedRightAngleOfTheButton21 = ({ color, height }) => {
  return <SharedRightAngle color={color} height='13' />
}

export const SharedRightAngleOfTheButton22 = ({ color }) => {
  return <SharedRightAngle color={color} height='13' />
}

export const SharedOrangeButtonWithRightAngle = `
  font-family: "Heebo", Arial, sans-serif;
  font-size: 1.5em;
  background-color: #fd7114;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding:  0 1em 0 1.5em;
  min-height: 2.4em;
  width: max-content;
  border: 0;
  white-space: nowrap;
  outline:none;
  letter-spacing: 0.0625em;
  font-weight: 500;
  
  img:nth-of-type(1) {
    visibility: visible;
    filter: opacity(1);
  }

  img:nth-of-type(2) {
    visibility: hidden;
    filter: opacity(0);
  }

  :hover {
    img:nth-of-type(1) {
      visibility: hidden;
      filter: opacity(0);
    }

    img:nth-of-type(2) {
      visibility: visible;
      filter: opacity(1);
    }
  }

  @media(max-width: 640px) {
    min-height: 46px;
    border-radius: 3px;
    border: 1px solid #FD7114;
    background-color: transparent;
    color: #5A5D5E;
    text-transform: uppercase;
    padding-left: 46px;
    padding-right: 46px;
    width: min-content !important;
    font-size: 1.6em;

    img:nth-of-type(1) {
      display: none;
    }

    img:nth-of-type(2) {
      display: none;
    }
  }
`

E.Divider = styled.div`
  width: 100%;
  height: ${(props) => (props.count ? `${props.count * 5}em` : '5em')};
  @media (max-width: 1300px) {
    height: ${(props) => (props.count ? `${props.count * 3.75}em` : '3.75em')};
  }
  @media (max-width: 900px) {
    height: ${(props) => (props.count ? `${props.count * 2.5}em` : '2.5em')};
  }

  min-height: ${(props) => (props.count ? `${props.count * 25}px` : '25px')};
`

E.DividerHalf = styled.div`
  width: 100%;
  height: 2.5em;
  @media (max-width: 1300px) {
    height: 1.875em;
  }
  @media (max-width: 900px) {
    height: 1.25em;
  }

  min-height: 25px;
`

E.HeaderOrangeDividerLine = styled.div`
  width: 92px;
  margin: 30px auto 24px;
  border: 1px solid #fd7114;
  background-color: #fd7114;
  height: 1px;
  border-radius: 2px;
`

E.GreyHeaderWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  background-color: #333;
  min-height: 22em;
  position: relative;
  overflow: hidden;
`

E.GreyHeaderContentWrapper = styled.div`
  max-width: 96.25em;
  width: 100%;
  margin: auto;
  position: relative;
  margin: 0 auto;
  display: flex;
`

E.GreyHeaderContent = styled.div`
  max-width: 65em;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 10;
`

E.H3 = styled.h3`
  font-size: 3em;
  font-weight: 400;
  letter-spacing: -0.025em;
  text-align: center;
  max-width: 70em;
  padding: 0 0.8em;
  margin: auto;
  font-family: 'Montserrat', Arial, sans-serif;

  @media (max-width: 640px) {
    font-size: 2.5em;
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.H3Description = styled.p`
  font-size: 15.4px;
  letter-spacing: 0.6px;
  color: #212121;
  margin: 1.25em auto auto;
  padding: 0 2em;
  max-width: 77em;
  text-align: center;
  font-family: 'Montserrat', Arial, sans-serif;

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.H3Heebo = styled.h3`
  margin: 0 auto;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 700;
  font-size: 2.922em;
  line-height: 1.322;
  text-align: center;
  letter-spacing: 1.5px;
  color: #333;
  padding: 0 1.25em;
  max-width: 37em;

  @media (max-width: 40em) {
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.H3DescriptionHeebo = styled.p`
  margin: 0 auto;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 400;
  font-size: 2.0625em;
  text-align: center;
  letter-spacing: 1px;
  color: #333;
  padding: 0 1.25em;
  max-width: 50em;
  @media (max-width: 40em) {
    letter-spacing: 0.5px;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.Text = styled.p`
  margin: 0;
  letter-spacing: 1px;
  color: #333;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.375em;
  padding: 0;

  @media (max-width: 640px) {
    font-size: 1.622em;
  }
`

E.MainFeaturesH4 = styled.h3`
  margin: 0;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 700;
  font-size: 2.18em;
  text-align: initial;
  letter-spacing: 1.5px;
  color: #000;
  padding: 0;
  line-height: 1;

  @media (max-width: 40em) {
    letter-spacing: 1px;
  }
`

E.OverviewLiDescr = styled.p`
  margin: 0;
  font-size: 1.5em;
  letter-spacing: 0.06em;
`

E.OverviewLiTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.25em;
  letter-spacing: 0.06em;
`

E.OverviewLiContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

E.OverviewLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 3.5em;
  padding-left: 2em;
`

export const PortfolioLogoImg = styled(Img)`
  width: ${(props) => `${props.aspectRatio * props.height}em !important`};
  height: ${(props) => `${props.height}em  !important`};

  img {
    object-fit: contain !important;
  }

  @media (max-width: 700px) {
    margin: auto;
  }
`

export const SharedLeftImageAndText = styled.div`
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  padding: 1.5em;
  margin: 0 auto 1.5em auto;
  display: flex;
  max-width: 96em;

  @media (min-width: 1100px) {
    padding-right: 150px;
  }
`

export const SharedLeftImageAndTextContent = styled.div`
  display: flex;
  h4 {
    font-size: 1.54em;
    font-family: 'Heebo', Arial, sans-serif;
    font-weight: 500;
    margin: 0;
    align-self: center;
  }

  p {
    font-size: 1.34em;
    font-family: 'Heebo', Arial, sans-serif;
    margin: 0;
    align-self: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const SharedLeftImageAndTextImg = styled.img`
  width: 6em;
  flex: 0 0 auto;
  pointer-events: none;
  margin-right: 3em;
  margin-left: 1.5em;
  @media (max-width: 640px) {
    margin: 2em auto;
  }
`

export default E
