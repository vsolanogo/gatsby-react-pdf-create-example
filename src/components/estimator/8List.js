import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const List = () => {
  const img1 = () => <EstimatorIcons.List1 />
  const text1 = () => (
    <Shared.Caption>
      Yes, <Shared.B>1-2</Shared.B>
    </Shared.Caption>
  )

  const img2 = () => <EstimatorIcons.List2 />
  const text2 = () => (
    <Shared.Caption>
      Yes, <Shared.B>3-4</Shared.B>
    </Shared.Caption>
  )

  const img3 = () => <EstimatorIcons.List3 />
  const text3 = () => (
    <Shared.Caption>
      Yes, <Shared.B>5+</Shared.B>
    </Shared.Caption>
  )

  const img4 = () => <EstimatorIcons.List4 />
  const text4 = () => <Shared.Caption>I'm not sure</Shared.Caption>

  return (
    <>
      <EstimatorButton isRadioButton img={img1} text={text1} serialNumber={'1'} reducerKey={'8List'} />
      <EstimatorButton isRadioButton img={img2} text={text2} serialNumber={'2'} reducerKey={'8List'} />
      <EstimatorButton isRadioButton img={img3} text={text3} serialNumber={'3'} reducerKey={'8List'} />
      <EstimatorButton isRadioButton img={img4} text={text4} serialNumber={'4'} reducerKey={'8List'} />
    </>
  )
}
