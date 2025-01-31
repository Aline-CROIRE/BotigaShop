
import React, { useState, useEffect } from 'react';
import '../styles/contact.css';

const Contact = () => {
      const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


      
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!firstName.trim()) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email.trim()) {
        formErrors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
        isValid = false;
    }

    if (!message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        //Form is valid, submission logic would go here
        alert("Form has been submitted");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setErrors({})
      } 
  };

    
      return (
        <div className={`component ${isMobile ? 'mobile' : ''}`}>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="contact-container">
      <div className="map-container">
          <iframe
              title="Embedded Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.7585087093186!2d-0.09219138414155317!3d51.47915847173121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760357682efdc5%3A0x9873df614c17be35!2sLondon%20SE1%209PD%2C%20UK!5e0!3m2!1sen!2sus!4v1717513725752!5m2!1sen!2sus"
              width="100%"
              height="400px"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div className="contact-content">
          <div className="contact-section leave-message">
              <h2>Leave Us a Message</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='name-input'>
                    <label>Name <span style={{color: "red"}}>*</span></label>
                    <div className="name-fields">
                        <input type="text" placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      <input type="text" placeholder="Last" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>
                  <div className='email-input'>
                      <label>Email <span style={{color: "red"}}>*</span></label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                
                  <div className='message-input'>
                      <label>Comment or Message</label>
                    <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                      {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>
            
              <button type="submit" className='submit-button'>SUBMIT</button>
            </form>
          </div>

        <div className="contact-section our-store">
          <h2>Our Store</h2>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
            <p>PHONE: <br />+1 212 244 2681</p>
          <p>E-MAIL: <br /> office@example.org</p>
        </div>

        <div className="contact-section store-hours">
          <h2>Store Hours</h2>
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
    </div>
        </div>
      );
    };
   

    


export default Contact;