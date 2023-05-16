/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import { Title, SectionTitle } from '../ReusableComponents/Title/Title'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LinkIcon from '@mui/icons-material/Link'
import SendIcon from '@mui/icons-material/Send'
import DoneIcon from '@mui/icons-material/Done'
import Resume from '../../../public/Resume.pdf'
import Curriculum from '../../../public/Curriculum.pdf'
import Typewriter from 'typewriter-effect'
import CircularProgress from '@mui/material/CircularProgress'
import { client } from '../../client'
import './contact.css'

const Contact = ({ english, mobileAboutOn }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { username, email, message } = formData
  const [copied, setCopied] = React.useState(false)
  const [copied2, setCopied2] = React.useState(false)
  const emailCopy = 'francoalvarezn97@gmail.com'
  const phoneNumberCopy = '+54 341347-8824'

  const onCopy = React.useCallback(() => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [])
  const onCopy2 = React.useCallback(() => {
    setCopied2(true)
    setTimeout(() => {
      setCopied2(false)
    }, 2000)
  }, [])
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='contact'>
   <div className={mobileAboutOn ? 'mountedContact contact-container' : 'unmountedContact contact-container'}>
        <SectionTitle
          text={english === true ? 'Contact me' : 'Contacto'}
          styles='section-contact-title'
        />
        <div key={english} className='contact-info-container'>
          <Title
            styles='info-contact-title'
            text={english ? 'Email Address' : 'Direccion de correo'}
            icon={<MailOutlineIcon style={{ marginLeft: '10px' }} className='copied tick-green' />}
          />
          <p className='info-contact-item'>{emailCopy}
            <CopyToClipboard onCopy={onCopy} text={emailCopy}>
              <button className='copy-btn'>{copied ? <DoneIcon className='copied tick-green' fontSize='small' /> : <ContentCopyIcon className='copied' fontSize='small' />} </button>
            </CopyToClipboard>
          </p>
          <Title
            styles='info-contact-title'
            text={english ? 'Phone Number' : 'Numero de telefono'}
            icon={<PhoneAndroidIcon style={{ marginLeft: '10px', paddingBottom: '2px' }} className='copied tick-green' />}
          />
          <p key={english} className='info-contact-item'>{phoneNumberCopy}
            <CopyToClipboard onCopy={onCopy2} text={phoneNumberCopy}>
              <button className='copy-btn'>{copied2 ? <DoneIcon className='copied tick-green' fontSize='small' /> : <ContentCopyIcon className='copied' fontSize='small' />} </button>
            </CopyToClipboard>
          </p>
          <Title
            styles='info-contact-title'
            text='Links'
            icon={<LinkIcon style={{ marginLeft: '10px' }} className='copied tick-green' />}
          />
          <div className='social-img-container-contact'>
            <div className='social-img-contact'>
            <a href='https://www.linkedin.com/in/franco-alvarez-nahuel/' target='_blank' rel='noreferrer'>
              <img src='/images/linkedin.png' alt='linkedin-img' className='social-image' />
              <p>LinkedIn</p></a>
            </div>
            <div className='social-img-contact'>
            <a href='https://github.com/FrancoA1997' target='_blank' rel='noreferrer'>
              <img src='/images/github.png' alt='github-img' className='social-image' />
              <p>GitHub</p></a>
            </div>
          </div>
        </div>
        {english === true
          ? <div className='contact-social'>
            <a target='_blank' href={Resume} download='Resume' rel='noreferrer'><button className='contact-download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Resume</button></a>
          </div>
          : <div className='contact-social'>
            <a href={Curriculum} download='Curriculum'><button className='contact-download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Curriculum</button></a>
            </div>}
      </div>
      {isFormSubmitted

        ? <div key={english} className={mobileAboutOn ? 'unmountedContact title-success' : 'mountedContact title-success'}>
       <p style={{ marginRight: '5px', color: 'white' }}>{english === true ? 'Thanks for getting in touch with me!' : 'Gracias por ponerte en contacto conmigo!'} </p>
        <div className='writer-text'>
       <p style={{ marginRight: '5px', color: 'white' }}>{english === true ? "I'll write you back" : 'Te estare escribiendo'} </p>
       <div className='writer'>
         {english === true
           ? <Typewriter
               options={{
                 autoStart: true,
                 loop: true,
                 delay: 150,
                 strings: [' as soon as possible !']
               }}
             />
           : <Typewriter
               options={{
                 autoStart: true,
                 loop: true,
                 delay: 150,
                 strings: ['lo antes posible !']
               }}
             />}
        </div>
       </div>
     </div>
        : <div key={english} className={mobileAboutOn ? 'unmountedContact form-section' : 'mountedContact form-section'}>
        <div className='contact-mainTitle'>
          <p style={{ marginRight: '10px', color: 'white' }}>{english === true ? 'Leave me a' : 'Dejame un'} </p>
          <div className='writer'>
            {english === true
              ? <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 120,
                    strings: ['message...']
                  }}
                />
              : <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 120,
                    strings: ['mensaje...']
                  }}
                />}
          </div>
        </div>
        <form action='' className='contact-form'>
          <input
            onChange={handleChangeInput}
            type='text'
            className='input-form'
            name='username'
            value={username}
            placeholder={english === true ? 'Full name*' : 'Nombre completo*'}
          />
          <input
            onChange={handleChangeInput}
            type='text'
            className='input-form'
            name='email'
            value={email}
            placeholder={english === true ? 'Email Address' : 'Direccion de correo'}
          />
          <textarea
            onChange={handleChangeInput}
            cols='30'
            rows='10'
            value={message}
            name='message'
            placeholder={english === true ? 'Your message...' : 'Tu mensaje...'}
          />
          <button
            onClick={handleSubmit}
            className='submit-btn'
          >
            {loading
              ? <CircularProgress
                  fontSize='small'
                  color='success'
                />
              : <SendIcon
                  fontSize='small'
                  style={{ marginLeft: '10px' }}
                />}

            </button>
        </form>
      </div>}
    </div>

  )
}

export default Contact
