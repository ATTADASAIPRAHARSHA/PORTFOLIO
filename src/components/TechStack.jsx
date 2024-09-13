import React from 'react'
import '../Stylesheets/TechStack.css'
import Techcard from '../Cards/Techcard'

const TechStack = () => {
    const content = {
    html :'I Excelled in Harnessing the power of HTML5, the latest standa  structuring content on the web, to create dynamic and modern websites.',
    css : 'I Excelled in crafting responsive and visually appealing user interfaces using advanced CSS features like flexbox, grid layout, and animations.',
    js : 'I Excelled in developing dynamic and interactive web applications, adept at manipulating the DOM, handling asynchronous operations, and writing clean, modular code.',
    react :'I Excelled in building scalable and efficient front-end applications with React.js, proficient in component-based architecture, state management, and optimizing performance.',
    nextjs :'Experienced with Next.js, a React framework for building SSR and SSG web apps. Skilled in performance optimization through automatic code splitting and server-side rendering.',
    expressjs :'Proficient in Express.js, with experience in developing RESTful APIs and web applications, handling GET, POST, DELETE requests, and performing CRUD operations.',
    nodejs:'Strong knowledge of Node.js, with experience in building scalable server-side applications, handling asynchronous programming, and integrating modules for enhanced functionality.'
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