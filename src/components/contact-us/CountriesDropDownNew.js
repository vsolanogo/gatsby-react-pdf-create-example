import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ReactCountryFlag from 'react-country-flag'

const E = {}

E.Wrapper = styled.div`
  max-height: 18.75em;
  overflow: auto;
  z-index: 44;
  position: absolute;
  padding: 0.375em 0;
  margin: 0;
  box-shadow: 0.0625em 0.125em 1.125em rgba(0, 0, 0, 0.25);
  background-color: white;
  width: 100%;
  border-radius: 4px;
`

E.ListItem = styled.div`
  min-height: 2.6875em;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 11px;
  font-size: 14px;
  letter-spacing: 0.06em;

  :hover {
    background-color: #f1f1f1;
  }
`

const CountriesDropDown = React.memo(
  ({ availableCountries, countryClick }) => {
    if (availableCountries.length === 0)
      return (
        <E.Wrapper>
          <E.ListItem
            css={css`
              cursor: default;
              padding-left: 1.875em;
              :hover {
                background-color: white;
              }
            `}
          >
            No entries found
          </E.ListItem>
        </E.Wrapper>
      )

    return (
      <E.Wrapper>
        {availableCountries.map((i) => (
          <E.ListItem
            key={`${i.id}${i.name}`}
            tabIndex={0}
            onClick={() => {
              if (i.numCode) {
                countryClick({
                  id: i.id,
                  name: i.name,
                  numCode: `+${i.numCode}`,
                })
              } else {
                countryClick({ id: i.id, name: i.name })
              }
            }}
            css={css`
              img {
                border-radius: 100%;
                object-fit: cover;
                margin-right: 6px;
              }
            `}
          >
            <ReactCountryFlag countryCode={i.id} svg style={{ height: '25px', width: '25px' }} />
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
          </E.ListItem>
        ))}
      </E.Wrapper>
    )
  },
  (prev, next) => prev.availableCountries === next.availableCountries && prev.countryClick === next.countryClick,
)

export { CountriesDropDown }
