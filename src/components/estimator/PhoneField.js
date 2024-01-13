import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../../store/estimator/contexts'
import Shared from './shared'
import { CountriesDropDown } from '../schedule-consultation/CountriesDropDown'
import styled from '@emotion/styled'
import { useBoolean, useInput, useFocus } from 'react-hookedup'
import { getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js'
import ct from 'countries-and-timezones'
import { pressOnlyNumbers } from '../../utils/keyPress'
import ReactCountryFlag from 'react-country-flag'
import { css } from '@emotion/react'
import OutsideClickHandler from 'react-outside-click-handler'
import { countriesToUnlist } from '../../static/countriesToUnlist'
import { validateNumber } from '../contact-us/PostForm'

const EInput = styled.input`
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
  padding-left: 50px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Montserrat', Arial, sans-serif;
  padding-left: 56px;
  height: 48px;
`

const EArrowDown = styled.div`
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

const EFlagButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0 10px 0 0;

  z-index: 100;
  left: 14px;
`

const EMailWrapper = styled.div`
  position: relative;
  min-height: 48px;
  display: flex;
  align-items: center;
  margin-top: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.focused ? '#ffa423' : '#dedede')};
  transition: all 0.2s;
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
  const { phoneError, countryIso2, ip, displayMailError } = state.estimator
  const phoneInput = useInput('+1')
  const phoneFocus = useFocus()

  const DDOpen = useBoolean(false)

  const [availableCountries, setAvailableCountries] = useState([])

  useEffect(() => {
    if (!!ip && !!ip.ip && !!ip.country) {
      dispatch({
        type: 'SET_PHONE',
        fieldValue: getCountryCallingCode(ip.country.toUpperCase()),
      })

      dispatch({
        type: 'SET_COUNTRY',
        payload: ip.country.toLowerCase(),
      })

      phoneInput.setValue(`+${getCountryCallingCode(ip.country.toUpperCase())}`)
    }

    if (!!ip && !!ip.ip && !!ip.continent_code) {
      dispatch({
        type: 'SET_PHONE',
        fieldValue: getCountryCallingCode(ip.continent_code.toUpperCase()),
      })

      dispatch({
        type: 'SET_COUNTRY',
        payload: ip.continent_code.toLowerCase(),
      })

      phoneInput.setValue(`+${getCountryCallingCode(ip.continent_code.toUpperCase())}`)
    }
  }, [ip])

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
    if (validateNumber({ phone: phoneInput.value, country: countryIso2 }) !== 'valid') {
      dispatch({
        type: 'SET_PHONE_VALID_STATUS',
        payload: validateNumber({
          phone: phoneInput.value,
          country: countryIso2,
        }),
      })
    } else {
      dispatch({
        type: 'SET_PHONE_VALID_STATUS',
        payload: false,
      })
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
        type: 'SET_COUNTRY',
        payload: resParse.country.toLowerCase(),
      })
    } catch (e) {}

    if (resParse && resParse.country && resParse.isValid()) {
      phoneInput.setValue(resParse.number)
      dispatch({
        type: 'SET_PHONE',
        payload: resParse.number,
      })
    } else {
      dispatch({
        type: 'SET_PHONE',
        payload: `+${e.target.value.replace(/\+/g, '')}`,
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
      type: 'SET_PHONE',
      payload: numCode,
    })

    dispatch({
      type: 'SET_COUNTRY',
      payload: id.toLowerCase(),
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
    <EMailWrapper focused={phoneFocus.focused}>
      <Shared.MailErrorLabel enabled={displayMailError && !!phoneError}>{phoneError}</Shared.MailErrorLabel>

      <EFlagButton
        onClick={() => {
          DDOpen.toggle()
        }}
      >
        <EArrowDown />
        <div
          css={css`
            img {
              height: 22px !important;
              width: 25px !important;
              display: flex;
              align-items: center;
            }
          `}
        >
          <ReactCountryFlag countryCode={countryIso2} svg />
        </div>
      </EFlagButton>

      <EInput
        value={formattedNumber}
        onChange={handleChange}
        onKeyPress={pressOnlyNumbers}
        type='tel'
        onFocus={() => {
          phoneFocus.bind.onFocus()
        }}
        onBlur={() => {
          phoneFocus.bind.onBlur()
        }}
      />
      <OutsideClickHandler
        onOutsideClick={() => {
          DDOpen.setFalse()
        }}
      >
        {DDOpen.value && (
          <div
            css={css`
              > div {
                left: 0;
                margin-top: 30px;
              }
            `}
          >
            <CountriesDropDown availableCountries={availableCountriesWithNums} countryClick={handleCountryClick} />
          </div>
        )}
      </OutsideClickHandler>
    </EMailWrapper>
  )
}
