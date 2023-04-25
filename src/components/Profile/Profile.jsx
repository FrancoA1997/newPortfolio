/* eslint-disable react/jsx-closing-tag-location */
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import { Infoitem } from '../ReusableComponents/InfoItem/Infoitem'
import { Description, Studies } from '../ReusableComponents/Description/Description'
import { React, useState, useEffect } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ConstructionIcon from '@mui/icons-material/Construction'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import PanToolIcon from '@mui/icons-material/PanTool'
import Curriculum from '../../../public/Curriculum.pdf'
import Resume from '../../../public/Resume.pdf'
import './profile.css'

const Profile = ({ english }) => {
  const [showMore, setShowMore] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowMore(true)
    }, 2500)
  }, [])
  useEffect(() => {
    setShowMore(false)
    setTimeout(() => {
      setShowMore(true)
    }, 2500)
  }, [english])

  const description = ['I am a highly motivated, self-taught developer seeking to launch a career building web applications and services.', 'I\'ve been building and deploying web applications and web services for over 2 years.', 'My next goal is to find my first job and keep growing as a developer.However, this time along side a group of experienced developers']
  const descripcion = ['Soy un desarrollador altamente motivado y autodidacta que busca iniciar una carrera construyendo aplicaciones y servicios web.', 'He estado construyendo y desplegando aplicaciones y servicios web durante más de 2 años.', 'Mi próximo objetivo es encontrar mi primer trabajo y seguir creciendo como desarrollador, <br /> pero esta vez junto a un grupo de desarrolladores experimentados']
  const studio1 = ['Al final de este bootcamp, fui capaz de construir mi propio sitio web con Java (Spring-boot como framework),', 'y MySQL como backend, también aprendí los conceptos básicos de HTML, CSS y Bootstrap para el Frontend.']
  const study1 = ['By the end of this bootcamp, I was able to build my own website with Java (Spring-boot Framework),', 'and MySQL as backend, and also learned the basics of HTML, CSS and Bootstrap as frontend.']
  const studio2 = ['Tan pronto como finalizó el bootcamp, comencé a aprender por mi cuenta con material en online.', 'Cambié de Java a Node.js y comencé a aprender React.js junto a buenas prácticas como componentes reutilizables,', 'Hooks, Virtual DOM, State/props y más.']
  const study2 = ['As soon as the previous bootcamp ends, I started to learn on my own with online material.', "I've switched from Java to Node.js and started to learn React.js along side good practices such as reusable components,", 'Hooks, Virtual DOM, state/props & much more !']
  const welcomeMessage = 'Welcome to my portfolio'
  const mensajeBienvenida = 'Bienvenido a mi portfolio!'
  return (
    <>
      <div className='profile'>
        <div className='profile-container'>
          <SectionTitle styles='title-profile' text={english === true ? 'About me' : 'Sobre mi'} />
          <img className='profile-img' src='../public/images/dummy-img.png' alt='profile_img' />
          <div className='profile-info'>
            <Title styles='info-title-profile' text={english ? 'Name' : 'Nombre'} />
            <Infoitem english={english} text={english ? 'Franco' : 'Franco2'} icon={<PanToolIcon fontSize='small' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Location' : 'Locacion'} />
            <Infoitem english={english} text={english ? 'Cordoba, Argentina ' : 'Cordoba, Argentina'} icon={<LocationOnIcon fontSize='small' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Role' : 'Rol'} />
            <Infoitem english={english} text={english ? 'Full Stack Web Developer ' : 'Full Stack Web Developer'} icon={<ConstructionIcon fontSize='small' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Time Coding' : 'Tiempo programando'} />
            <Infoitem english={english} text={english ? '2+ Years' : '2+ Años'} icon={<MoreTimeIcon fontSize='small' className='info-icon' />} styles='info-item-profile' />
          </div>
          {english
            ? <div className='profile-social'>
              <a href={Resume} download='Resume'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Resume</button></a>
            </div>
            : <div className='profile-social'>
              <a href={Curriculum} download='Curriculum'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Curriculum</button></a>
            </div>}
        </div>
        <div className='description-section'>
          <Title styles='head-profile-title' text={english ? welcomeMessage : mensajeBienvenida} />
          <Description english={english} setShowMore={setShowMore} showMore={showMore} text={english ? description : descripcion} styles='description' btnStyles='show-more-btn' />
          {showMore
            ? <>
              <Studies
                text={english ? study1 : studio1}
                date={english ? 'Duration: from Jul/2021 to Jul/2022' : 'Duracion: Desde Jul/2021 Hasta Jul/2022'}
                title='Egg Coorporation Bootcamp'
                titleStyles='company-title'
                dateStyles='date-title'
                styles='studies'
                degree={<><span style={{ fontSize: '15px', fontWeight: '500', marginLeft: '325px' }}>Degree: </span><span style={{ marginLeft: '5px', fontSize: '14px', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></>}
              />
              <Studies
                text={english ? study2 : studio2}
                date={english ? 'Duration: July/2022 till now' : 'Duracion: Desde Jul/2022 hasta la fecha'}
                title={english ? 'Self-Taught' : 'Auto-Didacta'}
                titleStyles='company-title'
                dateStyles='date-title'
                styles='studies'
              />
            </>
            : <div />}
        </div>
      </div>
    </>
  )
}

export default Profile
