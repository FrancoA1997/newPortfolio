import React from 'react'
import './projects.css'
import ReactPlayer from 'react-player'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import DescriptionIcon from '@mui/icons-material/Description'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import video from '../../../public/videos/social-media.mp4'
import arrow from '../../../public/images/arrow.png'
const Projects = ({ english }) => {
  return (
    <div className='projects'>
      <div className='projects-container'>
        <div className='section-title'>
          My Projects
        </div>
        <div className='project-title'>
          Dev. Social Network
        </div>
        <div className='project-info-container'>
          <p className='info-project-title'>Time invested  <CalendarMonthIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} /> </p>
          <p className='info-project-item'>3 MONTHS</p>
          <p className='info-project-title'>Description <DescriptionIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} /> </p>
          <p className='project-desc'>Social web application meant for developers to share their progress in recent projects and ideas.</p>
          <p className='info-project-title'>Repository <GitHubIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} /></p>
          <div className='repo-links'>
            <p className='info-project-git-title'>Backend</p>
            <a style={{ textDecoration: 'none', cursor: 'pointer' }}><LaunchIcon className='tick-green' style={{ color: '#4E9F3D', marginLeft: '10px' }} /></a>
          </div>
        </div>
        <p className='info-project-title'>Tech Stack <CollectionsBookmarkIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} /> </p>
        <div className='stack-wrapper'>
          <img className='stack-img' src='../public/images/stackImgs/mongo.png' alt='mongo-img' />
          <img className='stack-img' src='../public/images/stackImgs/node.png' alt='node-img' />
          <img className='stack-img' src='../public/images/stackImgs/express.png' alt='express-img' />
          <img className='stack-img' src='../public/images/stackImgs/js.png' alt='js-img' />
          <img className='stack-img' src='../public/images/stackImgs/react.png' alt='react-img' />
        </div>
      </div>
      <div className='show-container'>
        <div className='video-player'>
          <ReactPlayer
            url={video}
            controls
            width='75%'
            height='75%'
          />
          <div className='switch-btn arrow-next'>
            <img src={arrow} alt='' />
            <p style={{ rotate: '180deg' }}>Next</p>
          </div>
          <div className='switch-btn arrow-prev'>
            <img src={arrow} alt='' />
            <p>Prev</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
