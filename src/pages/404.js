import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import SEO from '../components/seo'
import Shared from '../components/shared'
import smile404 from '../images/404.svg'
import { Link } from 'gatsby'

const EMainSection = styled.div`
  min-height: calc(100vh - 88px);
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', Arial, sans-serif;
`

const EContainer = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  box-shadow: -1px 12px 23px rgba(0, 0, 0, 0.107654);
  border-radius: 8px;
  padding: 90px 48px;
  align-items: center;
  justify-content: center;
  grid-row-gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    width: auto;
    max-width: 600px;
    padding: 20px;
  }
`

const getPlainUrl = (qs) => {
  let plain404query = qs[Object.keys(qs)[0]].replace(/\//g, ' ').replace(/-/g, ' ')

  plain404query = [...new Set(plain404query.split(' '))].join(' ')

  if (plain404query.split(' ').length > 4) {
    plain404query = plain404query
      .split(' ')
      .map((i, index) => {
        if (!(index > 3)) {
          return i
        }
        return null
      })
      .filter((i) => !!i)
      .join(' ')
  }

  return plain404query.replace(/blog/, '').trim()
}

export default (props) => {
  const [plain404query, setPlain404query] = useState('')

  return (
    <>
      <Helmet
        title='Page Not Found'
        meta={[
          {
            name: 'description',
            content: 'Page Not Found',
          },
        ]}
      >
        <html lang='en' />
        <meta name='robots' content='follow, noarchive, noindex'></meta>
      </Helmet>

      <div
        css={css`
          font-family: 'Montserrat', Arial, sans-serif;
          letter-spacing: -0.025em;
          padding-top: 70px;
        `}
      ></div>

      <EMainSection>
        <EContainer>
          <img
            src={smile404}
            css={css`
              height: 100%;
              width: 100%;
            `}
            alt='smile'
          />
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                @media (max-width: 1100px) {
                  align-items: center;
                }
              `}
            >
              <h1
                css={css`
                  font-weight: 700;
                  font-size: 40px;
                  line-height: 49px;
                  color: #333;
                `}
              >
                <strong
                  css={css`
                    color: #bacace;
                  `}
                >
                  404
                </strong>{' '}
                Page Not Found
              </h1>
              <p
                css={css`
                  line-height: 26px;
                  font-size: 16px;
                `}
              >
                We can't find the page you're looking for. You can either return to the previous page, visit our
                homepage or contact our team.
              </p>

              <div
                css={css`
                  display: grid;
                  grid-template-columns: max-content max-content;
                  grid-column-gap: 16px;
                  grid-row-gap: 16px;
                  @media (max-width: 660px) {
                    grid-template-columns: 1fr;
                  }
                `}
              >
                <Link
                  css={css`
                    min-height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    height: 56px;
                    background: #fd7114;
                    color: #fff;
                    border: 1px solid #fd7114;
                    border-radius: 28px;
                    text-decoration: none;
                    width: 180px;
                    font-size: 15px;
                  `}
                  to={'/'}
                >
                  Visit Homepage
                </Link>
                <Link
                  css={css`
                    min-height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    height: 56px;
                    background: #fff;
                    color: #fd7114;
                    border: 1px solid #fd7114;
                    border-radius: 28px;
                    width: 180px;
                    text-decoration: none;
                    font-size: 15px;

                    :hover {
                      background: #fd7114;
                      color: #fff;
                    }
                  `}
                  to={'/contact-us/'}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </EContainer>
      </EMainSection>

      <SEO />

      <Shared.Divider />
    </>
  )
}
