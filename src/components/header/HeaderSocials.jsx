import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/soni-kumari-7ab9a8213/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/sonikumari1628" target="blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials