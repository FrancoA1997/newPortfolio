/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import './profile.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Resume from '../../../public/Resume.pdf'
const Profile = () => {
  const [showMore, setShowMore] = useState(false)
  const welcomeMessage = 'Welcome to my portfolio'
  return (
    <>
      <div className='profile'>
        <div className='profile-container'>
          <div className='title'>
            About me
          </div>
          <img className='profile-img' src='../public/images/dummy-img.png' alt='profile_img' />
          <div className='profile-info'>
            <p className='info-title'>Name</p>
            <p className='info-item'>Franco Alvarez </p>
            <p className='info-title'>Location</p>
            <p className='info-item'>Cordoba, Argentina 📍 </p>
            <p className='info-title'>Role</p>
            <p className='info-item'>Full Stack Web Developer </p>
            <p className='info-title'>Time Coding</p>
            <p className='info-item'>2.5 Years 📅 </p>
          </div>
          <div className='profile-social'>
            <a href={Resume} download='Resume'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Resume</button></a>
          </div>
        </div>
        <div className='description-section'>
          <div className='head-title'> {welcomeMessage}</div>
          <div className='description'>
            <p> I am a highly motivated, self-taught developer seeking to launch a career building web applications and services.
              <br />I've been building and deploying web applications and web services for over 2 years.<br />
              My next goal is to find my first job and keep growing as a developer.<br /> However, this time along side a group of experienced developers.
            </p>
            <button className='show-more-btn' onClick={() => setShowMore(!showMore)}> {showMore ? 'Hide' : 'Show'}  Studies</button>
          </div>

          {showMore
            ? <>
              <div className='description-more'>
                <p className='ed-title'>Egg Coorporation Bootcamp <span style={{ fontSize: '15px', fontWeight: '500', marginLeft: '325px' }}>Degree: </span><span style={{ marginLeft: '5px', fontSize: '14px', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></p>
                <span className='date-title'>Duration: from Jul/2021 to Jul/2022</span>
                <p style={{ marginTop: '10px' }}> By the end of this bootcamp, I was able to build my own website with Java (Spring-boot Framework)<br /> and MySQL as backend, and also learned the basics of HTML, CSS and Bootstrap as frontend.<br />
                </p>
              </div>
              <div className='description-more-2'>
                <p className='ed-title'>Self-Taugth</p>
                <span className='date-title'>Duration: July/2022 till now</span>
                <p style={{ marginTop: '10px' }}> As soon as the previous bootcamp ends, I started to learn on my own with online material.<br />
                  I've switched from Java to Node.js and started to learn React.js along side good practices such as reusable components,<br /> Hooks, Virtual DOM, state/props & much more !
                </p>
              </div>
            </>
            : <div />}
        </div>
      </div>
    </>
  )
}

export default Profile
