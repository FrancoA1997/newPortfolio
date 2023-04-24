/* eslint-disable react/jsx-closing-tag-location */
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import Infoitem from '../ReusableComponents/InfoItem/Infoitem'
import React, { useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ConstructionIcon from '@mui/icons-material/Construction'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import PanToolIcon from '@mui/icons-material/PanTool'
import Curriculum from '../../../public/Curriculum.pdf'
import DoneIcon from '@mui/icons-material/Done'
import Resume from '../../../public/Resume.pdf'
import './profile.css'
const Profile = ({ english }) => {
  const [showMore, setShowMore] = useState(false)
  setTimeout(() => {
    setShowMore(true)
  }, 2500)
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
            <Infoitem english={english} text={english ? 'Franco' : 'Franco2'} icon={<PanToolIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Location' : 'Locacion'} />
            <Infoitem english={english} text={english ? 'Cordoba, Argentina ' : 'Cordoba, Argentina'} icon={<LocationOnIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Role' : 'Rol'} />
            <Infoitem english={english} text={english ? 'Full Stack Web Developer ' : 'Full Stack Web Developer'} icon={<ConstructionIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Time Coding' : 'Tiempo programando'} />
            <Infoitem english={english} text={english ? '2+ Years' : '2+ Años'} icon={<MoreTimeIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Languages' : 'Idiomas'} />
            <Infoitem english={english} text={english ? 'English: FCE-B2' : 'Ingles: FCE-B2'} icon={<DoneIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
            <Infoitem english={english} text={english ? 'Spanish: Native' : 'Español: Nativo'} icon={<DoneIcon fontSize='small' className='info-icon' />} style='info-item-profile' />
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
          <div className='description'>
            {english
              ? <p> I am a highly motivated, self-taught developer seeking to launch a career building web applications and services.
                <br />I've been building and deploying web applications and web services for over 2 years.<br />
                My next goal is to find my first job and keep growing as a developer.<br /> However, this time along side a group of experienced developers.
              </p>
              : <p>Soy un desarrollador altamente motivado y autodidacta que busca iniciar una carrera construyendo aplicaciones y servicios web.
                <br />He estado construyendo y desplegando aplicaciones y servicios web durante más de 2 años.<br />
                Mi próximo objetivo es encontrar mi primer trabajo y seguir creciendo como desarrollador, <br /> pero esta vez junto a un grupo de desarrolladores experimentados.
              </p>}

            {english
              ? <button className='show-more-btn' onClick={() => setShowMore(!showMore)}> {showMore ? 'Hide' : 'Show'}  Studies</button>
              : <button className='show-more-btn' onClick={() => setShowMore(!showMore)}> {showMore ? 'Esconder' : 'Mostrar'} Estudios</button>}

          </div>

          {showMore
            ? <> {english === true
              ? <>
                <div className='description-more'>
                  <p className='ed-title'>Egg Coorporation Bootcamp <span style={{ fontSize: '15px', fontWeight: '500', marginLeft: '325px' }}>Degree: </span><span style={{ marginLeft: '5px', fontSize: '14px', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></p>
                  <span className='date-title'>Duration: from Jul/2021 to Jul/2022</span>
                  <p style={{ marginTop: '10px' }}> By the end of this bootcamp, I was able to build my own website with Java (Spring-boot Framework)<br /> and MySQL as backend, and also learned the basics of HTML, CSS and Bootstrap as frontend.<br />
                  </p>
                </div><div className='description-more-2'>
                  <p className='ed-title'>Self-Taugth</p>
                  <span className='date-title'>Duration: July/2022 till now</span>
                  <p style={{ marginTop: '10px' }}> As soon as the previous bootcamp ends, I started to learn on my own with online material.<br />
                    I've switched from Java to Node.js and started to learn React.js along side good practices such as reusable components,<br /> Hooks, Virtual DOM, state/props & much more !
                  </p>
                </div>
              </>
              : <>
                <div className='description-more'>
                  <p className='ed-title'>Egg Coorporation Bootcamp <span style={{ fontSize: '15px', fontWeight: '500', marginLeft: '325px' }}>Titulo: </span><span style={{ marginLeft: '5px', fontSize: '14px', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></p>
                  <span className='date-title'>Duracion: Desde Jul/2021 Hasta Jul/2022</span>
                  <p style={{ marginTop: '10px' }}> Al final de este bootcamp, fui capaz de construir mi propio
                    sitio web con Java (Spring-boot como framework),<br /> y MySQL como backend, también
                    aprendí los conceptos básicos de HTML, CSS y Bootstrap para el Frontend.
                  </p>
                </div><div className='description-more-2'>
                  <p className='ed-title'>Auto-Didacta</p>
                  <span className='date-title'>Duracion: Desde Jul/2022 hasta la fecha</span>
                  <p style={{ marginTop: '10px' }}>
                    Tan pronto como finalizó el bootcamp, comencé a aprender por mi cuenta
                    con material en online.<br /> Cambié de Java a Node.js y comencé a aprender
                    React.js junto a buenas prácticas como componentes reutilizables,<br /> Hooks,
                    Virtual DOM, State/props y más.
                  </p>
                </div>
              </>}
            </>
            : <div />}
        </div>
      </div>
    </>
  )
}

export default Profile
