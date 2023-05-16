import React from 'react'
import './title.css'
const Title = ({ text, icon, styles }) => {
  return (
    <div key={text}>
      <p className={styles}>{text} {icon} </p>
    </div>
  )
}
const SectionTitle = ({ text, styles }) => {
  return (
    <div key={text} className={styles}>
      <p>{text}</p>
    </div>
  )
}
const ProjectTitle = ({ text, styles, isSwitching }) => {
  return (
    <div className={styles}>
      <p className={isSwitching ? 'project-title-animation-off' : 'project-title-animation-on'}>{text}</p>
    </div>
  )
}

const StackTitle = ({ text, styles }) => {
  return (
    <div key={text} className={styles}>
      <p>{text[0]}</p>
      <p style={{ color: '#4E9F3D', paddingLeft: '5px' }}>{text[1]}</p>
    </div>
  )
}

export {
  Title,
  StackTitle,
  SectionTitle,
  ProjectTitle
}
