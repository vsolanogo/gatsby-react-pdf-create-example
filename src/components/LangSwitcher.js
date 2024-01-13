import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const EBlock = styled.div`
  background: ${(props) => (props.enabled ? '#FD7114' : '#1b1c1d')};
  color: #fff;
  font-family: 'Heebo', Arial, sans-serif;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 15px;
`

export const LangSwitcher = ({ linkTo, currentLang, href = false }) => {
  if (href) {
    return (
      <a
        href={linkTo}
        target={'_blank'}
        css={css`
          border: 2px solid #fd7114;
          display: flex;
          text-decoration: none;
          background: #fd7114;
        `}
      >
        <EBlock enabled={currentLang === 'en'}>EN</EBlock>
        <EBlock enabled={currentLang === 'de'}>DE</EBlock>
      </a>
    )
  }

  return (
    <Link
      to={linkTo}
      css={css`
        border: 2px solid #fd7114;
        display: flex;
        text-decoration: none;
        background: #fd7114;
      `}
    >
      <EBlock enabled={currentLang === 'en'}>EN</EBlock>
      <EBlock enabled={currentLang === 'de'}>DE</EBlock>
    </Link>
  )
}
