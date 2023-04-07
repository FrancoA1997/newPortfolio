import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <>
      <div className='profile-container'>
        <div className='title'>
          <h1>About me</h1>
        </div>
        <img className='profile-img' src='../public/images/dummy-img.png' alt='profile_img' />
        <div className='profile-info'>
          <p className='info-title'>Name</p>
          <p className='info-item'>Franco Alvarez </p>
          <p className='info-title'>Location</p>
          <p className='info-item'>Cordoba, Argentina 📍 </p>
          <p className='info-title'>Status</p>
          <p className='info-item'>Unemployed 😢 </p>
          <p className='info-title'>Time Coding</p>
          <p className='info-item'>2 Years 📅 </p>
        </div>
        <div className='profile-social'>
          <img className='social-img' src='../public/images/github.png' alt='github-img' />
          <img className='social-img' src='../public/images/linkedin.png' alt='linkedin-img' />
        </div>
      </div>
    </>
  )
}

export default Profile
