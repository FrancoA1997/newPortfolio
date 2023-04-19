import React, { useState } from 'react'
import './mainInterface.css'
// import Loader from '../../loader/Loader'
// eslint-disable-next-line no-unused-vars
import Profile from '../../Profile/Profile'
import Contact from '../../Contact/Contact'
import ContactEsp from '../../Contact/Contact-esp'
// eslint-disable-next-line no-unused-vars
import ProfileEsp from '../../Profile/ProfileEsp'
// eslint-disable-next-line no-unused-vars
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
        {/* <Contact /> */}
        {english ? <Contact /> : <ContactEsp />}
        {/* {english ? <Profile /> : <ProfileEsp />} */}
      </div>
    </div>
  )
}

export default MainInterface
