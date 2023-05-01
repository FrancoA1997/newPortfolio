import React, { useState } from 'react'
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import Carousel from '../ReusableComponents/Carousel/Carousel'
import { Infoitem } from '../ReusableComponents/InfoItem/Infoitem'
import { urlFor } from '../../client'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DescriptionIcon from '@mui/icons-material/Description'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import Video from '../videoPlayer/Video'
import './projects.css'

const Projects = ({ english, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectDisplayed, setProjectDisplayed] = useState(projects[currentIndex])
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
          <div key={currentIndex}>
            <Infoitem
              text={english ? projectDisplayed?.time : projectDisplayed?.tiempo}
              styles='info-project-item'
            />
          </div>
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
          {projectDisplayed.links.map((link, idx) => (
            <div key={idx}>
              <div key={english}>
                <div className='repo-links'>
                  <p className='info-project-git-title'>{link.tag}</p>
                  <a target='_blank' href={link.url} style={{ textDecoration: 'none', cursor: 'pointer' }} rel='noreferrer'><LaunchIcon className='tick-green' style={{ color: '#4E9F3D', marginLeft: '10px' }} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Title
          styles='info-project-title'
          text={english ? 'Tech Stack ' : 'Tecnologias'}
          icon={<CollectionsBookmarkIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
        />
        <div key={currentIndex}>
          <div key={english} className='stack-wrapper'>
            {projectDisplayed.stack.map((img, idx) => (
              <img key={idx} className='stack-img' src={urlFor(img)} />
            ))}
          </div>
        </div>
      </div>
      <div className='show-container'>
        <div className='video-player'>
          <div className='video-fade' key={currentIndex}>
            <Video video={projectDisplayed?.video?.asset} />
          </div>
        </div>
        <Carousel projects={projects} projectDisplayed={projectDisplayed} english={english} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setProjectDisplayed={setProjectDisplayed} />
      </div>
    </div>
  )
}

export default Projects
