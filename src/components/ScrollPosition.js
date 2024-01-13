import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

const Component = ({ render }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const [scrollposDebounced] = useDebounce(scrollPosition, 150)

  useEffect(() => {
    updateScrollPosition()
    window.addEventListener('scroll', updateScrollPosition)

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])

  const updateScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  return (
    <>
      {render({
        scrollPosition: scrollposDebounced,
      })}
    </>
  )
}

export default Component
