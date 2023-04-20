import React, { useState } from 'react'
import './mainInterface.css'
import Loader from '../../loader/Loader'
import Profile from '../../Profile/Profile'
// eslint-disable-next-line no-unused-vars
import Contact from '../../Contact/Contact'
import Stack from '../../Stack/Stack'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import Projects from '../../Projects/Projects'
import Topbar from '../../Topbar/Topbar'

const MainInterface = () => {
  const [english, setEnglish] = useState(true)
  const [mounted, setMounted] = useState('About')
  const [isFetching, setIsFetching] = useState(true)
  setTimeout(() => {
    setIsFetching(false)
  }, 7000)
  console.log(mounted)

  return (
    <div className='main-interface-container'>
      <div className={isFetching ? 'fetching' : 'interface-window'}>
        {isFetching ? <div /> : <Topbar setMounted={setMounted} mounted={mounted} setEnglish={setEnglish} english={english} />}
        {isFetching ? <Loader /> : <div />}
        {mounted === 'About' && isFetching === false ? <Profile english={english} /> : <div />}
        {mounted === 'Projects' && isFetching === false ? <Projects english={english} /> : <div />}
        {mounted === 'Contact' && isFetching === false ? <Contact english={english} /> : <div />}
        {mounted === 'Stack' && isFetching === false ? <Stack english={english} /> : <div />}
      </div>
    </div>
  )
}

export default MainInterface
