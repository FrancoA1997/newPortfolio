import React from 'react'
import './infoitem.css'

const Infoitem = ({ text, icon, styles }) => {
  return (
    <div key={text}>
      <p className={styles}>{text} {icon} </p>
    </div>
  )
}

export default Infoitem
