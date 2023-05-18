import React, { useState, useEffect } from 'react'
import './mainInterface.css'
import Loader from '../../components/loader/Loader'
import Profile from '../../components/Profile/Profile'
import Contact from '../../components/Contact/Contact'
import Stack from '../../components/Stack/Stack'
import NavbarMobile from '../../components/Topbar/NavbarMobile'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { client } from '../../client'
import Projects from '../../components/Projects/Projects'
import Topbar from '../../components/Topbar/Topbar'

const MainInterface = () => {
  const [projects, setProjects] = useState([])
  const [stack, setStack] = useState([])
  const [profile, setProfile] = useState([])
  const [studies, setStudies] = useState([])
  const [english, setEnglish] = useState(true)
  const [mounted, setMounted] = useState('About')
  const [isFetching, setIsFetching] = useState(true)
  const [mobileAboutOn, setMobileAboutOn] = useState(true)
  useEffect(() => {
    const query = '*[_type == "stacks"]'
    client.fetch(query)
      .then((data) => setStack(data))
  }, [])
  useEffect(() => {
    const query = '*[_type == "profile"]'
    client.fetch(query)
      .then((data) => setProfile(data))
  }, [])
  useEffect(() => {
    const query = '*[_type == "studies"]'
    client.fetch(query)
      .then((data) => setStudies(data))
  }, [])
  useEffect(() => {
    const query = '*[_type == "projects"]{...,video{...,_type == "mux.video" =>{...,asset->{...,"url": "https://stream.mux.com/" + playbackId, "thumbnail" : "https://image.mux.com/"+playbackId+"/thumbnail.png?width=214&height=121&fit_mode=pad&time=00"}}}}'
    client.fetch(query)
      .then((data) => setProjects(data))
  }, [])
  setTimeout(() => {
    setIsFetching(false)
  }, 4500)

  return (
    <div className='main-interface-container'>
      <div className={isFetching ? 'fetching' : 'interface-window'}>
        {isFetching ? null : <Topbar setMounted={setMounted} mounted={mounted} setEnglish={setEnglish} english={english} />}
        {isFetching ? <Loader /> : null}
        {mounted === 'About' && isFetching === false ? <Profile mobileAboutOn={mobileAboutOn} profile={profile} studies={studies} english={english} /> : null}
        {mounted === 'Projects' && isFetching === false ? <Projects mobileAboutOn={mobileAboutOn} projects={projects} english={english} /> : null}
        {mounted === 'Contact' && isFetching === false ? <Contact mobileAboutOn={mobileAboutOn} english={english} /> : null}
        {mounted === 'Stack' && isFetching === false ? <Stack mobileAboutOn={mobileAboutOn} stack={stack} english={english} /> : null}
        {isFetching ? null : <NavbarMobile setEnglish={setEnglish} english={english} setMobileAboutOn={setMobileAboutOn} setMounted={setMounted} />}
        {isFetching === false &&
          <div key={mobileAboutOn} className='section-navigation'>
            <div className={mobileAboutOn ? 'off' : 'on-back'}>
              <DoubleArrowIcon onClick={() => setMobileAboutOn(!mobileAboutOn)} fontSize='medium' className='go-back' />
            </div>
            <div className={mobileAboutOn ? 'dot-active ' : 'dot'} />
            <div className={mobileAboutOn ? 'dot' : 'dot-active '} />
            <div className={mobileAboutOn ? 'on' : 'off'}>
              <DoubleArrowIcon onClick={() => setMobileAboutOn(!mobileAboutOn)} fontSize='medium' className='go-foward' />
            </div>
          </div>}
      </div>
    </div>
  )
}

export default MainInterface
