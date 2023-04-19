/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import './profile.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Curriculum from '../../../public/Resume.pdf'
const ProfileEsp = () => {
  const [showMore, setShowMore] = useState(false)
  setTimeout(() => {
    setShowMore(true)
  }, 2000)
  const welcomeMessage = 'Bienvenido a mi portfolio!'
  return (
    <>
      <div className='profile'>
        <div className='profile-container'>
          <div className='title'>
            Sobre mi
          </div>
          <img className='profile-img' src='../public/images/dummy-img.png' alt='profile_img' />
          <div className='profile-info'>
            <p className='info-title'>Nombre</p>
            <p className='info-item'>Franco Alvarez </p>
            <p className='info-title'>Locacion</p>
            <p className='info-item'>Cordoba, Argentina 📍 </p>
            <p className='info-title'>Rol</p>
            <p className='info-item'>Full Stack Web Developer </p>
            <p className='info-title'>Tiempo programando</p>
            <p className='info-item'>2 Años 📅 </p>
          </div>
          <div className='profile-social'>
            <a href={Curriculum} download='Curriculum'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Curriculum</button></a>
          </div>
        </div>
        <div className='description-section'>
          <div className='head-title'> {welcomeMessage}</div>
          <div className='description'>
            <p>Soy un desarrollador altamente motivado y autodidacta que busca iniciar una carrera construyendo aplicaciones y servicios web.
              <br />He estado construyendo y desplegando aplicaciones y servicios web durante más de 2 años.<br />
              Mi próximo objetivo es encontrar mi primer trabajo y seguir creciendo como desarrollador, <br /> pero esta vez junto a un grupo de desarrolladores experimentados.
            </p>
            <button className='show-more-btn' onClick={() => setShowMore(!showMore)}> {showMore ? 'Esconder' : 'Mostrar'} Estudios</button>
          </div>

          {showMore
            ? <>
              <div className='description-more'>
                <p className='ed-title'>Egg Coorporation Bootcamp <span style={{ fontSize: '15px', fontWeight: '500', marginLeft: '325px' }}>Titulo: </span><span style={{ marginLeft: '5px', fontSize: '14px', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></p>
                <span className='date-title'>Duracion: Desde Jul/2021 Hasta Jul/2022</span>
                <p style={{ marginTop: '10px' }}> Al final de este bootcamp, fui capaz de construir mi propio
                  sitio web con Java (Spring-boot como framework),<br /> y MySQL como backend, también
                  aprendí los conceptos básicos de HTML, CSS y Bootstrap para el Frontend.
                </p>
              </div>
              <div className='description-more-2'>
                <p className='ed-title'>Auto-Didacta</p>
                <span className='date-title'>Duracion: Desde July/2022 hasta la fecha</span>
                <p style={{ marginTop: '10px' }}>
                  Tan pronto como finalizó el bootcamp, comencé a aprender por mi cuenta
                  con material en online.<br /> Cambié de Java a Node.js y comencé a aprender
                  React.js junto a buenas prácticas como componentes reutilizables,<br /> Hooks,
                  Virtual DOM, State/props y más.
                </p>
              </div>
            </>
            : <div />}
        </div>
      </div>
    </>
  )
}

export default ProfileEsp
