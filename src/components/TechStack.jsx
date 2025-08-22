import React from 'react'
import '../Stylesheets/TechStack.css'
import Techcard from '../Cards/Techcard'
import { Crown, Code, Zap, Database, GitBranch, Globe, Server, FileCode } from 'lucide-react';
import '../Stylesheets/TechStack.css'

const skills = [
  { name: 'HTML', icon: <FileCode className="icon" /> },
  { name: 'CSS', icon: <Globe className="icon" /> },
  { name: 'JavaScript', icon: <Zap className="icon" /> },
  { name: 'React.js', icon: <Code className="icon" /> },
  { name: 'Next.js', icon: <Crown className="icon" /> },
  { name: 'Node.js', icon: <Server className="icon" /> },
  { name: 'Express.js', icon: <Code className="icon" /> },
  { name: 'MongoDB', icon: <Database className="icon" /> },
  { name: 'MySQL', icon: <Database className="icon" /> },
  { name: 'Git & GitHub', icon: <GitBranch className="icon" /> },
  { name: 'Flask', icon: <Code className="icon" /> },
];


const TechStack = () => {

    
  return (
    <div className="techstack">
                <div className="skills-section">
                    <div className="techheader">
                        <h1>-INVENTORY-</h1>
                    </div>
                    <div className="techcontainer">
                        <div className="skills-grid">
                            {skills.map((skill) => (
                            <div key={skill.name} className="skill-card">
                                <div className="icon-wrapper">{skill.icon}</div>
                                <h3>{skill.name}</h3>
                                <div className="underline"></div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
  )
}


export default TechStack


// const TechnicalSkills = () => {
//   return (
//     <section className="skills-section">
//         <div className="techheader">
//             <h1>-INVENTORY-</h1>
//         </div>

      
//     </section>
//   );
// };

// export default TechnicalSkills;
