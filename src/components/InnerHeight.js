import React, { useState, useEffect } from 'react'

const Component = ({ render }) => {
  const [InnerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    updateScrollPosition()
    window.addEventListener('resize', updateScrollPosition)

    return () => {
      window.removeEventListener('resize', updateScrollPosition)
    }
  }, [])

  const updateScrollPosition = () => {
    setInnerHeight(window.innerHeight)
  }

  return (
    <>
      {render({
        InnerHeight,
      })}
    </>
  )
}

export default Component
