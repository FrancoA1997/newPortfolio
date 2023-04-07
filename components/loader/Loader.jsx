import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import './loader.css'
import LinearWithValueLabel from './LoaderAnimation'
const Loader = () => {
  const messages = [' ', 'Fetching projects...', 'Fetching enviroments variables..', 'Fetching personal information..', 'Almost done!', 'All right here we go!']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= 5 ? 0 : prevIndex + 1))
    }, 1200)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className='loaderContainer'>
      <div className='loader-message'>
        <LinearWithValueLabel />
        <Typography variant='subtitle1' color='#03C988'>
          {messages[index]}
        </Typography>
      </div>
    </div>

  )
}

export default Loader
