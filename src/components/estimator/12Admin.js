import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const Admin = () => {
  const img1 = () => <EstimatorIcons.Admin1 />
  const text1 = () => <Shared.Caption>Yes</Shared.Caption>

  const img2 = () => <EstimatorIcons.Admin2 />
  const text2 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'12Admin'} />
      <EstimatorButton
        isRadioButton
        isCheckboxNegator
        img={img2}
        text={text2}
        serialNumber={'2'}
        reducerKey={'12Admin'}
      />
    </>
  )
}
