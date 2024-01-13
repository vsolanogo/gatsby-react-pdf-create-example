import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import x2 from '../images/icons/x2.svg'
import { Location } from '@reach/router'
import styled from '@emotion/styled'

const EMenuItem = styled(Link)`
  display: block;
  text-align: center;
  padding: 18px 15px;
  font-size: 20px;
  border: 0;
  font-weight: ${(props) => (props.highlight ? '600' : '400')};
  width: fit-content;
  font-family: Heebo;
  margin-left: 20px;
  transition: all 1s ease;
  color: ${(props) => (props.highlight ? '#FD7114' : '#333')};
  text-decoration: none;
  cursor: pointer;
`

const EMenuItemA = styled.a`
  display: block;
  text-align: center;
  padding: 18px 15px;
  font-size: 20px;
  border: 0;
  font-weight: ${(props) => (props.highlight ? 500 : 400)};
  width: fit-content;
  font-family: Heebo;
  margin-left: 20px;
  transition: all 1s ease;
  color: ${(props) => (props.highlight ? '#FD7114' : '#333')};
  text-decoration: none;
  cursor: pointer;
`

const EDrawerItself = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const EClose = styled.button`
  overflow: 0;
  padding: 20px;
  width: 73px;
  height: 80px;
  position: absolute;
  background: transparent;
  border: 0;
  right: 30px;
  top: 0px;
  outline: 0;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`

export default ({ handleClose, localeText, val }) => {
  if (val === 0) {
    return null
  }

  return (
    <Location>
      {({ location }) => (
        <>
          <EDrawerItself>
            <EClose
              onClick={() => {
                handleClose()
              }}
            >
              <img src={x2} alt='close btn' />
            </EClose>

            <EMenuItem
              css={css`
                margin-top: 76px;
              `}
              to={localeText.home.link}
              highlight={location.pathname === '/' || location.pathname === '/de/'}
            >
              {localeText.home.text}
            </EMenuItem>

            <EMenuItem to={localeText.services.link} highlight={location.pathname.includes(localeText.services.link)}>
              {localeText.services.text}
            </EMenuItem>

            <EMenuItem
              to={localeText.industries.link}
              highlight={location.pathname.includes(localeText.industries.link)}
            >
              {localeText.industries.text}
            </EMenuItem>

            <EMenuItem to={localeText.portfolio.link} highlight={location.pathname.includes(localeText.portfolio.link)}>
              {localeText.portfolio.text}
            </EMenuItem>

            <EMenuItem to={localeText.company.link} highlight={location.pathname.includes(localeText.company.link)}>
              {localeText.company.text}
            </EMenuItem>

            <EMenuItemA href='/blog/' highlight={location.pathname.includes('/blog/')}>
              Blog
            </EMenuItemA>

            <EMenuItem to={localeText.contactUs.link} highlight={location.pathname.includes(localeText.contactUs.link)}>
              {localeText.contactUs.text}
            </EMenuItem>
          </EDrawerItself>
        </>
      )}
    </Location>
  )
}
