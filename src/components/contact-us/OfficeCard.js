import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { StateContext } from '../../store/contactUs/contexts'

const E = {}

E.Card = styled.div`
  border: none;
  background: #fff;

  border-radius: 0.7rem;
  font-size: 14px;
  color: #333;
  box-shadow: 7.3px 6.8px 23px 0 rgba(0, 0, 0, 0.08);
  padding: 27px 9px 21px 16px;
  min-width: 0;
  position: relative;
  z-index: 12;
  cursor: pointer;
  :hover {
    transition-duration: 0.25s;
    transform: translateY(-5px);
  }
`

E.CardGrid = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;
`

E.h3 = styled.h3`
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 14px;
  margin: 0 0 20px 0;
  letter-spacing: -0.02em;
  border-bottom: 1px solid #ccc;
`

E.Image = styled(Img)`
  height: 27px;
  width: 27px;
  border-radius: 50%;
  object-fit: center;
  border: 1px solid #fd7114;
`

E.MailIcon = ({ width = '14', height = '20' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 483.3 483.3' fill='#666'>
    <path d='M424.3 57.75H59.1c-32.6 0-59.1 26.5-59.1 59.1v249.6c0 32.6 26.5 59.1 59.1 59.1h365.1c32.6 0 59.1-26.5 59.1-59.1v-249.5c.1-32.6-26.4-59.2-59-59.2zm32.1 308.7c0 17.7-14.4 32.1-32.1 32.1H59.1c-17.7 0-32.1-14.4-32.1-32.1v-249.5c0-17.7 14.4-32.1 32.1-32.1h365.1c17.7 0 32.1 14.4 32.1 32.1v249.5h.1zm-151.6-127.9l118.2-106c5.5-5 6-13.5 1-19.1-5-5.5-13.5-6-19.1-1l-163 146.3-31.8-28.4c-.1-.1-.2-.2-.2-.3-.7-.7-1.4-1.3-2.2-1.9L78.3 112.35c-5.6-5-14.1-4.5-19.1 1.1s-4.5 14.1 1.1 19.1l119.6 106.9-119.1 111.5c-5.4 5.1-5.7 13.6-.6 19.1 2.7 2.8 6.3 4.3 9.9 4.3a13.53 13.53 0 0 0 9.2-3.6l120.9-113.1 32.8 29.3a13.49 13.49 0 0 0 9 3.4c3.2 0 6.5-1.2 9-3.5l33.7-30.2 120.2 114.2c2.6 2.5 6 3.7 9.3 3.7 3.6 0 7.1-1.4 9.8-4.2 5.1-5.4 4.9-14-.5-19.1l-118.7-112.7z' />
  </svg>
)

E.LocationIcon = ({ width = '14', height = '20' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 477 477' fill='#666'>
    <path d='M238.4 0C133 0 47.2 85.8 47.2 191.2c0 12 1.1 24.1 3.4 35.9.1.7.5 2.8 1.3 6.4 2.9 12.9 7.2 25.6 12.8 37.7 20.6 48.5 65.9 123 165.3 202.8 2.5 2 5.5 3 8.5 3s6-1 8.5-3c99.3-79.8 144.7-154.3 165.3-202.8 5.6-12.1 9.9-24.7 12.8-37.7.8-3.6 1.2-5.7 1.3-6.4 2.2-11.8 3.4-23.9 3.4-35.9C429.6 85.8 343.8 0 238.4 0zm161.2 222.4c0 .2-.1.4-.1.6l-.9 4.3v.2a158.75 158.75 0 0 1-11.1 32.6c-.1.1-.1.3-.2.4-18.7 44.3-59.7 111.9-148.9 185.6-89.2-73.7-130.2-141.3-148.9-185.6-.1-.1-.1-.3-.2-.4-4.8-10.4-8.5-21.4-11.1-32.6v-.2c-.6-2.3-.8-3.8-.9-4.3 0-.2-.1-.4-.1-.7-2-10.3-3-20.7-3-31.2 0-90.5 73.7-164.2 164.2-164.2s164.2 73.7 164.2 164.2c0 10.6-1 21.1-3 31.3zM238.4 71.9c-66.9 0-121.4 54.5-121.4 121.4s54.5 121.4 121.4 121.4 121.4-54.5 121.4-121.4S305.3 71.9 238.4 71.9zm0 215.8c-52.1 0-94.4-42.4-94.4-94.4s42.4-94.4 94.4-94.4 94.4 42.4 94.4 94.4-42.3 94.4-94.4 94.4z' />
  </svg>
)

E.HouseIcon = ({ width = '14', height = '20' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 27.02 27.02' fill='#666'>
    <path d='M3.674 24.876s-.024.604.566.604l6.8-.008.01-5.58s-.096-.92.797-.92h2.826c1.056 0 1 .92 1 .92l-.012 5.563h6.667c.75 0 .715-.752.715-.752v-10.3L13.65 6.055l-9.975 8.358v10.463zM0 13.635s.847 1.56 2.694 0l11.038-9.338 10.35 9.28c2.138 1.542 2.94 0 2.94 0L13.732 1.54 0 13.635zm23.83-9.36h-2.662l.01 3.228 2.65 2.25z' />
  </svg>
)

E.PhoneIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'>
    <path
      fill='#9fa3a7'
      fill-rule='evenodd'
      d='M14.286 11.486c-.04-.12-.292-.295-.755-.527a24.177 24.177 0 0 0-.537-.298 53.083 53.083 0 0 1-.631-.348 18.318 18.318 0 0 1-.531-.308l-.25-.174a2.72 2.72 0 0 0-.353-.213.638.638 0 0 0-.283-.07c-.132 0-.298.094-.497.283a4.927 4.927 0 0 0-.546.616 5.996 5.996 0 0 1-.527.617c-.185.188-.338.283-.457.283a.674.674 0 0 1-.223-.05 2.113 2.113 0 0 1-.204-.084 3.85 3.85 0 0 1-.239-.14 8.055 8.055 0 0 0-.188-.114A10.436 10.436 0 0 1 5.73 9.23C5.08 8.58 4.505 7.802 4 6.895a3.267 3.267 0 0 0-.114-.189 3.69 3.69 0 0 1-.139-.239 2.113 2.113 0 0 1-.084-.204.645.645 0 0 1-.05-.223c0-.12.094-.272.283-.457s.394-.36.616-.527.428-.348.616-.547.284-.364.284-.496a.656.656 0 0 0-.07-.284 2.743 2.743 0 0 0-.214-.352 11.23 11.23 0 0 0-.174-.249 21.093 21.093 0 0 1-.308-.532 37.87 37.87 0 0 1-.347-.631L4 1.43C3.77.965 3.594.713 3.475.673a.56.56 0 0 0-.209-.029c-.18 0-.412.033-.7.1a3.931 3.931 0 0 0-.681.209c-.33.14-.682.543-1.053 1.212-.338.623-.507 1.24-.507 1.85a3.97 3.97 0 0 0 .035.526c.023.173.064.363.124.572l.144.467.204.55.18.487c.23.65.506 1.23.824 1.74.524.842 1.24 1.716 2.147 2.624s1.782 1.623 2.623 2.147a9.01 9.01 0 0 0 1.739.825l.487.178.55.204.467.144a4.17 4.17 0 0 0 .571.125c.173.023.348.034.527.034.6 0 1.226-.17 1.848-.507.67-.37 1.073-.722 1.213-1.053.072-.166.142-.393.208-.68s.1-.52.1-.7a.553.553 0 0 0-.03-.209z'
    />
  </svg>
)

E.ReedMoreLink = styled.a`
  color: #fd7114;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
  :hover {
    text-decoration: underline;
  }
`

E.FlagWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
`

E.Text = styled.div`
  text-align: initial;
  justify-self: flex-start;
`

const OfficeCard = ({
  country,
  countryFlag,
  personImg,
  namePerson,
  location,
  mail,
  phone,
  house,
  reedMore,
  data,
  lat,
  lng,
}) => {
  const { state, dispatch } = useContext(StateContext)

  const clickHandler = () => {
    dispatch({ type: 'SET_LOCATION', payload: { lat: lat, lng: lng } })
  }

  const img = data.allFile.edges.filter((i) => i.node.name.toUpperCase() === countryFlag.toUpperCase())[0]

  return (
    <E.Card tabIndex={0} onClick={clickHandler}>
      <E.FlagWrapper>
        <Img fixed={img.node.childImageSharp.fixed} />
      </E.FlagWrapper>

      <E.h3>{country}</E.h3>

      <E.CardGrid>
        <E.Image durationFadeIn={200} fluid={data[personImg].childImageSharp.fluid} alt={namePerson} />
        <E.Text>{namePerson}</E.Text>

        <E.HouseIcon />
        <E.Text>{house}</E.Text>

        <E.LocationIcon />
        <E.Text>{location}</E.Text>

        {mail && (
          <>
            <E.MailIcon />
            <E.Text>{mail}</E.Text>
          </>
        )}

        <E.PhoneIcon />
        <E.Text>{phone}</E.Text>
      </E.CardGrid>

      {reedMore && <E.ReedMoreLink href={reedMore}>Read more</E.ReedMoreLink>}
    </E.Card>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "contact-us-flags" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fixed(width: 36) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }

        Mykola_Striletskyi: file(relativePath: { eq: "company-portraits/Mykola_Striletskyi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Serhiy_Zinchuk: file(relativePath: { eq: "contact-us/Serhiy_Zinchuk.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Tom_Hay: file(relativePath: { eq: "company-portraits/Tom_Hay.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Andrew_Wilkin: file(relativePath: { eq: "contact-us/Andrew_Wilkin.png" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Andrii_Vasylenko: file(relativePath: { eq: "contact-us/Andrii_Vasylenko.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Jim_Norris: file(relativePath: { eq: "company-portraits/Jim_Norris.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Nis_Eik: file(relativePath: { eq: "company-portraits-new/Nis_Eik.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        Sven_Kohrs: file(relativePath: { eq: "company-portraits/Sven_Kohrs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, srcSetBreakpoints: [60], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => <OfficeCard data={data} {...props} />}
  />
)
