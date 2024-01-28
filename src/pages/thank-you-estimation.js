import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import Shared from '../components/shared'
import { Link, navigate } from 'gatsby'
import { css } from '@emotion/react'
import { numberWithSpaces } from '../components/estimator/SuccessEstimateWindow'
import { useTimeout } from 'usehooks-ts'

export default (props) => {
  const [runAnimation, setRunAnimation] = useState(false)
  const [rendered, setRendered] = useState(false)
  const [topText, setTopText] = useState('Sending...')

  useEffect(() => {
    setRendered(true)
  }, [])

  useTimeout(() => {
    setRunAnimation(true)
  }, 661)

  useTimeout(() => {
    setTopText('Check your inbox for an email with a rough estimate!')
  }, 3000)

  if (!props?.location?.state?.price) {
    if (rendered) {
      navigate('/estimate-your-app/')
    }

    return null
  }

  if (!rendered) {
    return null
  }

  return (
    <>
      <SEO />
      <Helmet title="Here's your app estimation">
        <html lang='en' />
      </Helmet>

      <div
        css={css`
          min-height: calc(100vh - 70px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            margin-top: 4em;
            border: 1px solid #e7e7e7;
            box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.15);
            align-self: center;
            padding: 4em 7em 3em 7em;
            display: flex;
            flex-direction: column;
            margin-bottom: 17em;
            @media (max-width: 640px) {
              padding: 1.5em;
            }
          `}
        >
          <Shared.H3Heebo
            css={css`
              font-weight: 700;
              max-width: 10em;
              padding: 0;
            `}
          >
            {topText}
          </Shared.H3Heebo>

          <div
            css={css`
              height: 4em;
              font-size: 4em;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0.7em 0;
            `}
          >
            <EWrapper>
              <EWrapper2>
                <ECheckmarkWrapper run={runAnimation}>
                  <svg x='0px' y='0px' viewBox='0 0 37 37' xmlSpace='preserve'>
                    <path
                      className='tick path'
                      fill='none'
                      stroke='#FD7114'
                      strokeWidth={3}
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      strokeMiterlimit={10}
                      d='M11.6 20L15.9 24.2 26.4 13.8'
                    />
                  </svg>
                </ECheckmarkWrapper>

                <ELeftline />
                <ELeftlinesmall />
                <ELogowrapper />
              </EWrapper2>
            </EWrapper>
          </div>

          <EDescr
            css={css`
              font-size: 1.5em;
              font-weight: 500;
            `}
          >
            Your approximate budget for this project is:
          </EDescr>

          <EDescr
            css={css`
              font-size: 2.3em;
              font-weight: 500;
            `}
          >
            {`$${numberWithSpaces(props.location.state.price)} (+/- 20%)`.replace(/ /g, '\u00a0')}
          </EDescr>

          <EDescr
            css={css`
              font-size: 1.35em;
              margin: 10px 0;
            `}
          >
            Contact us to start your project right now.
          </EDescr>

          <OrangeBtn to='/booking-a-meeting/'>
            <p>Schedule a Free Consultation</p>
          </OrangeBtn>
          <WhiteBtn to='/contact-us/'>
            <p>Let's Talk</p>
          </WhiteBtn>
        </div>

        <Shared.Divider count={4} />
      </div>
    </>
  )
}

const EWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.25, 0.9);
  position: absolute;
  width: 3.5em;
  height: 3.5em;
  overflow: hidden;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`

const EWrapper2 = styled.div`
  width: 3.5em;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ELogowrapper = styled.div`
  width: 3.5em;
  height: 3.5em;
  border: 0.5em solid #333333;
  border-radius: 100%;
  position: absolute;
`

const ELeftline = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 1em;
  width: 0.56em;
  background: #333333;
  border-radius: 1em;
  border-top-left-radius: 100%;
`

const ELeftlinesmall = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.5em;
  height: 1.3em;
  width: 0.2em;
  background: #333333;
  border-radius: 1em;
  border-top-left-radius: 100%;
`

const ECheckmarkWrapper = styled.div`
  width: 100%;
  height: 100%;
  .circ {
    opacity: 0;
    stroke-dasharray: 130;
    stroke-dashoffset: 130;
    transition: all 1s;
  }
  .tick {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    transition: stroke-dashoffset 1s 0.5s ease-out;
  }
  svg .path {
    opacity: ${(props) => (props.run ? '1' : 'none')};
    stroke-dashoffset: ${(props) => (props.run ? '0' : 'none')};
  }
`
const EDescr = styled.p`
  margin: 0.2em 0;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 400;
  font-size: 2.0625em;
  letter-spacing: 0.05em;
  color: #333;
  max-width: 50em;
`

const buttonsStyle = css`
  min-width: 15em;
  min-height: 3.5em;
  text-decoration: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.1125em;
  font-weight: 500;
  font-family: 'Heebo', sans-serif;
  margin-top: 1em;
  p {
    font-size: 1.4em;
    margin: 0;
  }
`

const OrangeBtn = styled(Link)`
  ${buttonsStyle}
  background-color: #FD7114;
  color: #fff;
`

const WhiteBtn = styled(Link)`
  ${buttonsStyle}
  background-color: #fff;
  border: 2px solid #fd7114;
  color: #fd7114;
  border-radius: 3px;
`
