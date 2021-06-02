import React from 'react'
import './Footer.css'
import { FaGithub , FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa";
function Footer() {
    return (  
        <div className="footer">
            <div className="footer__top">
                        <div className="footer__left" >
                            <img src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg'/>
                        </div>

                        <div className="footer__right" style={{'color':'white'}}>
                        <FaFacebookF  size='30' className='footer__right__item'/>
                        <FaLinkedinIn  size='30' className='footer__right__item'/>
                        <FaInstagram size='30' className='footer__right__item'/>
                        <FaGithub size='30' className='footer__right__item'/>

                        </div>
                     </div>
                  <div className="footer__buttom">
                       <p>&copy; Build by <span>Ahmed Tajalsir</span></p>
                  </div>
        </div>
    )
}

export default Footer
