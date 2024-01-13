import React from 'react'
import EstimatorIcons from './icons'
import { EstimatorButton } from './EstimatorButton'
import Shared from './shared'

export const PhotosVideos = () => {
  const img1 = () => <EstimatorIcons.PhotosVideos1 />
  const text1 = () => <Shared.Caption>Photos</Shared.Caption>

  const img2 = () => <EstimatorIcons.PhotosVideos2 />
  const text2 = () => <Shared.Caption>Videos</Shared.Caption>

  const img3 = () => <EstimatorIcons.PhotosVideos3 />
  const text3 = () => <Shared.Caption>No</Shared.Caption>

  return (
    <>
      <EstimatorButton isCheckBox img={img1} text={text1} serialNumber={'1'} reducerKey={'4PhotosVideos'} />
      <EstimatorButton isCheckBox img={img2} text={text2} serialNumber={'2'} reducerKey={'4PhotosVideos'} />
      <EstimatorButton
        isCheckboxCleaner
        isCheckboxNegator
        img={img3}
        text={text3}
        serialNumber={'3'}
        reducerKey={'4PhotosVideos'}
      />
    </>
  )
}
