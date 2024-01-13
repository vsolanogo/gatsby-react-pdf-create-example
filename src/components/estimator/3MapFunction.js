import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const MapFunction = () => {
  const img1 = () => <EstimatorIcons.MapFunction1 />
  const text1 = () => (
    <Shared.Caption>
      Yes,&nbsp;<Shared.CaptionHighlight>a simple map</Shared.CaptionHighlight>
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.MapFunction2 />
  const text2 = () => (
    <Shared.Caption>
      Yes, <Shared.CaptionHighlight>an interactive</Shared.CaptionHighlight> route <br />
      planning map
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.MapFunction3 />
  const text3 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'3MapFunction'} />
      <EstimatorButton isRadioButton img={img2} text={text2} serialNumber={'2'} reducerKey={'3MapFunction'} />
      <EstimatorButton
        isRadioButton
        isCheckboxNegator
        img={img3}
        text={text3}
        serialNumber={'3'}
        reducerKey={'3MapFunction'}
      />
    </>
  )
}
