import React from 'react'
import './TechStack.css'
import Techcard from '../Cards/Techcard'

const TechStack = () => {
    const content = {
    html :'I Excelled in Harnessing the power of HTML5, the latest standa  structuring content on the web, to create dynamic and modern websites.',
    css : 'I Excelled in crafting responsive and visually appealing user interfaces using advanced CSS features like flexbox, grid layout, and animations.',
    js : 'I Excelled in developing dynamic and interactive web applications, adept at manipulating the DOM, handling asynchronous operations, and writing clean, modular code.',
    react :'I Excelled in building scalable and efficient front-end applications with React.js, proficient in component-based architecture, state management, and optimizing performance.',
    nextjs :'Experienced with Next.js, a React framework for building SSR and SSG web apps. Skilled in performance optimization through automatic code splitting and server-side rendering. Dedicated to staying current with Next.js advancements for efficient web development.',
    expressjs :'I am proficient in Express.js, with practical experience in developing RESTful APIs and web applications. I excel in handling GET, POST, DELETE requests, and performing CRUD operations to manage data effectively.',
    nodejs:'I have strong knowledge of Node.js, enabling me to build scalable and efficient server-side applications. My experience includes working with asynchronous programming, managing server-side logic, and integrating various modules to enhance functionality.'
    }
    
  return (
    <div className="techstack">
                <div className="technologies">
                    <div className="techheader">
                        <h1>-INVENTORY-</h1>
                    </div>
                    <div className="techcontainer">
                        <div className="tech">
                            <Techcard tech="Html" techcontent = {content.html} imgsrc='html'/>
                            <Techcard tech="Css" techcontent = {content.css} imgsrc='css'/>
                            <Techcard tech="Java-Script" techcontent = {content.js} imgsrc='javascript'/>
                            <Techcard tech="React" techcontent = {content.react} imgsrc='atom'/>
                            <Techcard tech="Next.js" techcontent = {content.nextjs} imghei='true' imgsrc='nextjs'/>
                            <Techcard tech="EXPRESS JS" techcontent = {content.expressjs}  imgsrc='expressjs'/>
                            <Techcard tech="NODE JS" techcontent = {content.nodejs}  imgsrc='nodejs'/>
                            
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default TechStack