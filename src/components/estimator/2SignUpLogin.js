import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const SignUpLogin = () => {
  const img1 = () => <EstimatorIcons.SignUpLogin1 />
  const text1 = () => (
    <Shared.Caption>
      Through the<Shared.B>&nbsp;email</Shared.B> <br />
      <Shared.B>and password</Shared.B>
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.SignUpLogin2 />
  const text2 = () => (
    <Shared.Caption>
      Via <Shared.B>SMS</Shared.B>
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.SignUpLogin3 />
  const text3 = () => (
    <Shared.Caption>
      Via <Shared.B>social media</Shared.B>
    </Shared.Caption>
  )

  const img4 = () => <EstimatorIcons.SignUpLogin4 />
  const text4 = () => <Shared.Caption>No registration required</Shared.Caption>

  return (
    <>
      <EstimatorButton isCheckBox img={img1} text={text1} serialNumber={'1'} reducerKey={'2SignUpLogin'} />
      <EstimatorButton isCheckBox img={img2} text={text2} serialNumber={'2'} reducerKey={'2SignUpLogin'} />
      <EstimatorButton isCheckBox img={img3} text={text3} serialNumber={'3'} reducerKey={'2SignUpLogin'} />
      <EstimatorButton
        isCheckboxCleaner
        isCheckboxNegator
        img={img4}
        text={text4}
        serialNumber={'4'}
        reducerKey={'2SignUpLogin'}
      />
    </>
  )
}
