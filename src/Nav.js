import React,{useState, useEffect} from 'react'
import './Nav.css'
function Nav() {
    const [show, setShow] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >100){
                setShow(true)
            }else{
                setShow(false)

            }
        })
    })
    return (
       
        <div className={`nav ${show && 'nav__black'}`}>
            <img className='nav__logo'
             src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg' />
            
            <img className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
    
        </div>
    )
}

export default Nav
