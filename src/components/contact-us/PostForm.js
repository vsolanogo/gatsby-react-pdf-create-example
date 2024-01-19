import { parsePhoneNumberFromString } from 'libphonenumber-js'

export const validateNumber = ({ phone, country }) => {
  if (!phone || !country) {
    return 'This field is required'
  }

  const numParsed = parsePhoneNumberFromString(phone.replace(/\s/g, ''), country.toUpperCase())

  if (!numParsed || !numParsed.isValid()) {
    return 'Incorrect phone number'
  }

  return 'valid'
}
