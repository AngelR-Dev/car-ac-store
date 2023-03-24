import React from 'react'
import Iframe from 'react-iframe'

const GoogleMap = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.5632734108865!2d-99.14707082843228!3d19.406937530438764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff47510c8293%3A0xaff2913cb2a6cf5f!2sAutoclimas%20peter!5e0!3m2!1ses-419!2smx!4v1679652976435!5m2!1ses-419!2smx"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
    </div>
  )
}

export default GoogleMap