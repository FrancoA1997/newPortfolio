import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import LayersIcon from '@mui/icons-material/Layers'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import './navbarmobile.css'
const NavbarMobile = () => {
  return (
    <div className='navbar'>
      <div className='navbar-items'>
        <div className='nav-item-selected'>
          <PersonIcon fontSize='medium' />
          <span>Profile</span>
        </div>
        <div className='nav-item'>
          <WorkHistoryIcon fontSize='medium' />
          <span>Projects</span>
        </div>
        <div className='nav-item'>
          <LayersIcon fontSize='medium' />
          <span>Stack</span>
        </div>
        <div className='nav-item'>
          <ContactMailIcon fontSize='medium' />
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
