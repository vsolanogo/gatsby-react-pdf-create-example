import React, { useEffect, useState } from 'react'
import MobileMenuContent_New from './MobileMenuContent_New'
import Drawer from 'react-motion-drawer'
import ScrollLock from 'react-scrolllock'
import { css } from '@emotion/react'

export default React.memo(
  ({ close, open, toggle, localeText }) => {
    const [rendered, setRendered] = useState(false)

    useEffect(() => {
      setRendered(true)
    }, [])

    const handleClose = () => {
      toggle()
    }

    if (rendered) {
      return (
        <Drawer
          right
          open={open}
          width={'66vw'}
          onChange={(e) => {
            if (!e) {
              close()
            }
          }}
          drawerStyle={{
            boxShadow: '-15px 15px 30px rgba(0, 0, 0, 0.13)',
          }}
        >
          {(val) => (
            <>
              {val > 1 && <ScrollLock />}
              <MobileMenuContent_New val={val} localeText={localeText} open={open} handleClose={handleClose} />
            </>
          )}
        </Drawer>
      )
    }

    return null
  },
  (prev, next) => prev.open === next.open,
)
