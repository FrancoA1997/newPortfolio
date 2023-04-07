import React, { useState } from 'react'
import './mainInterface.css'
import Loader from '../../loader/Loader'
import Profile from '../../Profile/Profile'
const MainInterface = () => {
  const [isFetching, setIsFetching] = useState(true)
  setTimeout(() => {
    setIsFetching(false)
  }, 7000)
  return (
    <div className='main-interface-container'>
      <div className={isFetching ? 'fetching' : 'interface-window'}>
        {isFetching ? <Loader /> : <Profile />}
      </div>
    </div>
  )
}

export default MainInterface
