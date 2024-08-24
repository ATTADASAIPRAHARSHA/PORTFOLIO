import React from 'react'
import '../Stylesheets/Homebackground.css'

const HomeBackground = () => {
  return (
    <>
    <div className="yin">
        <div className="swrods">
          <div className="ring"><img src="rings.png" alt="" height={400} width={400} /></div>
          <div className="swrod"><img src="sword.png" alt="" height={310} width={310} /></div>
        </div>
        <div className="circle"></div>
    </div>
    <div className="upperlight"></div>      
    </>
  )
}

export default HomeBackground