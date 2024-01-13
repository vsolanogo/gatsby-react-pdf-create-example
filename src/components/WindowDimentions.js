import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

const WindowDimentions = ({ render }) => {
  const [width, setWidth] = useState(400)
  const [height, setHeight] = useState(400)

  const [widthDebounced] = useDebounce(width, 400)
  const [heightDebounced] = useDebounce(height, 400)

  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      {render({
        width: widthDebounced,
        height: heightDebounced,
      })}
    </>
  )
}

export default WindowDimentions
