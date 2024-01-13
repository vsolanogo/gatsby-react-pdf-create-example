import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/react'
import { isIOS } from 'react-device-detect'
import { BreadcrumbsJsonLd } from './BreadcrumbsJsonLd'
import { graphql, StaticQuery } from 'gatsby'
//important

const Seo = ({ data }) => {
  const webSiteSchema = `{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Example",
    "url": "https://mulhollandbot.site/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mulhollandbot.site/blog/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }`

  const organizationSchema = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mulhollandbot",
    "alternateName": "Mulhollandbot Software",
    "url": "https://mulhollandbot.site/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+38097",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  }`

  return (
    <>
      {isIOS && (
        <Global
          styles={css`
            @media screen and (max-width: 1500px) {
              input,
              select,
              textarea {
                font-size: 16px !important;
              }
            }
          `}
        />
      )}

      <Global
        styles={css`
          * {
            -webkit-tap-highlight-color: rgba(253, 115, 23, 0.34) !important;
            outline: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html {
            padding: unset;
            margin: unset;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }

          body {
            margin: 0;
            ${'' /* font-size: 16px;  */}
          }

          #___gatsby {
            font-size: 0.85em;
          }

          @media (max-width: 1850px) {
            #___gatsby {
              font-size: 0.8em;
            }
          }

          @media (max-width: 1800px) {
            #___gatsby {
              font-size: 0.775em;
            }
          }

          @media (max-width: 1750px) {
            #___gatsby {
              font-size: 0.75em;
            }
          }

          @media (max-width: 1650px) {
            #___gatsby {
              font-size: 0.7em;
            }
          }

          @media (max-width: 850px) {
            #___gatsby {
              font-size: 0.65em;
            }
          }

          @media (max-width: 800px) {
            #___gatsby {
              font-size: 0.6em;
            }
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          button,
          a,
          textarea,
          input {
            font: inherit;
          }

          img {
            color: #fff0;
          }
        `}
      />

      <Helmet>
        <script type='application/ld+json'>{organizationSchema.replace(/[\n\r]/g, '')}</script>
        <script type='application/ld+json'>{webSiteSchema.replace(/[\n\r]/g, '')}</script>
      </Helmet>

      <BreadcrumbsJsonLd />

      <Global
        styles={css`
          .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }

          .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
          .slick-list:focus {
          }
          .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
          }

          .slick-slider .slick-track,
          .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          .slick-track {
            position: relative;
            top: 0;
            left: 0;

            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .slick-track:before,
          .slick-track:after {
            display: table;

            content: '';
          }
          .slick-track:after {
            clear: both;
          }
          .slick-loading .slick-track {
            visibility: hidden;
          }

          .slick-slide {
            display: none;
            float: left;

            height: 100%;
            min-height: 1px;
          }
          [dir='rtl'] .slick-slide {
            float: right;
          }
          .slick-slide img {
            display: block;
          }
          .slick-slide.slick-loading img {
            display: none;
          }
          .slick-slide.dragging img {
            pointer-events: none;
          }
          .slick-initialized .slick-slide {
            display: block;
          }
          .slick-loading .slick-slide {
            visibility: hidden;
          }
          .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
          }
          .slick-arrow.slick-hidden {
            display: none;
          }
        `}
      />
    </>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo-full.png" }) {
          id
          name
          relativePath
          publicURL
        }
      }
    `}
    render={(data) => <Seo data={data} {...props} />}
  />
)
