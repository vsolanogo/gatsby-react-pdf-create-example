import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import EstimatorIcons from './icons'

const EWrapper = styled.div`
  margin-top: 20px;
  background: rgba(224, 224, 224, 0.3);
  border-radius: 5px;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 15px;
`

const EBold = styled.span`
  font-weight: 600;
  display: contents;
`

export const StopWatchDescription = () => {
  return (
    <EWrapper>
      <div
        css={css`
          margin-right: 10px;
        `}
      >
        <EstimatorIcons.Stopwatch />
      </div>{' '}
      This calculator is totally
      <EBold>&nbsp;free&nbsp;</EBold>and the estimation takes under
      <EBold>&nbsp;7 minutes!&nbsp;</EBold>
    </EWrapper>
  )
}
