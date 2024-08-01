import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot">Sovereign's Elite Network</div>
        <div className="break"></div>
        <div className="social">
          <a href="https://github.com/ATTADASAIPRAHARSHA"><img src="github.png" width={50} height={50} alt="" /></a>
          <a href="https://www.linkedin.com/in/sai-praharsha-attada-132971284/"><img src="linkedin.png" width={50} height={50} alt="" /></a>
          <a href="https://www.instagram.com/saipraharsha.a/"><img src="instagram.png" width={50} height={50} alt="" /></a>
          <a href="https://www.facebook.com/saipraharhsa.sai.3"><img src="facebook.png" width={50} height={50} alt="" /></a>
          <a href="https://x.com/ATTADA_SAI_2004"><img src="twitter.png" width={50} height={50} alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default Footer