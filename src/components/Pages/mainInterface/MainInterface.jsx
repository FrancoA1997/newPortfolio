import React, { useState } from 'react'
import './mainInterface.css'
// import Loader from '../../loader/Loader'
// eslint-disable-next-line no-unused-vars
import Profile from '../../Profile/Profile'
// eslint-disable-next-line no-unused-vars
import Contact from '../../Contact/Contact'
// eslint-disable-next-line no-unused-vars
import ProfileEsp from '../../Profile/ProfileEsp'
import Projects from '../../Projects/Projects'
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
        <Projects />
        {/* {english ? <Profile /> : <ProfileEsp />} */}
      </div>
    </div>
  )
}

export default MainInterface
