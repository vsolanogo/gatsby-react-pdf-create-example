const estimatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_PLATFORM':
      return { ...state, platform: action.payload }

    case 'TOGGLE_BUTTON':
      return {
        ...state,
        steps: { ...state.steps, [action.reducerKey]: action.newValues },
      }

    case 'SET_CAPTIONS_WITH_VALUES':
      return { ...state, captionsWithPrices: action.captionsWithPrices }

    case 'SET_STEPS_FILLED_COUNT':
      return { ...state, stepsFilledCount: action.payload }

    case 'SET_STEPS_FILLED':
      return { ...state, stepsFilled: action.payload }

    case 'SEND_PDF_DONE':
      return { ...state, sendPdf: false }

    case 'SEND_PDF_SUCCESS':
      return { ...state, sendPdfSuccess: true }

    case 'SEND_PDF_ERROR':
      return { ...state, sendPdfError: true }

    case 'SEND_PDF_START':
      return { ...state, sendPdf: true }

    case 'SET_EMAIL':
      return { ...state, userEmail: action.email }

    case 'SET_PHONE':
      return { ...state, userPhone: action.payload }

    case 'SET_NAME':
      return { ...state, userName: action.payload }

    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload }

    case 'SET_COUNTRY':
      return { ...state, countryIso2: action.payload }

    case 'SET_PRICE':
      return { ...state, price: action.payload }

    case 'WHETHER_ANIMATE_CHECKMARK':
      return { ...state, animateCheckmark: action.payload }

    case 'SET_NEGATED_STEP':
      return { ...state, stepsNegated: action.payload }

    case 'CHANGE_APP_PLATFORM_RESET_STATE':
      return action.payload

    case 'SET_UNCHECKED_STEPS':
      return { ...state, uncheckedFields: action.payload }

    case 'HIGHLIGHT_UNCHECKED_STEPS':
      return { ...state, highlightUncheckedSteps: true }

    case 'SET_MAIL_VALID_STATUS':
      return { ...state, mailIsValid: action.payload }

    case 'SET_PHONE_VALID_STATUS':
      return { ...state, phoneError: action.payload }

    case 'SET_NAME_VALID_STATUS':
      return { ...state, nameIsValid: action.payload }

    case 'SET_DESCRIPTION_VALID_STATUS':
      return { ...state, descriptionIsValid: action.payload }

    case 'SET_DISPLAY_MAIL_ERROR':
      return { ...state, displayMailError: action.payload }

    case 'SET_IP':
      return { ...state, ip: action.payload }

    case 'SET_COUNTRYISO2':
      return { ...state, countryIso2: action.payload }

    default:
      return state
  }
}

export default function appReducer(state, action) {
  return {
    estimator: estimatorReducer(state.estimator, action),
  }
}
