import React from 'react'

const Educationcard = (props) => {
  return (
    <>
                    <div className="eduplace">
                        <div className="cardheader">
                            <div className="course"><span>{props.data.course}</span>
                                <div className="tag">{props.data.tag}
                                </div>
                            </div>
                            <div className="duration">{props.data.duration}</div>
                        </div>
                        <div className="educontent">
                        {props.data.content}
                            <div className="institutelink">
                                <a href={props.data.link} target="_blank"><img className="institutelink" src="building.png" alt=""></img></a>
                            </div>
                        </div>
                    </div>
      
    </>
  )
}

export default Educationcard