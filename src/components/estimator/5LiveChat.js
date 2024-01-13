import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const LiveChat = () => {
  const img1 = () => <EstimatorIcons.LiveChat1 />
  const text1 = () => (
    <Shared.Caption>
      Yes, just <Shared.B>one-to-one</Shared.B> <br />
      messaging
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.LiveChat2 />
  const text2 = () => (
    <Shared.Caption>
      Yes, for sending text messages, <br />
      <Shared.B>photos and videos</Shared.B>
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.LiveChat3 />
  const text3 = () => (
    <Shared.Caption>
      Yes, for <Shared.B>group</Shared.B> <br />
      communication
    </Shared.Caption>
  )

  const img4 = () => <EstimatorIcons.LiveChat4 />
  const text4 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'5LiveChat'} />
      <EstimatorButton isRadioButton img={img2} text={text2} serialNumber={'2'} reducerKey={'5LiveChat'} />
      <EstimatorButton isRadioButton img={img3} text={text3} serialNumber={'3'} reducerKey={'5LiveChat'} />
      <EstimatorButton
        isRadioButton
        isCheckboxNegator
        img={img4}
        text={text4}
        serialNumber={'4'}
        reducerKey={'5LiveChat'}
      />
    </>
  )
}
