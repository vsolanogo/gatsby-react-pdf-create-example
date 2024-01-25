import React, { useContext } from 'react'
import moment from 'moment-timezone'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
  BlobProvider,
  toBlob,
  Image,
  Font,
} from '@react-pdf/renderer'
import InterRegular from '../../static/fonts/Inter-3.12/Inter (Hinted, for Windows)/Inter-Regular.ttf'
import InterBold from '../../static/fonts/Inter-3.12/Inter (Hinted, for Windows)/Inter-Bold.ttf'
import InterSemiBold from '../../static/fonts/Inter-3.12/Inter (Hinted, for Windows)/Inter-SemiBold.ttf'
Font.register({ family: 'InterRegular', src: InterRegular })
Font.register({ family: 'InterBold', src: InterBold })
Font.register({ family: 'InterSemiBold', src: InterSemiBold })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f7f8fc',
    fontFamily: 'InterRegular',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export const TotalBlock = ({ bgColor, hours, price, totalCaption = 'Total' }) => (
  <View
    style={{
      backgroundColor: '#FFF',
      borderLeft: '1pt solid #DFE0EB',
      borderRight: '1pt solid #DFE0EB',
      fontSize: '12pt',
      fontFamily: 'InterBold',
      borderBottomLeftRadius: '2mm',
      borderBottomRightRadius: '2mm',
      borderBottom: '1pt solid #DFE0EB',
    }}
  >
    <View
      style={{
        backgroundColor: '#E9EAEF',
        borderRadius: '2pt',
        marginTop: '4mm',
        marginBottom: '4mm',
        marginLeft: '3mm',
        marginRight: '3mm',
        flexDirection: 'row',
        paddingLeft: '11mm',
        paddingTop: '3mm',
        paddingBottom: '3mm',
      }}
    >
      <Text style={{ width: '70%' }}>{totalCaption}</Text>
      <Text style={{ width: '15%', paddingLeft: '7pt' }}>{hours}h</Text>
      <Text style={{ width: '15%', paddingLeft: '13pt' }}>${price}</Text>
    </View>
  </View>
)

export const PdfListItem = (index, bgColor, name, hours = '', price = '') => (
  <View
    key={`${index}${name}${price}`}
    style={{
      backgroundColor: bgColor,
      borderBottom: '1pt solid #DFE0EB',
      borderLeft: '1pt solid #DFE0EB',
      borderRight: '1pt solid #DFE0EB',
      padding: '4pt',
      fontSize: '11pt',
      flexDirection: 'row',
    }}
  >
    <Text
      style={{
        width: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '3mm',
      }}
    >
      {index}
      {index && '.'}
    </Text>
    <Text style={{ width: '64%', marginLeft: '8mm' }}>{name}</Text>
    <Text style={{ width: '15%' }}>
      {hours}
      {hours && 'h'}
    </Text>
    <Text style={{ width: '16%' }}>
      {price && '$'}
      {price}
    </Text>
  </View>
)

export const PdfSubItem = (index, bgColor, name, hours = '', price = '') => (
  <View
    key={`${index}${name}${price}`}
    style={{
      flexDirection: 'row',
    }}
  >
    <View
      style={{
        width: '3%',
        backgroundColor: '#FFFFFF',
        borderLeft: '1pt solid #DFE0EB',
      }}
    ></View>
    <View
      style={{
        width: '3%',
        backgroundColor: '#FFFFFF',
        borderLeft: '1pt solid #DFE0EB',
      }}
    ></View>

    <View
      style={{
        padding: '4pt',
        backgroundColor: bgColor,
        borderBottom: '0.1pt solid #DFE0EB',
        borderRight: '1pt solid #DFE0EB',
        fontSize: '11pt',
        flexDirection: 'row',
        width: '94%',
      }}
    >
      <Text
        style={{
          width: '3%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '2mm',
        }}
      >
        {index}
        {index && '.'}
      </Text>
      <Text style={{ width: '68%', marginLeft: '1mm' }}>{name}</Text>
      <Text style={{ width: '14%' }}>
        {hours}
        {hours && 'h'}
      </Text>
      <Text style={{ width: '14%', paddingLeft: '9pt' }}>
        {price && '$'}
        {price}
      </Text>
    </View>
  </View>
)

const AdditionalCostsCaption = () => (
  <>
    <View
      style={{
        backgroundColor: '#FFF',
        borderLeft: '1pt solid #DFE0EB',
        borderRight: '1pt solid #DFE0EB',
        borderTop: '1pt solid #DFE0EB',
        fontSize: '12pt',
        fontFamily: 'InterSemiBold',
        paddingBottom: '1mm',
        flexDirection: 'row',
        paddingTop: '1mm',
        borderTopLeftRadius: '2mm',
        borderTopRightRadius: '2mm',
      }}
    ></View>

    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderLeft: '1pt solid #DFE0EB',
        borderRight: '1pt solid #DFE0EB',
      }}
    >
      <View
        style={{
          backgroundColor: '#202443',
          color: '#FFF',
          borderRadius: '3pt',
          flexDirection: 'row',
          marginLeft: '3mm',
          marginRight: '3mm',
          fontSize: '12pt',
          padding: '3mm',
        }}
      >
        <Text
          style={{
            marginLeft: '7mm',
            width: '70%',
          }}
        >
          Additional services
        </Text>
        <Text style={{ width: '15%' }}>Hours</Text>
        <Text style={{ width: '15%', paddingLeft: '1mm' }}>Price</Text>
      </View>
    </View>
  </>
)

export const AdditionalCosts = ({
  name,
  hours = '',
  price = '',
  firstItem = false,
  lastItem = false,
  index,
  bgColor,
}) => (
  <View
    key={`${index}${name}additional`}
    style={{
      borderLeft: '1pt solid #DFE0EB',
      borderRight: '1pt solid #DFE0EB',
      fontSize: '11pt',
      flexDirection: 'row',
      borderBottom: '0.1pt solid #DFE0EB',
      backgroundColor: bgColor,
    }}
  >
    <View
      style={{
        backgroundColor: bgColor,
        borderTopLeftRadius: firstItem ? '2pt' : null,
        borderTopRightRadius: firstItem ? '2pt' : null,
        borderBottomLeftRadius: lastItem ? '2pt' : null,
        borderBottomRightRadius: lastItem ? '2pt' : null,
        paddingTop: '2mm',
        paddingBottom: '2mm',
        marginLeft: '3mm',
        marginRight: '3mm',
        flexDirection: 'row',
        width: '97%',
      }}
    >
      <Text
        style={{
          width: '5%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '4pt',
        }}
      >
        {++index}
        {index && '.'}
      </Text>
      <Text style={{ width: '64%', border: '1px solid green;', marginLeft: '6mm' }}>{name}</Text>
      <Text style={{ width: '15%', marginLeft: '3mm' }}>
        {hours}
        {hours && 'h'}
      </Text>
      <Text style={{ width: '16%' }}>
        {price && '$'}
        {price}
      </Text>
    </View>
  </View>
)

export const Pdf = ({
  base64MulhollandbotLogo,
  hand,
  GeneratedList,
  Total,
  TotaWithAdditional,
  appType,
  additionalCosts,
}) => (
  <Document>
    <Page size='A4' style={styles.page} wrap>
      <View style={{ margin: '6mm' }}>
        <View
          style={{
            marginBottom: '6mm',
            flexDirection: 'row',
          }}
        >
          <View style={{ flexGrow: 2 }}>
            <Image src={base64MulhollandbotLogo} allowDangerousPaths style={{ width: '33.68mm', height: '21.62mm' }} />
          </View>

          <View>
            <Text
              style={{
                fontSize: '12pt',
                letterSpacing: '0.2pt',
              }}
            >
              {appType} Estimate
            </Text>
            <View
              style={{
                flexDirection: 'row',
                fontSize: '10pt',
                alignSelf: 'flex-end',
                marginTop: '3mm',
              }}
            >
              <Text style={{ color: '#87878B', fontWeight: 1 }}>Date: </Text>
              <Text>{moment(new Date()).format('DD/MM/YYYY')}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#E9EAEF',
            borderRadius: '2mm',
            padding: '5mm 5mm 5mm 4mm',
            flexDirection: 'row',
          }}
        >
          <View>
            <Image src={hand} style={{ width: '13mm', height: '13mm' }} />
          </View>
          <View style={{ flexDirection: 'column', marginLeft: '5mm' }}>
            <Text style={{ fontFamily: 'InterBold' }}>Hi there!</Text>
            <Text style={{ fontSize: '11pt' }}>Here is the detailed report with a rough estimate of your app.</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1pt solid #DFE0EB',
            borderLeft: '1pt solid #DFE0EB',
            borderRight: '1pt solid #DFE0EB',
            borderTopLeftRadius: '2mm',
            borderTopRightRadius: '2mm',
            marginTop: '4mm',
          }}
        >
          <View
            style={{
              backgroundColor: '#202443',
              color: '#FFF',
              borderRadius: '3pt',
              flexDirection: 'row',
              marginTop: '2mm',
              marginLeft: '3mm',
              marginRight: '3mm',
              fontSize: '12pt',
              padding: '3mm',
            }}
          >
            <Text
              style={{
                width: '70%',
                marginLeft: '7mm',
              }}
            >
              Estimate Item
            </Text>
            <Text style={{ width: '15%' }}>Hours</Text>
            <Text style={{ width: '15%', paddingLeft: '1mm' }}>Price</Text>
          </View>
        </View>

        {GeneratedList}
        {Total}

        <View
          wrap={false}
          style={{
            paddingTop: '5mm',
          }}
        >
          {AdditionalCostsCaption()}
          {additionalCosts}
          {TotaWithAdditional}
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: '4mm',
          }}
          wrap={false}
        >
          <View
            style={{
              backgroundColor: '#202443',
              borderBottomLeftRadius: '4pt',
              borderTopLeftRadius: '4pt',
              width: '2mm',
              height: '100%',
            }}
          ></View>

          <View
            style={{
              flexDirection: 'column',
              padding: '4mm',
              fontSize: '11pt',
              backgroundColor: '#FFFFFF',
              borderBottomRightRadius: '4pt',
              borderTopRightRadius: '4pt',
              width: '99%',
              borderTop: '1pt solid #DFE0EB',
              borderRight: '1pt solid #DFE0EB',
              borderBottom: '1pt solid #DFE0EB',
            }}
          >
            <Text>
              Given rough estimate was made to help you plan the budget beforehand. Despite the estimate is based on our
              previous projects and, therefore, provides extremely close values, it includes solely general features.
              For a more accurate estimate, we need the User Story, which gives us a clearer understanding of the
              project. To get your custom detailed estimate, please contact us:
            </Text>
            <Text style={{ fontFamily: 'InterBold' }}>e-mail: mailto@mulhollandbot.site</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
