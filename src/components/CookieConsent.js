import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const CookiesSVG = (props) => (
  <svg viewBox='0 0 34.83 26.81' {...props}>
    <path
      d='M23.13 0a11.68 11.68 0 00-8.79 4 13.56 13.56 0 012.29 1 9.36 9.36 0 116.5 16.1h-.65a13 13 0 01-1.15 2.22 12.13 12.13 0 001.8.14 11.7 11.7 0 100-23.46zm1.94 10.76a1.72 1.72 0 101.71 1.72 1.72 1.72 0 00-1.71-1.72zm-.33-5.46a2.11 2.11 0 10-2.11 2.12 2.11 2.11 0 002.11-2.12zM24.35 18a1.22 1.22 0 101.22-1.21A1.22 1.22 0 0024.35 18zm6.91-8.23a1.61 1.61 0 00-3.22 0 1.61 1.61 0 103.22 0zm-20.73-4a10.53 10.53 0 1010.53 10.51A10.53 10.53 0 0010.53 5.76zM2.65 13a2.22 2.22 0 112.22 2.2A2.22 2.22 0 012.65 13zm3.5 8.6a1.65 1.65 0 111.65-1.67 1.65 1.65 0 01-1.65 1.65zM10 16.28A1.72 1.72 0 1111.74 18 1.72 1.72 0 0110 16.28zm3 7.52a1.22 1.22 0 111.22-1.22A1.22 1.22 0 0113 23.8zm.5-11.57a2.11 2.11 0 112.12-2.11 2.12 2.12 0 01-2.17 2.11zm3.5 6.48a1.22 1.22 0 111.22-1.21A1.21 1.21 0 0117 18.71z'
      fill='#fff'
    />
  </svg>
)

const ECookieConsent = styled.div`
  display: grid;
  background-color: #fd7114;
  grid-template-columns: max-content minmax(0, max-content);
  grid-template-rows: minmax(0, max-content);
  grid-column-gap: 1.25em;
  grid-row-gap: 0.625em;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  align-content: center;
  bottom: 0;
  width: 100%;
  padding: 0.875em 1.25em 0.875em 1.25em;
  z-index: 1221;
  filter: drop-shadow(0 0px 2px #333);
  font-weight: 400;
  color: white;
  justify-items: center;
  font-family: 'Montserrat', Arial, sans-serif;
  height: 56px;
  font-size: 1.25em;
`

const ETextAndButtonBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, max-content) max-content;
  grid-column-gap: 1.25em;
  align-items: center;
  justify-content: center;
`

const EInfoText = styled.div`
  display: inline-block;
  text-align: center;
`

const EReadMoreLink = styled.a`
  color: white;
  text-decoration: underline;
  display: inline-block;
`

const EAcceptButton = styled.button`
  cursor: pointer;
  border: 2px solid white;
  font: inherit;
  color: white;
  background: #fd7114;
  padding: 0.4375em 1.875em;
  border-radius: 100px;
  transition: all 0.2s;

  :hover {
    color: #fd7114;
    background: white;
  }
`

const EFillerBlock = styled.div`
  width: 100%;
  background: black;
  height: 56px;
`

export const CookieConsent = ({ onCookiesAccept }) => {
  return (
    <>
      <EFillerBlock />
      <ECookieConsent>
        <CookiesSVG width='35' height='26' />
        <ETextAndButtonBlock>
          <EInfoText>
            This site uses cookies to improve your user experience.&nbsp;
            <EReadMoreLink href={'/gdpr-compliance/'}>Read more</EReadMoreLink>
          </EInfoText>
          <EAcceptButton onClick={onCookiesAccept}>Accept</EAcceptButton>
        </ETextAndButtonBlock>
      </ECookieConsent>
    </>
  )
}
