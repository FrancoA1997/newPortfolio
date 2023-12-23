/* eslint-disable no-lone-blocks */
import React from 'react'
import './description.css'

const Description = ({ text, english, styles, btnStyles }) => {
  return (
    <div key={text} className={styles}>
      {text?.map((m, idx) => (
        <p key={idx} className='desc-styles'>{m}</p>
      ))}
    </div>
  )
}

const Studies = ({ date, title, text, titleStyles, dateStyles, degree }) => {
  return (
    <div key={text} className='studies studies-animation-on'>
      <p className={titleStyles}>{title}</p>
      <p className='degree'>{degree}</p>
      <span className={dateStyles}>{date}</span>
      {text?.map((m, idx) => (
        <p key={idx} style={{ marginTop: '3px' }}>
          {m}
        </p>
      ))}

    </div>
  )
}

export {
  Description,
  Studies
}
