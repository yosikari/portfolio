import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'



const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit porro architecto omnis? Est, facere quas quaerat voluptatum enim assumenda debitis illo itaque. Suscipit, est!`
  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit porro architecto omnis? Est, facere quas quaerat voluptatum enim assumenda debitis illo itaque. Suscipit, est!`
  },
  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit porro architecto omnis? Est, facere quas quaerat voluptatum enim assumenda debitis illo itaque. Suscipit, est!`
  },
  {
    avatar: AVATAR4,
    name: 'Nana Ama McBrown',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit porro architecto omnis? Est, facere quas quaerat voluptatum enim assumenda debitis illo itaque. Suscipit, est!`
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials