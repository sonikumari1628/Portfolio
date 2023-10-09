import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {RiTwitterFill} from 'react-icons/ri'
import {FaDribbble} from 'react-icons/fa'
import {BsBehance} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      {/* <div class="me1">
      <img src={ME1} alt="ME1"  />
      </div> */}
      

        <a href="#" className='footer__logo'>Sonikumari A</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#tcontact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/soni-kumari-7ab9a8213/" target="blank"><BsLinkedin/></a>
            <a href="https://github.com/sonikumari1628" target="blank"><FaGithub/></a>
            <a href="https://www.facebook.com" target="blank"><FaFacebookF/></a>
            <a href="https://www.instagram.com" target="blank"><FaInstagramSquare/></a>
            <a href="https://www.youtube.com" target="blank"><BsYoutube/></a>
            <a href="https://twitter.com" target="blank"><RiTwitterFill/></a>
            {/* <a href="https://dribbble.com/" target="blank"><FaDribbble/></a>
            <a href="https://www.behance.net/7d982d60" target="blank"><BsBehance/></a> */}

        </div>
        <div className="footer__copyright">
            <small>&copy; Sonikumari A</small>
        </div>
        
    </footer>
  )
}

export default Footer