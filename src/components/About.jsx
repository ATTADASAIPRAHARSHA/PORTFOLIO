import React  from 'react'
import './About.css'

const About = () => {
    const style= {
        height:'400px',
        width:'400px',
        top:'20%',
        left:'-20%'
    }
  return (
    <div className="about">
            <div className="aboutme">
                <div className="infohead">-LEGACY-</div>
                <div className="info">
                    <div className="selfpic">
                        <div className="img">
                            <img className="perimg" src="profile.jpg" alt=""></img>
                            <div style={style}  className="circle"></div>
                        </div>
                    </div>
                    <div className="content">Greetings! I am ATTADA SAI PRAHARSHA, the sovereign of Full Stack Web Development, ruling over both front-end and back-end realms with unmatched prowess. With a flick of my wrist and the mightiest of keystrokes, I conjure dynamic and responsive web applications from the digital ether, turning labyrinthine challenges into elegant, user-friendly masterpieces faster than you can say "404 error."
                        <br></br>
                        <br></br>
                        <br></br>
                        Forever on a quest for knowledge and daring exploits, I strive to deliver work that meets the exacting standards of discerning users and clients. So, grab your virtual quill and parchment, and let us create something legendary—and share a few laughs along the way!
                    </div>
                </div>
            </div>
            <div className="horizontalline"></div>
        </div>
  )
}

export default About