import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Office } from './Office'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { SharedRightAngle } from '../../shared/icons'
import { StateContext } from '../../store/contactUs/contexts'

const E = {}

E.Wrapper = styled.div`
  position: relative;
  height: ${(props) => (props.isOpen ? 'auto' : '7em')};
  transition: all 0.2s cubic-bezier(0, 1, 1, 1);
`

E.Button = styled.button`
  position: absolute;
  display: flex;
  margin: 0;
  align-items: center;
  padding: 0 1em;
  height: 7em;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;

  top: 0;
`

E.CountryTitle = styled.h4`
  font-size: 3em;
  line-height: 1;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: normal;
  font-size: 2.5em;
  letter-spacing: 0.03em;
  margin: 0;
  color: #000;
`

E.Img = styled(Img)`
  width: 3em;
  height: 3em;
  margin-right: 1.5em;

  img {
    object-fit: cover !important;
    border-radius: 100%;
  }
`

E.OfficesWrapper = styled.div`
  height: ${(props) => (props.isOpen ? 'auto' : '1px')};
  ${
    '' /* transform: ${(props) => (props.isOpen ? "none" : "perspective(500px) translate(10px, 0, 20px) rotateY(3deg)")}; */
  }
  transition: all 0.2s cubic-bezier(0, 1, 1, 1);
  padding-top: ${(props) => (props.isOpen ? '6em' : '0')};
  padding-left: 2em;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
`

E.AngleWrapper = styled.div`
  transform: ${(props) => (props.isOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: all 0.2s cubic-bezier(0, 1, 1, 1);
  margin-left: 1em;

  svg {
    height: 1.8em;
    width: 1.8em;
  }

  path {
    stroke: #5a5d5e;
    stroke: ${(props) => (props.isOpen ? '#fd7114' : '#5a5d5e')};
  }

  @media (max-width: 1000px) {
    margin-left: auto;
  }
`

export const Component = ({ isOpen, countryFlag, countryName, offices, imgs, onClick }) => {
  const { state, dispatch } = useContext(StateContext)

  const handleClick = () => {
    onClick(countryName)

    dispatch({
      type: 'SET_LOCATION',
      payload: { lat: offices[0].lat, lng: offices[0].lng },
    })
  }

  return (
    <E.Wrapper isOpen={isOpen}>
      <E.Button onClick={handleClick}>
        <E.Img durationFadeIn={200} fluid={imgs[countryFlag].childImageSharp.fluid} alt='flag' />
        <E.CountryTitle>{countryName}</E.CountryTitle>

        <E.AngleWrapper isOpen={isOpen}>
          <SharedRightAngle />
        </E.AngleWrapper>
      </E.Button>

      <E.OfficesWrapper isOpen={isOpen}>
        {offices.map((i, index) => (
          <Office
            key={`${index}${i.houseName}`}
            houseName={i.houseName}
            address={i.address}
            personName={i.personName}
            phone={i.phone}
            personImg={i.personImg}
            mail={i.mail ? i.mail : null}
            phone={i.phone}
          />
        ))}
      </E.OfficesWrapper>
    </E.Wrapper>
  )
}

export const CountryButtonWrapper = (props) => (
  <StaticQuery
    query={graphql`
      query {
        australia: file(relativePath: { eq: "flagsSquare/australia.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        denmark: file(relativePath: { eq: "flags/denmark.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        germany: file(relativePath: { eq: "flags/germany.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        uk: file(relativePath: { eq: "flagsSquare/uk.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        ukraine: file(relativePath: { eq: "flags/ukraine.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        usa: file(relativePath: { eq: "flagsSquare/usa.png" }) {
          childImageSharp {
            fluid(maxWidth: 120, srcSetBreakpoints: [120], pngCompressionSpeed: 1, webpQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(imgs) => <Component imgs={imgs} {...props} />}
  />
)
