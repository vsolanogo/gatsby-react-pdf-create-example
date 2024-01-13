import React, { useState, useEffect } from 'react'
import { isMobile as whetherMobile, isBrowser as whetherBrowser, isTablet as whetherTablet } from 'react-device-detect'

const DeviceDetect = ({ render }) => {
  const [isMobile, setMobile] = useState(false)
  const [isBrowser, setBrowser] = useState(false)
  const [isTablet, setTablet] = useState(false)

  useEffect(() => {
    setMobile(whetherMobile)
    setBrowser(whetherBrowser)
    setTablet(whetherTablet)
  }, [])

  return (
    <>
      {render({
        isMobile,
        isBrowser,
        isTablet,
      })}
    </>
  )
}

export default DeviceDetect
