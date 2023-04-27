/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import { Infoitem } from '../ReusableComponents/InfoItem/Infoitem'
import { urlFor } from '../../client'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DescriptionIcon from '@mui/icons-material/Description'
import arrow from '../../../public/images/arrow.png'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import Video from '../videoPlayer/Video'
import './projects.css'

const Projects = ({ english, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectDisplayed, setProjectDisplayed] = useState(projects[currentIndex])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setProjectDisplayed(projects[currentIndex])
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setProjectDisplayed(projects[currentIndex])
  }

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
          <div key={english}>
            <div key={currentIndex} className='repo-links'>
              <p className='info-project-git-title'>Backend</p>
              <a style={{ textDecoration: 'none', cursor: 'pointer' }}><LaunchIcon className='tick-green' style={{ color: '#4E9F3D', marginLeft: '10px' }} /></a>
            </div>
          </div>
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
          <div onClick={goToNext} className='switch-btn arrow-next'>
            <img src={arrow} alt='' />
            <p style={{ rotate: '180deg' }}>Next</p>
          </div>
          <div onClick={goToPrevious} className='switch-btn arrow-prev'>
            <img src={arrow} alt='' />
            <p>Prev</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
