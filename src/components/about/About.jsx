import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { SiVisualstudiocode } from 'react-icons/si'
import { FaAward } from 'react-icons/fa'
import { VscArchive } from 'react-icons/vsc'

import { utilService } from '../../services/utils.js'

window.addEventListener("scroll", utilService.reveal);

function About() {
  return <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className="about__me reveal fade-left">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards reveal fade-right">

          <article className='about__card'>
            <SiVisualstudiocode className='about__icon' />
            <h5>Coding Academy</h5>
            <small>Fullstack Developer</small>
          </article>

          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Practical Engineer</h5>
            <small>Electricity & PLC</small>
          </article>

          <article className='about__card'>
            <VscArchive className='about__icon' />
            <h5>Projects</h5>
            <small>10+ <br /> Complied</small>
          </article>
        </div>

        <p className='reveal fade-left'>I'm a web developer, I recently finished a full-stack boot camp (Coding Academy), and I'm looking for
          my first opportunity. I have worked for 8 years in electricity where I got my first glams in programming
          while programming controllers. I'm highly motivated and passionate, I'm a fast learner and I work well in
          a team and independently.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

  </section >
}

export default About