import { v4 as uuidv4 } from 'uuid'

const contactUsFormReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      }

    case 'CONTACTUS_ADD_FILE':
      return {
        ...state,
        files: [
          ...state.files,
          {
            file: action.file,
            id: action.id,
          },
        ],
      }
    case 'CONTACTUS_REPLACE_FILES':
      return {
        ...state,
        files: action.newFiles,
      }

    case 'POST_REQUEST_START':
      return {
        ...state,
        pendingRequest: { ...state.pendingRequest, isLoading: true },
      }

    case 'SEND_POST_REQUEST':
      return {
        ...state,
        sendPostRequest: true,
      }

    case 'SEND_POST_REQUEST_FALSE':
      return {
        ...state,
        sendPostRequest: false,
      }

    case 'POST_REQUEST_FINISH':
      return {
        ...state,
        pendingRequest: {
          ...state.pendingRequest,
          isLoading: null,
          hubspot: null,
        },
      }

    case 'CLEAR_FIELDS':
      return {
        ...state,
        clearFields: true,
      }

    case 'CLEAR_FIELDS_FALSE':
      return {
        ...state,
        clearFields: false,
      }

    case 'POST_REQUEST_SUCCESS':
      return {
        ...state,
        pendingRequest: { ...state.pendingRequest, [action.name]: 'SUCCESS' },
      }

    case 'POST_REQUEST_FAIL':
      return {
        ...state,
        pendingRequest: { ...state.pendingRequest, [action.name]: 'FAIL' },
      }

    case 'SET_FIELD_ERROR':
      return { ...state, [action.name]: action.error }

    case 'SET_USER_IP_INFO':
      return { ...state, ipinfo: action.ipinfo }

    case 'RESET_SESSION_ID':
      return { ...state, sessionUuid: uuidv4() }

    default:
      return state
  }
}

const googleMapReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload

    default:
      return state
  }
}

export default function appReducer(state, action) {
  return {
    contactUs: contactUsFormReducer(state.contactUs, action),
    googleMap: googleMapReducer(state.googleMap, action),
  }
}
