import React from 'react'
import './infoitem.css'

const Infoitem = ({ text, icon, styles }) => {
  return (
    <div key={text}>
      <p className={styles}>{text} {icon} </p>
    </div>
  )
}
const InfoProjectitem = ({ text, isSwitching, styles }) => {
  return (
    <div>
      <p className={isSwitching ? `${styles} animation-off` : `${styles} project-description animation-on`}>{text}</p>
    </div>
  )
}

const StackItem = ({ stackedText, styles, icon }) => {
  return (
    <div key={stackedText} className='skills-container'>
      {stackedText.map((m, idx) => (
        <div key={idx} className={styles}>
          <p>{m}</p>
          <span>{icon}</span>
        </div>
      ))}
    </div>
  )
}

export {
  Infoitem,
  StackItem,
  InfoProjectitem
}
