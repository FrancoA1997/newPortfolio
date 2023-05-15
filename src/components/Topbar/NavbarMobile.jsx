import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import LayersIcon from '@mui/icons-material/Layers'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import './navbarmobile.css'
const NavbarMobile = ({ setMounted, setMobileAboutOn }) => {
  const [highlighted, setHighlighted] = useState('About')

  const handleMount = (text) => {
    setMounted(text)
    setHighlighted(text)
    setMobileAboutOn(true)
  }
  return (
    <div className='navbar'>
      <div className='navbar-items'>
        <div
          onClick={() => handleMount('About')}
          className={highlighted === 'About' ? 'nav-item-selected' : 'nav-item'}
        >
          <PersonIcon fontSize='medium' />
          <span>Profile</span>
        </div>
        <div
          onClick={() => handleMount('Projects')}
          className={highlighted === 'Projects' ? 'nav-item-selected' : 'nav-item'}
        >
          <WorkHistoryIcon fontSize='medium' />
          <span>Projects</span>
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
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
