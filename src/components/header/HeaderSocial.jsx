import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/yosikari/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/yosikari" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/yossi.karasik/" target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial