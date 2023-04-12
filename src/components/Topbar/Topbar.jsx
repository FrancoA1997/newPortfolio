import React from 'react'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='top-bar'>
      <div className='dummy-btn' />
      <div className='dummy-btn' />
      <div className='dummy-btn' />
      <div className='top-bar-links'>
        <span className='p-tag'>About</span>
        <span className='p-tag'>Projects</span>
        <span className='p-tag'>Stack</span>
        <span className='p-tag'>Contact</span>
      </div>
    </div>
  )
}

export default Topbar
