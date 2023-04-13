import React from 'react'

import './topbar.css'

const Topbar = ({ english, setEnglish }) => {
  const handleChange = () => {
    setEnglish(!english)
  }
  return (
    <div className='top-bar'>
      <div className='top-bar-icons'>
        <div className='dummy-btn' />
        <div className='dummy-btn' />
        <div className='dummy-btn' />
      </div>
      <div className='top-bar-links'>
        <div className='select-flag' onClick={handleChange}>
          <img className='flag' src='../public/images/es.svg' alt='' />
          <img className='flag' src='../public/images/gb.svg' alt='' />
          <div className={english ? 'select-window-eng' : 'select-window-esp'} />
        </div>
        <span className='p-tag'>About</span>
        <span className='p-tag'>Projects</span>
        <span className='p-tag'>Stack</span>
        <span className='p-tag'>Contact</span>
      </div>
    </div>
  )
}

export default Topbar
