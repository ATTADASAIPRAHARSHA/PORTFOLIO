import React from 'react'

const Techcard = (props) => {
    const styles = {
        height: props.imghei ? '30%' : '50%'
      };
  return (
    <div className="techcard" >
        <div className="teachheader">
         <h2>{props.tech}</h2>
         </div>
         <div className="techcontent">{props.techcontent}</div>
         <div className="techcover"><img style={styles} src={`${props.imgsrc}.png`} alt="" /></div>
     </div>
  )
}

export default Techcard