import { React } from 'react'
import './topbar.css'

const Topbar = ({ setEnglish, english, setMounted }) => {
  // eslint-disable-next-line react/jsx-key
  const handleChange = () => {
    setEnglish(!english)
  }
  const handleMount = (text) => {
    setMounted(text)
  }
  return (
    <div className='top-bar'>
      <div className='top-bar-icons'>
        <div className='dummy-btn' />
        <div className='dummy-btn' />
        <div className='dummy-btn' />
      </div>
      <div className='top-bar-links'>
        <div className='select-flag' onClick={handleChange}>
          <img className='flag' src='../public/images/es.svg' alt='' />
          <img className='flag' src='../public/images/gb.svg' alt='' />
          <div className={english ? 'select-window-eng' : 'select-window-esp'} />
        </div>
        <span className='p-tag' onClick={() => handleMount('About')}>{english === true ? 'Profile' : 'Perfil'}</span>
        <span className='p-tag' onClick={() => handleMount('Projects')}>{english === true ? 'Projects' : 'Proyectos'}</span>
        <span className='p-tag' onClick={() => handleMount('Stack')}>Stack</span>
        <span className='p-tag' onClick={() => handleMount('Contact')}>{english === true ? 'Contact me' : 'Contact'}</span>
      </div>
    </div>
  )
}

export default Topbar
