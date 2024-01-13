import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const Notifications = () => {
  const img1 = () => <EstimatorIcons.Notifications1 />
  const text1 = () => (
    <Shared.Caption>
      Yes, via <Shared.B>email</Shared.B>
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.Notifications2 />
  const text2 = () => (
    <Shared.Caption>
      Yes,{' '}
      <Shared.B>
        push <br />
        notifications
      </Shared.B>
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.Notifications3 />
  const text3 = () => (
    <Shared.Caption>
      Yes, via <Shared.B>SMS</Shared.B>
    </Shared.Caption>
  )

  const img4 = () => <EstimatorIcons.Notifications4 />
  const text4 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isCheckBox img={img1} text={text1} serialNumber={'1'} reducerKey={'7Notifications'} />
      <EstimatorButton isCheckBox img={img2} text={text2} serialNumber={'2'} reducerKey={'7Notifications'} />
      <EstimatorButton isCheckBox img={img3} text={text3} serialNumber={'3'} reducerKey={'7Notifications'} />
      <EstimatorButton
        isCheckboxCleaner
        isCheckboxNegator
        img={img4}
        text={text4}
        serialNumber={'4'}
        reducerKey={'7Notifications'}
      />
    </>
  )
}
