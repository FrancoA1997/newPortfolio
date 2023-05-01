import React, { useState } from 'react'
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import Carousel from '../ReusableComponents/Carousel/Carousel'
import { InfoProjectitem } from '../ReusableComponents/InfoItem/Infoitem'
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
  const [isSwitching, setIsSwitching] = useState(false)

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
          <div>
            <InfoProjectitem
              key={english}
              isSwitching={isSwitching}
              text={english ? projectDisplayed?.time : projectDisplayed?.tiempo}
              styles='info-project-item'
            />
          </div>
          <Title
            styles='info-project-title'
            text={english ? 'Description' : 'Descripcion'}
            icon={<DescriptionIcon className='tick-green' style={{ marginLeft: '10px', marginBottom: '5px' }} />}
          />
          <InfoProjectitem
            key={english}
            isSwitching={isSwitching}
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
                <div className={isSwitching ? 'repo-links animation-off' : 'repo-links animation-on'}>
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
        <div key={english} className={isSwitching ? 'stack-wrapper animation-off' : 'stack-wrapper animation-on'}>
          {projectDisplayed.stack.map((img, idx) => (
            <img key={idx} className='stack-img' src={urlFor(img)} />
          ))}
        </div>
      </div>
      <div className='show-container'>
        <div className='video-player'>
          <div className={isSwitching ? 'animation-video-off' : 'animation-video-on'}>
            <Video key={currentIndex} video={projectDisplayed?.video?.asset} />
          </div>
        </div>
        <div className='carousel-container'>
          <Carousel isSwitching={isSwitching} setIsSwitching={setIsSwitching} projects={projects} projectDisplayed={projectDisplayed} english={english} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setProjectDisplayed={setProjectDisplayed} />
        </div>
      </div>
    </div>
  )
}

export default Projects
