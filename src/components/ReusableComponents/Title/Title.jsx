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

export {
  Title,
  SectionTitle
}
