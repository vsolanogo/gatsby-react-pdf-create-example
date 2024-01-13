import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ReactCountryFlag from 'react-country-flag'
import { getUserCountry, setUserCountry } from './saveCountryToStorage'

const EWrapper = styled.div`
  max-height: 18.75em;
  overflow: auto;
  z-index: 44;
  position: absolute;
  padding: 0.375em 0;
  margin: 0.625em 0 0.625em -0.0625em;
  box-shadow: 0.0625em 0.125em 1.125em rgba(0, 0, 0, 0.25);
  background-color: white;
  width: 100%;
  border-radius: 0.4375em;
`

const EListItem = styled.div`
  min-height: 2.6875em;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 0.375em;
  font-size: 1.2em;
  :hover {
    background-color: #f1f1f1;
  }
`

const CountriesDropDown = React.memo(
  ({ availableCountries, countryClick }) => {
    if (availableCountries.length === 0)
      return (
        <EWrapper>
          <EListItem
            css={css`
              cursor: default;
              padding-left: 1.875em;
              :hover {
                background-color: white;
              }
            `}
          >
            No entries found
          </EListItem>
        </EWrapper>
      )

    return (
      <EWrapper>
        {availableCountries.map((i) => (
          <EListItem
            key={`${i.id}${i.name}`}
            tabIndex={0}
            onClick={() => {
              const countryObj = { id: i.id, name: i.name }

              if (i.numCode) {
                countryClick({
                  ...countryObj,
                  numCode: `+${i.numCode}`,
                })

                setUserCountry(countryObj)
              } else {
                countryClick(countryObj)

                setUserCountry(countryObj)
              }
            }}
          >
            <ReactCountryFlag countryCode={i.id} svg style={{ height: '22px', width: '25px' }} />
            <div
              css={css`
                padding-left: 0.25em;
              `}
            >
              {i.name}
            </div>
            {i.numCode && (
              <div
                css={css`
                  padding-left: 0.25em;
                `}
              >
                +{i.numCode}
              </div>
            )}
          </EListItem>
        ))}
      </EWrapper>
    )
  },
  (prev, next) => prev.availableCountries === next.availableCountries && prev.countryClick === next.countryClick,
)

export { CountriesDropDown }
