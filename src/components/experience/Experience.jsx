import React from 'react'
import './experience.css'
import {
  SiCss3, SiJavascript, SiHtml5, SiVuedotjs, SiAngular, SiReact,
  SiNextdotjs, SiRedux, SiTypescript, SiSass, SiNodedotjs, SiMongodb,
  SiExpress, SiFastapi, SiMysql, SiPhp, SiFirebase, SiPython, SiRsocket,
  SiPostman
} from 'react-icons/si'
import { utilService } from '../../services/utils.js'

window.addEventListener("scroll", utilService.reveal);

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend reveal fade-left">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS 3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVuedotjs className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon' />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRedux className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiSass className='experience__details-icon' />
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend reveal fade-right">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiNodedotjs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon bigger' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFastapi className='experience__details-icon' />
              <div>
                <h4>Rest API</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon bigger' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostman className='experience__details-icon' />
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFirebase className='experience__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRsocket className='experience__details-icon' />
              <div>
                <h4>Socket.io</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icon bigger' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>)
}

export default Experience