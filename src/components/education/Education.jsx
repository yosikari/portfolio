import React from 'react'
import './education.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import EDUCATION1 from '../../assets/education1.jpg'
import EDUCATION2 from '../../assets/education2.jpeg'
import EDUCATION3 from '../../assets/education3.jpeg'

const data = [
  {
    img: EDUCATION1,
    title: 'Coding Academy',
    txt: `3 Months intensive FullStack bootcamp spanning 640 hours of study, where I learned how to develop web applications with modern technologies and frameworks.`
  },
  {
    img: EDUCATION2,
    title: 'Electricity Diploma',
    txt: `Completion certificate of electrical practical engineering. Done as part of pre-military 'Atuda' studies.`
  },
  {
    img: EDUCATION3,
    title: 'Certified electrical technician',
    txt: `Completion certificate of electrical practical engineering. Done as part of pre-military 'Atuda' studies.`
  },
]

function Education() {
  return (
    <section id='education'>
      <h5>Professional Achievements</h5>
      <h2>Education</h2>

      <Swiper className="container education__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ img, title, txt }, index) => {
            return (
              <SwiperSlide className='education' key={index}>
                <div className="education__img">
                  <img src={img} alt={title} />
                </div>
                <h5>{title}</h5>
                <small className='education__txt'>
                  {txt}
                </small>
              </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Education