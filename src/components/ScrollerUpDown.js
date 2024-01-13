import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { animateScroll as scroll, animateScroll } from 'react-scroll'
import ScrollPosition from './ScrollPosition'
import WindowDimentions from './WindowDimentions'
import ScrollUp from '../images/icons/scroll-up.svg'
import InnerHeight from './InnerHeight'

const EButton = styled.button`
  position: fixed;
  right: 100px;
  bottom: 120px;
  cursor: pointer;
  border: 0;
  background: transparent;
  z-index: 111;
  transition: all 0.3s cubic-bezier(0, 1, 1, 1);
  transform: ${(props) => (props.active ? 'translatey(150px)' : 'translatey(0px)')};
  filter: ${(props) => (props.active ? 'opacity(0)' : 'opacity(1)')};
  @media (max-width: 1100px) {
    display: none;
  }
`

const EImage = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.3s cubic-bezier(0, 1, 1, 1);
  transform: ${(props) => (props.active ? 'scale(0.6)' : 'scale(1)')};
  border-radius: 100%;
  position: absolute;
  box-shadow: -3px 10px 23px rgba(0, 0, 0, 0.13);
`

const Component = () => {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) return null

  return (
    <ScrollPosition
      render={({ scrollPosition }) => (
        <WindowDimentions
          render={({ height }) => {
            const pageHeight =
              !!document && !!document.body && !!document.body.scrollHeight ? document.body.scrollHeight : 0

            const displayScrollUp = pageHeight - height - 150 < scrollPosition && pageHeight > 0

            return (
              <EButton
                active={!displayScrollUp}
                onClick={() => {
                  animateScroll.scrollToTop()
                }}
              >
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <EImage src={ScrollUp} active={!displayScrollUp} alt='arrow up' />
                </div>
              </EButton>
            )
          }}
        />
      )}
    />
  )
}

export const ScrollerUpDown = () => (
  <InnerHeight render={({ InnerHeight }) => <Component key={`inht${InnerHeight}`} />} />
)
