import React, { useEffect, useState } from 'react'
import './projects.css'
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import { Infoitem } from '../ReusableComponents/InfoItem/Infoitem'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import DescriptionIcon from '@mui/icons-material/Description'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import Video from '../videoPlayer/Video'
import arrow from '../../../public/images/arrow.png'
import { urlFor } from '../../client'
const Projects = ({ english, projects }) => {
  const [projectDisplayed, setProjectDisplayed] = useState(projects[0])
  console.log(projectDisplayed?.video.asset.url)

  return (
    <div className='projects'>
      <div className='projects-container'>
        <SectionTitle
          styles='section-project-title'
          text={english === true ? 'Projects' : 'Proyectos'}
        />
        <Title
          text={english ? projectDisplayed?.title : projectDisplayed?.titulo}
          styles='project-title'
        />
        <div className='project-info-container'>
          <Title
            styles='info-project-title'
            text={english ? 'Time invested' : 'Tiempo invertido'}
            icon={<CalendarMonthIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <Infoitem
            text={english ? projectDisplayed?.time : projectDisplayed?.tiempo}
            styles='info-project-item'
          />
          <Title
            styles='info-project-title'
            text={english ? 'Description' : 'Descripcion'}
            icon={<DescriptionIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <Infoitem
            text={english ? projectDisplayed?.description : projectDisplayed?.descripcion}
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
          {projectDisplayed.stack.map((img, idx) => (
            <img key={idx} className='stack-img' src={urlFor(img)} />
          ))}
        </div>
      </div>
      <div className='show-container'>
        <div className='video-player'>
          <Video video={projectDisplayed?.video?.asset} />
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
