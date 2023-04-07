import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <>
      <div className='top-bar'>
        <div className='dummy-btn'> </div>
        <div className='dummy-btn'> </div>
        <div className='dummy-btn'> </div>
        <div className='top-bar-links'>
          <span className='p-tag'>About</span>
          <span className='p-tag'>Projects</span>
          <span className='p-tag'>Stack</span>
          <span className='p-tag'>Contact</span>
        </div>

      </div>
      <div className='profile-info'>
        Franco Alvarez

      </div>
    </>
  )
}

export default Profile
