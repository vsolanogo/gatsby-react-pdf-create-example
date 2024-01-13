import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { graphql, StaticQuery } from 'gatsby'
import MailSVG from '../../images/home/mail.svg'
import PhoneSVG from '../../images/home/phone.svg'
import Img from 'gatsby-image'

const E = {}

E.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Heebo', Arial, sans-serif;
  border-top: 1px solid #eaeaea;
  padding-top: 2em;
  padding-bottom: 3em;
`

E.Button = styled.button`
  position: absolute;
  display: flex;
  margin: 0;
  align-items: center;
  padding: 0 1em;
  height: 2em;
`

E.Row3 = styled.div`
  display: flex;
  margin-top: 2em;
  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`

E.HouseName = styled.h5`
  font-size: 2.5em;
  letter-spacing: 0.03em;
  color: #fd7114;
  margin: 0;
  font-weight: 400;
  line-height: 1;
`

E.Address = styled.p`
  margin: 0;
  font-size: 1.8em;
  letter-spacing: 0.03em;
  color: #333;
`

E.Contact = styled.a`
  font-weight: 400;
  font-size: 1.5em;
  letter-spacing: 0.06em;
  color: #333;
  text-decoration: none;
`

E.Img = styled(Img)`
  width: 13em;
  height: 13em;
  margin-right: 1.4em;
  img {
    object-fit: contain !important;
    border-radius: 5px;
  }

  @media (max-width: 1000px) {
    border-radius: 100%;
    width: 6em;
    height: 6em;
  }
`

const Component = ({ houseName, address, personName, personImg, mail, phone, imgs }) => {
  return (
    <E.Wrapper>
      <E.HouseName>{houseName}</E.HouseName>
      <E.Address>{address}</E.Address>

      <E.Row3>
        <div
          css={css`
            display: flex;
          `}
        >
          <E.Img durationFadeIn={200} fluid={imgs[personImg].childImageSharp.fluid} />

          <div>
            <p
              css={css`
                margin: 0;
                font-size: 1.7em;
                letter-spacing: 0.03em;
                color: #333;
                @media (min-width: 1001px) {
                  display: none;
                }
              `}
            >
              Office representative
            </p>
            <p
              css={css`
                font-weight: 500;
                margin: 0;
                font-size: 2em;
                letter-spacing: 0.03em;
                color: #333;
                @media (min-width: 1001px) {
                  display: none;
                }
              `}
            >
              {personName}
            </p>
          </div>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <p
            css={css`
              margin: 0;
              font-size: 1.7em;
              letter-spacing: 0.03em;
              color: #333;
              @media (max-width: 1000px) {
                display: none;
              }
            `}
          >
            Office representative
          </p>
          <p
            css={css`
              font-weight: 500;
              margin: 0;
              font-size: 2em;
              letter-spacing: 0.03em;
              color: #333;
              @media (max-width: 1000px) {
                display: none;
              }
            `}
          >
            {personName}
          </p>

          <div
            css={css`
              background-color: #f5f5f5;
              border-radius: 5px;
              display: flex;
              flex-direction: column;
              padding: 0.6em;
              margin-top: 1.3em;
            `}
          >
            {mail && (
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <img
                  src={MailSVG}
                  alt='mail'
                  css={css`
                    height: 1em;
                    margin-right: 0.5em;
                  `}
                />
                <E.Contact href={`mailto:${mail}`}>{mail}</E.Contact>
              </div>
            )}

            {phone && (
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <img
                  src={PhoneSVG}
                  alt='phone'
                  css={css`
                    height: 1.25em;
                    margin-right: 0.5em;
                  `}
                />
                <E.Contact href={`tel:${phone.split(' ').join('')}`}>{phone}</E.Contact>
              </div>
            )}
          </div>
        </div>
      </E.Row3>
    </E.Wrapper>
  )
}

export const Office = (props) => (
  <StaticQuery
    query={graphql`
      query {
        Mykola_Striletskyi: file(relativePath: { eq: "company-portraits/Mykola_Striletskyi.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Serhiy_Zinchuk: file(relativePath: { eq: "contact-us/Serhiy_Zinchuk.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Nis_Eik: file(relativePath: { eq: "company-portraits-new/Nis_Eik.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Jim_Norris: file(relativePath: { eq: "company-portraits/Jim_Norris.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Sven_Kohrs: file(relativePath: { eq: "company-portraits/Sven_Kohrs.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Tom_Hay: file(relativePath: { eq: "company-portraits/Tom_Hay.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Andrew_Wilkin: file(relativePath: { eq: "contact-us/Andrew_Wilkin.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Andrii_Vasylenko: file(relativePath: { eq: "contact-us/Andrii_Vasylenko.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 200

              srcSetBreakpoints: [200]
              pngCompressionSpeed: 1
              webpQuality: 60
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(imgs) => <Component imgs={imgs} {...props} />}
  />
)
