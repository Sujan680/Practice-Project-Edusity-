
import './contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { useState } from 'react';
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "725e46c7-24ca-4e8c-99ae-87a631cbbec5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ratione, quasi incidunt culpa dicta explicabo accusamus neque nemo iusto tempora blanditiis architecto esse quod. Quos nulla eligendi fuga ducimus atque.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@GreatStack.dev </li>
                <li><img src={phone_icon} alt="" /> +12 345-453-123 </li>
                <li>  <img src={location_icon} alt="" />56 Massachesetts Avem Cambridge <br /> MA 34565, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text"  name='name' placeholder='Enter Your name' required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your phone number' />

                <label>Write Your Message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact