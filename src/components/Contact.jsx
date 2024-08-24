import React from 'react'
import '../Stylesheets/Contact.css'
import Resume from './Resume'

const Contact = () => {
  return (
    <>
        <Resume/>
        <div className="contactsection">
        <div className="con">
        Most Honorable Guest,
        <br /><br />
        By royal summons, we humbly request the honor of your presence at a distinguished assembly. In this noble gathering, we shall engage in conversations of great import and shared wisdom. Your esteemed presence will bestow an air of grandeur and refinement upon our meeting.
        </div>
        <div className="line"><img src="./background2.png" width={250} height={250} alt="" /></div>
        <form action="https://formspree.io/f/movavggy" method="POST" >
                <label className='username'>
                    Your USERNAME:
                    <input type="text" name="name"></input>
                </label>
                <label className='email'>
                    Your email:
                    <input type="email" name="email"></input>
                </label>
                <label className='message'>
                Your Note:
                    <textarea  name="message" ></textarea>
                </label>
                <div><button type="submit">Send Forth</button></div>
                </form>
        </div>
    
      
    </>
  )
}

export default Contact