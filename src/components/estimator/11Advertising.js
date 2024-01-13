import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const Advertising = () => {
  const img1 = () => <EstimatorIcons.Advertising1 />
  const text1 = () => (
    <Shared.Caption>
      Advertising
      <br /> SDK
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.Advertising2 />
  const text2 = () => (
    <Shared.Caption>
      Analytics
      <br /> SDK
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.Advertising3 />
  const text3 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isCheckBox img={img1} text={text1} serialNumber={'1'} reducerKey={'11Advertising'} />
      <EstimatorButton isCheckBox img={img2} text={text2} serialNumber={'2'} reducerKey={'11Advertising'} />
      <EstimatorButton
        isCheckboxCleaner
        isCheckboxNegator
        img={img3}
        text={text3}
        serialNumber={'3'}
        reducerKey={'11Advertising'}
      />
    </>
  )
}
