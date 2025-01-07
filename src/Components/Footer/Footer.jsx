import React from 'react'
import footerLogo from '../../images/footerLogo.ff0bc941e45bc87aaa1f.png'
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoCallSharp,IoLogoTwitter } from "react-icons/io5";
import { FaInstagram, FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <footer>

      <div className='footer-cont'>
        <div className='footer-logo'>
          <img src={footerLogo} alt="" />
        </div>

        <div className='footer-text'>
          <div className='footer-line1'>
            <p>FM 88.6</p>
            <p><a href="/" target='_blank'>Contact Us</a></p>
            <p>Offices</p>
          </div>
          <div className='footer-line2'>
            <p><IoMdMail className='footer-text-icon'/><a href="/" target='_blank'>info@qtp.gob.pk </a></p>
            <p><MdLocationPin className='footer-text-icon'/> <a href="/" target='_blank'>Quetta</a></p>
             <a href="/" target='_blank'><IoCallSharp className='footer-text-icon'/> +92-819213316</a>
          </div>
          <p>© 2023 Balochistan Traffic Police - Quetta Traffic Police Services</p>
        </div>

        <div className='footer-icon-cont'>
          <a href="/" target='_blank'><FaFacebook className='footer-icon'/></a>
          <a href="/" target='_blank'><IoLogoTwitter className='footer-icon'/></a>
          <a href="/" target='_blank'><FaInstagram className='footer-icon'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer