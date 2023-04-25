import React from 'react'
import './projects.css'
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import Infoitem from '../ReusableComponents/InfoItem/Infoitem'
import ReactPlayer from 'react-player'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import DescriptionIcon from '@mui/icons-material/Description'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import video from '../../../public/videos/social-media.mp4'
import arrow from '../../../public/images/arrow.png'
const Projects = ({ english }) => {
  const pTitle = 'Dev. Social Network'
  const pTitulo = 'Dev. Red Social'
  const description = 'Social web application meant for developers to share their progress in recent projects and ideas.'
  const descripcion = 'Una red social pensada para que los desarrolladores compartan su progreso en proyectos recientes y ideas.'
  return (
    <div className='projects'>
      <div className='projects-container'>
        <SectionTitle
          styles='section-project-title'
          text={english === true ? 'Projects' : 'Proyectos'}
        />
        <Title
          text={english ? pTitle : pTitulo}
          styles='project-title'
        />
        <div className='project-info-container'>
          <Title
            styles='info-project-title'
            text={english ? 'Time invested' : 'Tiempo invertido'}
            icon={<CalendarMonthIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <Infoitem
            text={english ? '3 MONTHS' : '3 MESES'}
            styles='info-project-item'
          />
          <Title
            styles='info-project-title'
            text={english ? 'Description' : 'Descripcion'}
            icon={<DescriptionIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <Infoitem
            text={english ? description : descripcion}
            styles='project-description'
          />
          <Title
            styles='info-project-title'
            text={english ? 'Repository' : 'Repositorios'}
            icon={<GitHubIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <div key={english} className='repo-links'>
            <p className='info-project-git-title'>Backend</p>
            <a style={{ textDecoration: 'none', cursor: 'pointer' }}><LaunchIcon className='tick-green' style={{ color: '#4E9F3D', marginLeft: '10px' }} /></a>
          </div>
        </div>
        <Title
          styles='info-project-title'
          text={english ? 'Tech Stack ' : 'Tecnologias'}
          icon={<CollectionsBookmarkIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
        />
        <div key={english} className='stack-wrapper'>
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
