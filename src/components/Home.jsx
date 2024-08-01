import React, { useEffect } from 'react'
import './Home.css'
import HomeBackground from '../Backgrounds/HomeBackground'
import About from './About.jsx'
import TechStack from './TechStack.jsx'
import Projects from './Projects.jsx'
import Educational from './Educational.jsx'
import Contact from './Contact.jsx'


const Home = () => {
    
    useEffect(() => {
        const event = (event)=>{
                const x = event.clientX;
                const width = window.innerWidth;
                const img = document.querySelector('.ring')
                if (img) {
                    if (x > (width/2+50)) {
                        img.style.transition = 'transform 4500s linear';
                        img.style.transform = 'rotate(36000deg)';
                    } else if (x < (width/2-50)) {
                        img.style.transition = 'transform 4500s linear';
                        img.style.transform = 'rotate(-36000deg)';
                    }
                    else
                    {
                      img.style.transform = 'rotate(0deg)';
                    }
                }
            }
        
        document.addEventListener('mousemove',event)
        return () => {
            document.removeEventListener('mousemove', event);
        };
    }, [])
    
    
  return (
    <>
    <HomeBackground/>
    <div className="Homecontainer">
    <div className="name">ATTADA&nbsp; SAI &nbsp;PRAHARSHA</div>
    </div>
    <section id="about">
        <About />
      </section>
      <section id='techstack'>
        <TechStack/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='education'>
        <Educational/>
      </section>
      
      <section id='contact'>
        <Contact/>
      </section>
    </>
  )
}

export default Home