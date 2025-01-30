import React from "react";
 import'../Styles/footer.css'
 import pic1 from '../assets/images/footer-payment-methods-1.png.webp'
 import { FaFacebook } from "react-icons/fa";
 import { RiTwitterXFill } from "react-icons/ri";
 import { FaLinkedin } from "react-icons/fa6";
 import { CiInstagram } from "react-icons/ci";


 function Footer(){
    return(
        
       <footer className="footer">
         <div className="footer-container">
           <div className="newsletter">
                <h2>Stay up to date</h2>
               <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
                <div className="email-box">
                    <input type="email" placeholder="Enter your email"/>
                     <button type="submit">SUBMIT</button>
                 </div>
             </div>

             {/* <!-- Right Section: Contact --> */}
             <div className="contact-info">
                 <h2>Happy to help</h2>
                 <p>1279 Thorn Street, NY</p>
                 <p>Phone: 307-549-2480</p>
                 <p>Mail: demo@gmail.com</p>
                 <div className="social-icons">
                 <FaFacebook />
                 <RiTwitterXFill />
                 <FaLinkedin />
                 <CiInstagram />
                 </div>
             </div>
         </div>

         {/* <!-- Footer Links --> */}
         <div className="footer-links">
             <div className="column">
                <h3>SHOP</h3>
                 <a href="#">Body Lotion</a>
                <a href="#">Computer Gadget</a>
                <a href="#">Electronics</a>
            </div>
            <div className="column">
                <h3>COMPANY</h3>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Help</a>
            </div>
            <div className="column">
                <h3>ABOUT</h3>
                <a href="#">Who We Are</a>
                <a href="#">Reviews</a>
                <a href="#">Contact</a>
            </div>
            <div className="column">
                <h3>ACCEPT FOR</h3>
                <div className="payment-icons">
                <img src={pic1} alt="footer"></img>
                    
                 </div>
             </div>
            </div>

            </footer>
            
    
     )
 }
 export default Footer