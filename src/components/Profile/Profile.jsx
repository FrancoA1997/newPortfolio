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
import { urlFor } from '../../client'
import './profile.css'

const Profile = ({ english, studies, profile, mobileAboutOn }) => {
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
  return (
    <>
      <div className='profile'>
        <div className={mobileAboutOn ? 'mountedProfile profile-container' : 'unmountedProfile profile-container'}>
          <SectionTitle styles='title-profile' text={english === true ? 'About me' : 'Sobre mi'} />
          <img className='profile-img' src='pepe' alt='profile_img' />
          <div className='profile-info'>
            <Title styles='info-title-profile' text={english ? 'Name' : 'Nombre'} />
            <Infoitem english={english} text={english ? 'Alvarez Franco' : 'Franco Alvarez'} icon={<PanToolIcon fontSize='medium' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Location' : 'Locacion'} />
            <Infoitem english={english} text={english ? 'Cordoba, Argentina ' : 'Cordoba, Argentina'} icon={<LocationOnIcon fontSize='medium' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Role' : 'Rol'} />
            <Infoitem english={english} text={english ? 'Full Stack Web Developer ' : 'Full Stack Web Developer'} icon={<ConstructionIcon fontSize='medium' className='info-icon' />} styles='info-item-profile' />
            <Title styles='info-title-profile' text={english ? 'Time Coding' : 'Tiempo programando'} />
            <Infoitem english={english} text={english ? '2+ Years' : '2+ Años'} icon={<MoreTimeIcon fontSize='medium' className='info-icon' />} styles='info-item-profile' />
          </div>
          {english
            ? <div className='profile-social'>
              <a href={Resume} download='Resume'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Resume</button></a>
            </div>
            : <div className='profile-social'>
              <a href={Curriculum} download='Curriculum'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Curriculum</button></a>
            </div>}
        </div>

        <div className={mobileAboutOn ? 'unmountedProfile description-section' : 'mountedProfile description-section'}>
          <Title styles='head-profile-title' text={english ? profile[0]?.welcome : profile[0]?.bienvenido} />
          <Description english={english} setShowMore={setShowMore} showMore={showMore} text={english ? profile[0]?.description : profile[0]?.descripcion} styles='description' btnStyles='show-more-btn' />

          <Studies
            text={english ? studies[0].study1 : studies[0].estudio1}
            date={english ? 'Duration: from Jul/2021 to Jul/2022' : 'Duracion: Desde Jul/2021 Hasta Jul/2022'}
            showMore={showMore}
            title='Egg Coorporation Bootcamp'
            titleStyles='company-title'
            dateStyles='date-title'
            degree={<><span style={{ fontSize: 'clamp(9px, 1.7vh, 15px)', fontWeight: '500' }}>{english ? 'Bootcamp degree:' : 'Titulo del Bootcamp'} </span><span style={{ marginLeft: '5px', fontSize: 'clamp(9px, 1.7vh, 14px)', fontWeight: '600', color: '#3E9F3D' }}>Full Stack Web Developer</span></>}
          />
          <Studies
            text={english ? studies[0].study2 : studies[0].estudio2}
            date={english ? 'Duration: July/2022 till now' : 'Duracion: Desde Jul/2022 hasta la fecha'}
            title={english ? 'Self-Taught' : 'Auto-Didacta'}
            showMore={showMore}
            titleStyles='company-title'
            dateStyles='date-title'
          />

        </div>
      </div>
    </>
  )
}

export default Profile
