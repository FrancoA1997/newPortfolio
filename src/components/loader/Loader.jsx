import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import './loader.css'
import CircularStatic from './LoaderAnimation'
const Loader = () => {
  const messages = ['¡ Welcome !', 'Loading content..', '¡ Here we go !']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= 4 ? 0 : prevIndex + 1))
    }, 1500)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className='loaderContainer'>
      <div className='loader-message'>
        <CircularStatic />
        <Typography fontSize={30} variant='subtitle1' color='#03C988'>
          <div key={index} className='load-text'>
            {messages[index]}
          </div>
        </Typography>
      </div>
    </div>

  )
}

export default Loader
