import React, { useState } from 'react'
import './mainInterface.css'
// import Loader from '../../loader/Loader'
import Profile from '../../Profile/Profile'
// eslint-disable-next-line no-unused-vars
import Contact from '../../Contact/Contact'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import Projects from '../../Projects/Projects'
import Topbar from '../../Topbar/Topbar'

const MainInterface = () => {
  const [english, setEnglish] = useState(true)
  const [mounted, setMounted] = useState('About')
  // const [isFetching, setIsFetching] = useState(true)
  // setTimeout(() => {
  // setIsFetching(false)
  // }, 7000)
  console.log(mounted)

  return (
    <div className='main-interface-container'>
      <div className='interface-window'>
        <Topbar setMounted={setMounted} setEnglish={setEnglish} english={english} />
        {mounted === 'About' ? <Profile english={english} /> : <div />}
        {mounted === 'Projects' ? <Projects english={english} /> : <div />}
        {mounted === 'Contact' ? <Contact english={english} /> : <div />}
        {mounted === 'Stack' ? <div /> : <div />}
      </div>
    </div>
  )
}

export default MainInterface
