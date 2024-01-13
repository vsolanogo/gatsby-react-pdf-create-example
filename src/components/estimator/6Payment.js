import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const Payment = () => {
  const img1 = () => <EstimatorIcons.Payment1 />
  const text1 = () => <Shared.Caption>Yes</Shared.Caption>

  const img2 = () => <EstimatorIcons.Payment2 />
  const text2 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'6Payment'} />
      <EstimatorButton
        isRadioButton
        isCheckboxNegator
        img={img2}
        text={text2}
        serialNumber={'2'}
        reducerKey={'6Payment'}
      />
    </>
  )
}
