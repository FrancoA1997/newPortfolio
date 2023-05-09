import React, { useState, useEffect } from 'react'
import './mainInterface.css'
import Loader from '../../components/loader/Loader'
import Profile from '../../components/Profile/Profile'
// eslint-disable-next-line no-unused-vars
import Contact from '../../components/Contact/Contact'
import Stack from '../../components/Stack/Stack'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
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
        {isFetching ? <div /> : <Topbar setMounted={setMounted} mounted={mounted} setEnglish={setEnglish} english={english} />}
        {isFetching ? <Loader /> : <div />}
        {mounted === 'About' && isFetching === false ? <Profile profile={profile} studies={studies} english={english} /> : <div />}
        {mounted === 'Projects' && isFetching === false ? <Projects projects={projects} english={english} /> : <div />}
        {mounted === 'Contact' && isFetching === false ? <Contact english={english} /> : <div />}
        {mounted === 'Stack' && isFetching === false ? <Stack stack={stack} english={english} /> : <div />}
      </div>
    </div>
  )
}

export default MainInterface