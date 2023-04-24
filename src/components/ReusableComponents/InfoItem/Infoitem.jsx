import React from 'react'
import './infoitem.css'

const Infoitem = ({ text, icon, style }) => {
  return (
    <div key={text}>
      <p className={style}>{text} {icon} </p>
    </div>
  )
}

export default Infoitem
