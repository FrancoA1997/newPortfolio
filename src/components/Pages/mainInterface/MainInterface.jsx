import React, { useState } from 'react'
import './mainInterface.css'
// import Loader from '../../loader/Loader'
import Profile from '../../Profile/Profile'
import ProfileEsp from '../../Profile/ProfileEsp'
import Topbar from '../../Topbar/Topbar'
const MainInterface = () => {
  const [english, setEnglish] = useState(true)
  // const [isFetching, setIsFetching] = useState(true)
  // setTimeout(() => {
  // setIsFetching(false)
  // }, 7000)
  return (
    <div className='main-interface-container'>
      <div className='interface-window'>
        <Topbar english={english} setEnglish={setEnglish} />
        {english ? <Profile /> : <ProfileEsp />}
      </div>
    </div>
  )
}

export default MainInterface
