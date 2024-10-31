import React from 'react'
import '../Stylesheets/Homebackground.css'

const HomeBackground = () => {
  return (
    <>
    <div className="yin">
        <div className="swrods">
          <div className="ring"><img src="rings.png" alt="" height={440} width={440} /></div>
          <div className="swrod"><img src="sword.png" alt="" height={360} width={360} /></div>
        </div>
        <div className="circle"></div>
    </div>
    <div className="upperlight"></div>      
    </>
  )
}

export default HomeBackground