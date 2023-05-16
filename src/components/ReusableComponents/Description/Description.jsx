/* eslint-disable no-lone-blocks */
import React from 'react'
import './description.css'

const Description = ({ showMore, setShowMore, text, english, styles, btnStyles }) => {
  return (
    <div key={text} className={styles}>
      {text.map((m, idx) => (
        <p key={idx} className='desc-styles'>{m}</p>
      ))}

      {english
        ? <button className={btnStyles} onClick={() => setShowMore(!showMore)}> {showMore ? 'Hide' : 'Show'}  Studies</button>
        : <button className={btnStyles} onClick={() => setShowMore(!showMore)}> {showMore ? 'Ocultar' : 'Mostrar'} Estudios</button>}

    </div>
  )
}

const Studies = ({ date, title, text, titleStyles, dateStyles, degree, showMore }) => {
  return (
    <div key={text} className={showMore ? 'studies studies-animation-on' : 'studies studies-animation-off'}>
      <p className={titleStyles}>{title}</p>
      <p className='degree'>{degree}</p>
      <span className={dateStyles}>{date}</span>
      {text.map((m, idx) => (
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
