import React, { useContext } from 'react'
import { pdf, BlobProvider, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { graphql, StaticQuery } from 'gatsby'
import { StateContext } from '../../store/estimator/contexts'
import { css } from '@emotion/react'
import { TotalBlock, PdfListItem, PdfSubItem, AdditionalCosts, Pdf } from './PdfViews'
const colorForPdfLines = (lineIndex) => {
  if (lineIndex % 2 === 0) return '#FFFFFF'
  return '#f7f7f8'
}

const multiplierPercent = 39

const TitleForSubtitles = {
  ['2SignUpLogin']: 'Authorization',
  ['4PhotosVideos']: 'Media functionality',
  ['7Notifications']: 'Notifications',
}

const getPrice = (h = 0) => {
  if (h) {
    return h * multiplierPercent
  }

  return null
}

const Controller = ({ data }) => {
  const { state, dispatch } = useContext(StateContext)
  let counter = 0

  const captionsWithPrices = state.estimator.captionsWithPrices

  const List = Object.keys(captionsWithPrices).reduce((accState, key) => {
    if (!captionsWithPrices[key][0].name) {
      return accState
    }

    if (TitleForSubtitles[key] && !!captionsWithPrices[key][0].name) {
      const subtitles = captionsWithPrices[key].map((i) => ({
        ...i,
        isSubtitle: true,
      }))
      return [...accState, { name: TitleForSubtitles[key] }, ...subtitles]
    }

    return [...accState, ...captionsWithPrices[key]]
  }, [])

  const List2 = [{ name: 'Project setup, architecture, and deployment', hours: 50 }, ...List]

  const hoursSum = List2.filter((i) => !!i.hours)
    .map((i) => i.hours)
    .reduce((a, b) => {
      return a + b
    }, 0)
  console.log({ data })
  const imgLogo = data.logo.publicURL
  const imgWavingEmoji = data.wavingEmoji.childImageSharp.fixed.src

  let pdfLines = 0

  const generatedListItemsPdfPart = List2.map((i, index) => {
    pdfLines = index
    if (i.isSubtitle) {
      return PdfSubItem(undefined, colorForPdfLines(index), i.name, i.hours, getPrice(i.hours))
    }
    counter++
    return PdfListItem(counter, colorForPdfLines(index), i.name, i.hours, getPrice(i.hours))
  })

  const additionalCosts = [
    {
      name: 'Technical risks (e.g. bugs, integration issues)',
      hours: Math.floor((hoursSum / 100) * 15),
    },
    {
      name: 'Code audit & maintenance (e.g. code review, technical documentation) performed by developer(s)',
      hours: Math.floor((hoursSum / 100) * 15),
    },
    {
      name: 'Quality assurance (e.g. testing documents, manual testing) performed by QA engineer(s)',
      hours: Math.floor((hoursSum / 100) * 20),
    },
    {
      name: 'Project management (e.g. planning, reporting, managing the process) performed by a project manager',
      hours: Math.floor((hoursSum / 100) * 10),
    },
  ]

  const additionalCostsPdfPart = additionalCosts.map((i, index, arr) => {
    return AdditionalCosts({
      index: index,
      name: i.name,
      hours: i.hours,
      price: getPrice(i.hours),
      firstItem: index === 0,
      lastItem: index === -1 + arr.length,
      bgColor: colorForPdfLines(index),
    })
  })

  const totalHoursSum = List2.filter((i) => !!i.hours)
    .map((i) => i.hours)
    .reduce((a, b) => {
      return a + b
    }, 0)

  const price = totalHoursSum * multiplierPercent

  const Total = TotalBlock({
    bgColor: colorForPdfLines(++pdfLines),
    hours: totalHoursSum,
    price: price,
  })

  const List3 = [...List2, ...additionalCosts]

  const totalHoursSumWithAdditional = List3.filter((i) => !!i.hours)
    .map((i) => i.hours)
    .reduce((a, b) => {
      return a + b
    }, 0)

  const priceWithAdditional = totalHoursSumWithAdditional * multiplierPercent

  const TotaWithAdditional = TotalBlock({
    bgColor: colorForPdfLines(++pdfLines),
    hours: totalHoursSumWithAdditional,
    price: priceWithAdditional,
    totalCaption: 'Total (including additional services)',
  })

  const docResult = (
    <Pdf
      base64MulhollandbotLogo={imgLogo}
      hand={imgWavingEmoji}
      GeneratedList={generatedListItemsPdfPart}
      Total={Total}
      TotaWithAdditional={TotaWithAdditional}
      appType={state.estimator.platform}
      additionalCosts={additionalCostsPdfPart}
    />
  )

  const postPdf = (pdf) => {
    // const fd = new FormData()
    // fd.append("name", state.estimator.userName)
    // fd.append("email", state.estimator.userEmail)
    // fd.append("subject", `App Development Cost Calculator`)
    // fd.append("description", state.estimator.description)
    // fd.append("attachment", pdf)
    // fd.append("form", "estimate-your-app")
    // fd.append("countryIso2", countryIso2)
    // fd.append("visitedPages", getVisitedPagesObjects())
    // fd.append("phone", state.estimator.userPhone)
    // const totalPrice = price
    // axios({
    //   method: "POST",
    //   url: "/api/email/lead",
    //   data: fd,
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then(() => {
    //     saveUserInfoIfSuccess({ email: state.estimator.userEmail })
    //     dispatch({ type: "SEND_PDF_SUCCESS" })
    //     dispatch({ type: "SEND_PDF_DONE" })
    //     dispatch({ type: "SET_PRICE", payload: totalPrice })
    //   })
    //   .catch(() => {
    //     dispatch({ type: "SEND_PDF_DONE" })
    //     dispatch({ type: "SEND_PDF_ERROR" })
    //   })
    // const deviceData = JSON.stringify(deviceDetect(), undefined, 2)
    // const descriptionStrHubspot = `
    //     name: ${state.estimator.userName}
    //     mail: ${state.estimator.userEmail}
    //     description: ${state.estimator.description}
    //     DEVICE DATA:
    //     ${JSON.stringify(deviceData, undefined, 2)}
    //     IP INFO:
    //     ${JSON.stringify(ip, undefined, 2)}
    //     VISITED PAGES:
    //     ${getVisitedPagesStr()}
    //   `
  }

  const blob2 = pdf(docResult).toBlob()
  blob2.then((i) => {
    const blob = i.slice(0, i.size, 'application/pdf')
    const newFile = new File([blob], 'Mulhollandbot Project Cost Estimation.pdf', {
      type: 'application/pdf',
    })

    postPdf(newFile)
  })

  return (
    <div
      css={css`
        ${'' /* visibility: hidden; */}
      `}
    >
      <BlobProvider document={docResult}>
        {({ blob, url, loading, error }) => {
          //console.log(blob)
          return <div>There's something going on on the fly</div>
        }}
      </BlobProvider>
      <PDFViewer>{docResult}</PDFViewer>

      <PDFDownloadLink document={docResult} fileName='somename.pdf'>
        {({ blob, url, loading, error }) => {
          //console.log({ blob })
          //console.log({ url })
          //console.log({ error })

          return <div>{loading ? 'Loading document...' : 'Download now!'}</div>
        }}
      </PDFDownloadLink>
    </div>
  )
}

export const PdfCreator = (props) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo-full.png" }) {
          id
          name
          relativePath
          publicURL
        }
        wavingEmoji: file(relativePath: { eq: "wavingEmojiHand.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <Controller data={data} {...props} />}
  />
)
