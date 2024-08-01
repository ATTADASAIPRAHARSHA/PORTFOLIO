import React from 'react'
import './Educational.css'
import Educationcard from '../Cards/Educationcard'
import edudata from '../Education.json'

const Educational = () => {




  return (
    <>
      <div className="education">
                <div className="eduheader">
                    <h1 className='headings'>-Educational Saga-</h1>
                </div>
                <div className="institute">
                  <Educationcard data={edudata.btech} />
                  <Educationcard data={edudata.intermediate} />
                  <Educationcard data={edudata['high_school']} />
                  <Educationcard data={edudata.school} />
                    


                </div>
            </div>
    </>
  )
}

export default Educational