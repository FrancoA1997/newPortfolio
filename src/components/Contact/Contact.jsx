import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SendIcon from '@mui/icons-material/Send'
import DoneIcon from '@mui/icons-material/Done'
import Resume from '../../../public/Resume.pdf'
import Typewriter from 'typewriter-effect'
import React from 'react'
import './contact.css'

const Contact = () => {
  const [copied, setCopied] = React.useState(false)
  const [copied2, setCopied2] = React.useState(false)
  const email = 'francoalvarezn97@gmail.com'
  const phoneNumber = '+54 341347-8824'
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
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='section-contact-title'>
          Contact me
        </div>
        <div className='project-info-container'>
          <p className='info-contact-title'>Email Address <MailOutlineIcon style={{ marginLeft: '10px' }} className='copied tick-green' /></p>
          <p className='info-contact-item'>{email}
            <CopyToClipboard onCopy={onCopy} text={email}>
              <button className='copy-btn'>{copied ? <DoneIcon className='copied tick-green' fontSize='small' /> : <ContentCopyIcon className='copied' fontSize='small' />} </button>
            </CopyToClipboard>
          </p>
          <p className='info-contact-title'>Phone Number <PhoneAndroidIcon style={{ marginLeft: '10px', paddingBottom: '2px' }} className='copied tick-green' /></p>
          <p className='info-contact-item'>{phoneNumber}
            <CopyToClipboard onCopy={onCopy2} text={phoneNumber}>
              <button className='copy-btn'>{copied2 ? <DoneIcon className='copied tick-green' fontSize='small' /> : <ContentCopyIcon className='copied' fontSize='small' />} </button>
            </CopyToClipboard>
          </p>
          <p className='info-contact-title'>Links</p>
          <div className='social-img-container-contact'>
            <div className='social-img-contact'>
              <img src='../public/images/linkedin.png' alt='linkedin-img' />
              <p>LinkedIn</p>
            </div>
            <div className='social-img-contact'>
              <img src='../public/images/github.png' alt='github-img' />
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className='contact-social'>
          <a href={Resume} download='Resume'><button className='download-btn'><FileDownloadIcon fontSize='medium' color='white' style={{ marginRight: '5px' }} />Resume</button></a>
        </div>
      </div>
      <div className='form-section'>
        <div className='contact-mainTitle'>
          <p style={{ marginRight: '10px', color: 'white' }}>Leave me a </p>
          <div className='writer'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 120,
                strings: ['message...']
              }}
            />
          </div>
        </div>
        <form action='' className='contact-form'>
          <input type='text' className='input-form' placeholder='Full Name*' />
          <input type='text' className='input-form' placeholder='Email Address*' />
          <textarea name='' id='' cols='30' rows='10' placeholder='Your message' />
          <button className='submit-btn'><SendIcon fontSize='small' style={{ marginLeft: '10px' }} /></button>
        </form>
      </div>
    </div>

  )
}

export default Contact
