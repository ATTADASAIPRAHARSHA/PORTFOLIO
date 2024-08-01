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
                    <div className="content">Greetings! I am ATTADA SAI PRAHARSHA, a sovereign in the realm of Full Stack Web Development and coding, with a formidable command over both front-end and back-end technologies. With hands-on experience in constructing dynamic and responsive web applications, I revel in the art of transforming complex challenges into elegant, user-friendly solutions. Through my participation in numerous hackathons and prestigious internships, including a distinguished tenure at Motion Cut, I have perfected my skills in crafting e-commerce websites, landing pages, and a multitude of web projects.
                        <br></br>
                        <br></br>
                        <br></br>
                    Ever vigilant in my pursuit of knowledge and new challenges, I endeavor to deliver work of the highest quality, meeting the exacting standards of users and clients alike. Let us join forces and create something truly extraordinary together!
                    </div>
                </div>
            </div>
            <div className="horizontalline"></div>
        </div>
  )
}

export default About