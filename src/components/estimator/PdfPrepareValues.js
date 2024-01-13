import React, { useEffect, useContext } from 'react'
import { StateContext } from '../../store/estimator/contexts'
import { PdfCreator } from './PdfCreator'

const StepsCaptions = {
  ['1AppDesign']: {
    ['1']: 'Custom branded design',
    ['2']: 'Plain design',
    isRadio: true,
  },
  ['2SignUpLogin']: {
    ['1']: 'Through the email and password',
    ['2']: 'Via SMS',
    ['3']: 'Via social media',
    isCheck: true,
  },
  ['3MapFunction']: {
    ['1']: 'Simple map',
    ['2']: 'Interactive route map feature',
    isRadio: true,
  },
  ['4PhotosVideos']: {
    ['1']: 'Photos support',
    ['2']: 'Video support',
    isCheck: true,
  },
  ['5LiveChat']: {
    ['1']: 'One-to-one chats feature',
    ['2']: 'One-to-one chats with photos and videos support',
    ['3']: 'Group chats',
    isRadio: true,
  },
  ['6Payment']: {
    ['1']: 'Payment system integration',
    isRadio: true,
  },
  ['7Notifications']: {
    ['1']: 'Email',
    ['2']: 'Push notifications',
    ['3']: 'SMS',
    isRadio: true,
  },
  ['8List']: {
    ['1']: 'List of products, services, options, etc: 1-2',
    ['2']: 'List of products, services, options, etc: 3-4',
    ['3']: 'List of products, services, options, etc: 5+',
    ['4']: 'List of products, services, options, etc: Not sure',
    isRadio: true,
  },
  ['9SearchBar']: {
    ['1']: 'Search & filters functionality',
    isRadio: true,
  },
  ['10AvailableOffline']: {
    ['1']: 'Offline support',
    isRadio: true,
  },
  ['11Advertising']: {
    ['1']: 'Advertising SDK',
    ['2']: 'Analytics SDK',
    isCheck: true,
  },
  ['12Admin']: {
    ['1']: 'Admin panel',
    isRadio: true,
  },
}

const Hours = {
  ['1AppDesign']: {
    ['1']: 160,
    ['2']: 80,
    ['3']: false,
  },
  ['2SignUpLogin']: {
    ['1']: 10,
    ['2']: 15,
    ['3']: 35,
    ['4']: false,
  },
  ['3MapFunction']: {
    ['1']: 15,
    ['2']: 50,
    ['3']: false,
  },
  ['4PhotosVideos']: {
    ['1']: 30,
    ['2']: 30,
    ['3']: false,
  },
  ['5LiveChat']: {
    ['1']: 40,
    ['2']: 100,
    ['3']: 70,
    ['4']: false,
  },
  ['6Payment']: {
    ['1']: 70,
    ['2']: false,
  },
  ['7Notifications']: {
    ['1']: 15,
    ['2']: 20,
    ['3']: 15,
    ['4']: false,
  },
  ['8List']: {
    ['1']: 100,
    ['2']: 150,
    ['3']: 300,
    ['4']: 80,
  },
  ['9SearchBar']: {
    ['1']: 40,
    ['2']: false,
  },
  ['10AvailableOffline']: {
    ['1']: 30,
    ['2']: false,
  },
  ['11Advertising']: {
    ['1']: 30,
    ['2']: 50,
    ['3']: false,
  },
  ['12Admin']: {
    ['1']: 200,
    ['2']: false,
  },
}

export const PdfPrepareValues = (data) => {
  const { state, dispatch } = useContext(StateContext)

  const modified = JSON.stringify(state.estimator.steps)

  useEffect(() => {
    const chosenButtons = Object.keys(state.estimator.steps).reduce((accState, key) => {
      accState[key] = Object.keys(state.estimator.steps[key]).filter((j) => state.estimator.steps[key][j])
      return accState
    }, {})

    const captionsWithPrices = Object.keys(chosenButtons).reduce((accState, key) => {
      if (!chosenButtons[key].length) {
        return accState
      }

      const newObj = chosenButtons[key].map((i) => ({
        name: StepsCaptions[key][i],
        hours: Hours[key][i],
      }))

      accState[key] = newObj
      return accState
    }, {})

    dispatch({ type: 'SET_CAPTIONS_WITH_VALUES', captionsWithPrices })
  }, [modified])

  return <>{state.estimator.sendPdf !== undefined && <PdfCreator />}</>
}
