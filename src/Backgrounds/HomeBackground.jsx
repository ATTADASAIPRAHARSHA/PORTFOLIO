import React from 'react'
import '../Stylesheets/Homebackground.css'

const HomeBackground = () => {
  return (
    <>
    <div className="yin">
        <div className="swrods">
          <div className="ring"><img src="rings.png" alt="" height={500} width={500} /></div>
          <div className="swrod"><img src="sword.png" alt="" height={380} width={380} /></div>
        </div>
        <div className="circle"></div>
    </div>
    <div className="upperlight"></div>      
    </>
  )
}

export default HomeBackground