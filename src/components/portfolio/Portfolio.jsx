import React from 'react'
import './portfolio.css'

import { utilService } from '../../services/utils.js'

import IMG1 from '../../assets/portfolio1.gif'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.gif'
import IMG4 from '../../assets/portfolio4.gif'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpeg'

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
    image: IMG2,
    title: 'Notes & Mail',
    github: 'https://github.com/yosikari/Appsus',
    demo: 'https://github.com/yosikari/Appsus'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Meme Generator',
    github: 'https://github.com/yosikari/MemeGenerator',
    demo: 'https://yosikari.github.io/MemeGenerator/'
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
    image: IMG5,
    title: 'MineSweeper',
    github: 'https://github.com/yosikari/minesweeper.github.io',
    demo: 'https://yosikari.github.io/minesweeper.github.io/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'View More...',
    github: 'https://github.com/yosikari?tab=repositories',
    // demo: 'https://github.com'
  },
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