import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../../store/contactUs/contexts'
import Shared from './SharedNew'
import { CountriesDropDown } from './CountriesDropDownNew'
import styled from '@emotion/styled'
import { useBoolean, useInput, useFocus } from 'react-hookedup'
import { getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js'
import ct from 'countries-and-timezones'
import { pressOnlyNumbers } from '../../utils/keyPress'
import ReactCountryFlag from 'react-country-flag'
import { css } from '@emotion/react'
import OutsideClickHandler from 'react-outside-click-handler'
import { countriesToUnlist } from '../../static/countriesToUnlist'
import { validateNumber } from './PostForm'

const E = {}

E.Input = styled.input`
  height: 100%;
  border: none;
  color: #333;

  font-size: 14px;
  border-radius: 3px;
  width: 100%;
  position: relative;
  letter-spacing: 0.01rem;
  z-index: 0;
  background: #ffffff;
  line-height: 25px;
  padding: 0px;
  margin: 0px;
  box-shadow: none;
  font-weight: 400;
  font-family: 'Heebo', Arial, sans-serif;
  padding-left: 46px;
`

E.ArrowDown = styled.div`
  display: block;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid #000;
  margin-left: 8px;
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

E.FlagButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0 10px 0 0;

  z-index: 100;
  left: 10px;
`

export const dropDownButtonStyle = `
::before{
  display: none !important; 
};
z-index: 33 !important;
`

export const desktopCountryList = {
  position: 'absolute',
  height: '200px',
  width: '300px',
  zIndex: 9999,
}

export const PhoneField = () => {
  const { state, dispatch } = useContext(StateContext)
  const { phoneError, clearFields, country, ipinfo } = state.contactUs
  const phoneFocus = useFocus()
  const phoneInput = useInput('+1')
  const DDOpen = useBoolean(false)
  const phoneInputTouched = useBoolean(false)

  const [availableCountries, setAvailableCountries] = useState([])

  useEffect(() => {
    if (clearFields) {
      phoneInput.setValue(`+${getCountryCallingCode(country.toUpperCase())}`)
      phoneInputTouched.setFalse()

      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'phone',
        fieldValue: `+${getCountryCallingCode(country.toUpperCase())}`,
      })
    }
  }, [clearFields])

  useEffect(() => {
    if (!!ipinfo && !!ipinfo.ip) {
      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'phone',
        fieldValue: getCountryCallingCode(ipinfo.country.toUpperCase()),
      })

      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'country',
        fieldValue: ipinfo.country.toLowerCase(),
      })

      phoneInput.setValue(`+${getCountryCallingCode(ipinfo.country.toUpperCase())}`)
    }
  }, [ipinfo])

  useEffect(() => {
    const prepareAllCountriesList = ct.getAllCountries()

    const allCountriesList = Object.keys(prepareAllCountriesList)
      .map((i) => {
        return {
          name: prepareAllCountriesList[i].name,
          id: prepareAllCountriesList[i].id,
        }
      })
      .filter((i) => ![...countriesToUnlist].includes(i.id))
      .sort((a, b) => a.name.localeCompare(b.name))

    setAvailableCountries(allCountriesList)
  }, [])

  useEffect(() => {
    if (!!phoneError) {
      if (validateNumber({ phone: phoneInput.value, country }) !== 'valid') {
        dispatch({
          type: 'SET_FIELD_ERROR',
          name: 'phoneError',
          error: validateNumber({ phone: phoneInput.value, country }),
        })
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          name: 'phoneError',
          error: null,
        })
      }
    }
  }, [phoneInput.value])

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      phoneInput.setValue('+')
    } else {
      phoneInput.setValue(`+${e.target.value.replace(/\+/g, '')}`)
    }

    const resParse = parsePhoneNumberFromString(e.target.value)

    try {
      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'country',
        fieldValue: resParse.country.toLowerCase(),
      })
    } catch (e) {}

    if (resParse && resParse.country && resParse.isValid()) {
      phoneInput.setValue(resParse.number)
      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'phone',
        fieldValue: resParse.number,
      })
    } else {
      dispatch({
        type: 'SET_FIELD_VALUE',
        fieldName: 'phone',
        fieldValue: `+${e.target.value.replace(/\+/g, '')}`,
      })
    }
  }

  const availableCountriesWithNums = availableCountries.map((i) => {
    return {
      ...i,
      numCode: getCountryCallingCode(i.id.toUpperCase()),
    }
  })

  const handleCountryClick = ({ numCode, id }) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'phone',
      fieldValue: numCode,
    })

    dispatch({
      type: 'SET_FIELD_VALUE',
      fieldName: 'country',
      fieldValue: id.toLowerCase(),
    })

    phoneInput.setValue(numCode)
    DDOpen.setFalse()
  }

  let formattedNumber = phoneInput.value

  try {
    const aaa = parsePhoneNumberFromString(phoneInput.value)
    formattedNumber = aaa.format('INTERNATIONAL')
  } catch (e) {}

  return (
    <Shared.InputWrapper active={phoneFocus.focused || phoneInputTouched.value} error={!!phoneError}>
      <Shared.InputLabel active={phoneInputTouched.value || !!phoneError} error={!!phoneError}>
        {!!phoneError && <span>{phoneError}</span>}
      </Shared.InputLabel>

      <E.FlagButton
        onClick={() => {
          DDOpen.toggle()
        }}
      >
        <div
          css={css`
            img {
              height: 26px !important;
              width: 26px !important;
              border-radius: 100%;
              object-fit: cover;
            }
          `}
        >
          <ReactCountryFlag countryCode={country} svg />
        </div>
      </E.FlagButton>

      <E.Input
        value={formattedNumber}
        onChange={handleChange}
        onKeyPress={pressOnlyNumbers}
        onClick={phoneInputTouched.setTrue}
        type='tel'
      />
      <OutsideClickHandler
        onOutsideClick={() => {
          DDOpen.setFalse()
        }}
      >
        {DDOpen.value && (
          <CountriesDropDown availableCountries={availableCountriesWithNums} countryClick={handleCountryClick} />
        )}
      </OutsideClickHandler>
    </Shared.InputWrapper>
  )
}
