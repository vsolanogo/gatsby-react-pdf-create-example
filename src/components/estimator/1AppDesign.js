import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const AppDesign = () => {
  const img1 = () => <EstimatorIcons.AppDesign1 />
  const text1 = () => (
    <Shared.Caption>
      I need an exclusive, <br />
      <Shared.CaptionHighlight>custom branded design</Shared.CaptionHighlight>
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.AppDesign2 />
  const text2 = () => (
    <Shared.Caption>
      I'd like to have a <br />
      <Shared.CaptionHighlight>plain design</Shared.CaptionHighlight>
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.AppDesign3 />
  const text3 = () => (
    <Shared.Caption>
      No, the design of my <br />
      application is&nbsp;
      <Shared.CaptionHighlight>already done</Shared.CaptionHighlight>
    </Shared.Caption>
  )

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'1AppDesign'} />
      <EstimatorButton isRadioButton img={img2} text={text2} serialNumber={'2'} reducerKey={'1AppDesign'} />
      <EstimatorButton
        isRadioButton
        isCheckboxNegator
        img={img3}
        text={text3}
        serialNumber={'3'}
        reducerKey={'1AppDesign'}
      />
    </>
  )
}
