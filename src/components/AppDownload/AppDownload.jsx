import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Dowload <br /><b>Tomato App</b></p>
      <div className="app-download-platforms">
        <br />
        <img src={assets.play_store} alt="" /> 
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload