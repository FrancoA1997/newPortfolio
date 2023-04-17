import React from 'react'
import './projects.css'
import ReactPlayer from 'react-player'
import LaunchIcon from '@mui/icons-material/Launch'
import video from '../../../public/videos/social-media.mp4'
import arrow from '../../../public/images/arrow.png'
const Projects = () => {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <div className='section-title'>
          My Projects
        </div>
        <div className='project-title'>
          Dev. Social Network
        </div>
        <div className='project-info-container'>
          <p className='info-project-title'>Time invested  📅</p>
          <p className='info-project-item'>3 MONTHS</p>
          <p className='info-project-title'>Description </p>
          <p className='project-desc'>Social web application meant for developers to share their progress in recent projects and ideas.</p>
          <p className='info-project-title'>GitHub Repository</p>
          <div className='repo-links'>
            <p className='info-project-git-title'>Backend</p>
            <a style={{ textDecoration: 'none', cursor: 'pointer' }}><LaunchIcon style={{ color: '#4E9F3D', marginLeft: '10px' }} /></a>
          </div>
        </div>
        <p className='info-project-title'>Tech Stack</p>
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
          <img src={arrow} alt='' className='arrow-next' />
          <img src={arrow} alt='' className='arrow-prev' />
        </div>
      </div>
    </div>
  )
}

export default Projects
