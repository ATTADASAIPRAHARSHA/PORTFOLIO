import React from 'react'
import './Contact.css'
import Resume from './Resume'

const Contact = () => {
  return (
    <>
        <Resume/>
    <div className="contactheader"></div>
    <div className="contactsection">
        <div className="divcover">
        <div className="section1">
            <div>
        Most Honorable Guest,
        <br></br>
        <br></br>
        By royal summons, we humbly request the honor of your presence at a distinguished assembly. In this noble gathering, we shall engage in conversations of great import and shared wisdom. Your esteemed presence will bestow an air of grandeur and refinement upon our meeting.
        </div>
        </div>
        {/* <img className='cover' src="cover.png" alt="" /> */}
        </div>

        <div className="section2">
            {/* <div className="royal">
                <div>A ROYAL TOAST AWAITS !</div>
                <img src="royal.jpeg" height={100} width={100} alt="" />
            </div> */}
        <form action="https://formspree.io/f/movavggy" method="POST" >
                <img src="letter.png" alt="" className="letter" />
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
    </div>
      
    </>
  )
}

export default Contact