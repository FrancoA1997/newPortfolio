import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import LayersIcon from '@mui/icons-material/Layers'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import TranslateIcon from '@mui/icons-material/Translate'
import CloseIcon from '@mui/icons-material/Close'
import './navbarmobile.css'
const NavbarMobile = ({ setMounted, setMobileAboutOn, english, setEnglish }) => {
  const [highlighted, setHighlighted] = useState('About')
  const [isSettings, setIsSettings] = useState(false)
  const handleMount = (text) => {
    setMounted(text)
    setHighlighted(text)
    setMobileAboutOn(true)
  }
  const handleChange = () => {
    setEnglish(!english)
  }
  const handleSettings = () => {
    setIsSettings(!isSettings)
  }
  console.log(isSettings)
  return (
    <div className='navbar'>
      <div className='navbar-items'>
        {isSettings
          ? <div className='top-bar-languague-mobile'>
            <div className='select-flag-mobile' onClick={handleChange}>
              <img className='flag' src='/images/es.svg' alt='' />
              <img className='flag' src='/images/gb.svg' alt='' />
              <div className={english ? 'select-window-eng-mobile' : 'select-window-esp-mobile'} />
            </div>
            <CloseIcon fontSize='medium' onClick={() => setIsSettings(!isSettings)} style={{ marginLeft: 'auto', marginRight: '20px' }} />
            {/* eslint-disable-next-line react/jsx-indent */}
            </div>
          : <>
            <div
              onClick={() => handleMount('About')}
              className={highlighted === 'About' ? 'nav-item-selected' : 'nav-item'}
            >
              <PersonIcon fontSize='medium' />
              <span>{english ? 'Profile' : 'Perfil'}</span>
            </div>
            <div
              onClick={() => handleMount('Projects')}
              className={highlighted === 'Projects' ? 'nav-item-selected' : 'nav-item'}
            >
              <WorkHistoryIcon fontSize='medium' />
              <span>{english ? 'Projects' : 'Proyectos'}</span>
            </div>
            <div
              onClick={() => handleMount('Stack')}
              className={highlighted === 'Stack' ? 'nav-item-selected' : 'nav-item'}
            >
              <LayersIcon fontSize='medium' />
              <span>Stack</span>
            </div>
            <div
              onClick={() => handleMount('Contact')}
              className={highlighted === 'Contact' ? 'nav-item-selected' : 'nav-item'}
            >
              <ContactMailIcon fontSize='medium' />
              <span>{english ? 'Contact' : 'Contacto'}</span>
            </div>
            <div
              onClick={() => handleSettings()}
              className='nav-item'
            >
              <TranslateIcon color='warning' fontSize='medium' />
              <span>{english ? 'Language' : 'Idioma'}</span>
            </div>
            {/* eslint-disable-next-line react/jsx-indent */}
            </>}

      </div>
    </div>
  )
}

export default NavbarMobile
