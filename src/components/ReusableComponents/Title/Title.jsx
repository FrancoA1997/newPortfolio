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

const StackTitle = ({ text, styles }) => {
  return (
    <div key={text} className={styles}>
      <p>{text[0]}</p>
      <p style={{ color: '#4E9F3D', paddingLeft: '10px' }}>{text[1]}</p>
    </div>
  )
}

export {
  Title,
  StackTitle,
  SectionTitle
}
