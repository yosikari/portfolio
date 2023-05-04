import React from 'react'
import './portfolio.css'

import { utilService } from '../../services/utils.js'

import IMG1 from '../../assets/portfolio1.gif'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.gif'
import IMG4 from '../../assets/portfolio4.gif'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.gif'
import IMG9 from '../../assets/portfolio9.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Anyday',
    github: 'https://github.com/yosikari/Anyday',
    demo: 'https://anyday-za1z.onrender.com/'
  },
  {
    id: 2,
    image: IMG9,
    title: 'Airbmb',
    github: 'https://github.com/yosikari/Airbmb',
    demo: 'https://airbmb-yosikari.vercel.app/'
  },
  {
    id: 3,
    image: IMG8,
    title: 'Nextflix',
    github: 'https://github.com/yosikari/NextFlix',
    demo: 'https://next-flix-ebon.vercel.app/login'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Wallet',
    github: 'https://github.com/yosikari/CryptoWallet',
    demo: 'https://yosikari.github.io/CryptoWallet/#/'
  },
  {
    id: 5,
    image: IMG7,
    title: 'Social Media UI/UX',
    github: 'https://github.com/yosikari/InstaCam',
    demo: 'https://yosikari.github.io/InstaCam/'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Notes & Mail',
    github: 'https://github.com/yosikari/Appsus',
    demo: 'https://oritleshem.github.io/appsus/'
  },
  // {
  //   id: 7,
  //   image: IMG6,
  //   title: 'View More...',
  //   github: 'https://github.com/yosikari?tab=repositories',
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'MineSweeper',
  //   github: 'https://github.com/yosikari/minesweeper.github.io',
  //   demo: 'https://yosikari.github.io/minesweeper.github.io/'
  // },
]

window.addEventListener("scroll", utilService.reveal);

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container reveal fade-bottom">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (<article className='portfolio__item' key={id}>
              <div className="portfolio__item-image__container">
                <img className='portfolio__item-image' src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                {demo && <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>}
              </div>
            </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio