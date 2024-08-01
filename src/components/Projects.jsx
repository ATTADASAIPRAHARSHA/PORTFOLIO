import React , {useState ,useRef} from 'react'
import './Projects.css'
import projectdata from '../data.json'

const Projects = () => {
  const [Project, setProject] = useState(null)
  const ref = useRef();

  const handleprojectdis = (projec)=>{
      setProject({...projec});
      if(ref.current)
      {
        ref.current.style.opacity = '1';
        ref.current.style.visibility = 'visible';
      }
  }
  const handledisplayclose =()=>{
    if(ref.current)
    {
      ref.current.style.opacity = '0'
      ref.current.style.visibility = 'hidden'
    }
    
  }
 

  return (<>
  <div className="headings">-Behold My Creations-</div>
  <div className='projectscontainer'>
  {
    projectdata.map((projec,index)=>(<div key={index}>
                <div className="projecttitle">{projec.title}</div>
            <div className="project1" onClick={()=>handleprojectdis(projec)} >
              <div>
                <div className="projectimg"><img className='pi'  src={`${projec.image}.png`}  alt="" /></div>
              </div>  
              <div className='dont'>
              <div className="prodesc">{projec.Desc}</div>
              </div>  
            </div>
            </div>
    ))
  }
      
    </div>
      {Project && <div ref={ref} className="projectdisplay">
        
          <div className="sec">
            <div className="imgpro"><img src={`${Project.image}.png`} height={300} width={500} alt="" /></div>
            <div className="protit">{Project.title}</div>
          </div>
          <div className="sec2">
            <div className="prodesc">{Project.Desc}</div>
            <div className="keyheader">Key Features :</div>
            <div className="prokey">{
            Project.key.map((item,index)=>(
              <div className='key' key={index}><span style={{color:'black',fontWeight:'500'}}>{index+1}.</span>  {item}</div>
            ))
            }</div>
            <div className="keyheader">Technologies used :</div>
            <div className="prokey">{
            Project.Stacks.map((item,index)=>(
              <div className='key' key={index}><span style={{color:'black',fontWeight:'500'}}>{index+1}.</span> {item}</div>
            ))
            }</div>
          </div>
          <div className="close" onClick={handledisplayclose}><img src="swords.png" width={30} height={30} alt="" /></div>
        </div>
         } 
    </>
  )
}

export default Projects