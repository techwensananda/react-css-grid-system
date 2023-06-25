import React from 'react';

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonial from '../assets/img/testimonial.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import testimonial2 from '../assets/img/testimonial2.jpg';


// import required modules
// import "./styles.css";

// import required modules

// import required modules
const Testimonial = () => {


  return (
    <>    <section className="testimonial section container">
    <div className="testimonial__container grid">
      <div className="swiper testimonial-swiper">
        
      <Swiper  loop={true}   className="">
        <SwiperSlide>  <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div></SwiperSlide>
       
      </Swiper>

        {/* <div className="swiper-wrapper">
          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src="assets/img/testimonial1.jpg"
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Lee Doe</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div>

          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div>

          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are
              always with the latest news and trends, with a very
              comfortable price and especially with the attention you
              receive, they are always attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src="assets/img/testimonial3.jpg"
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Raul Zaman</span>
                <span className="testimonial__perfil-detail"
                  >Director of a company</span
                >
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="swiper-button-next">
          <i className="bx bx-right-arrow-alt"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="bx bx-left-arrow-alt"></i>
        </div> */}
      </div>

      <div className="testimonial__images">
        <div className="testimonial__square"></div>
        <img
          src={testimonial}
          alt=""
          className="testimonial__img"
        />
      </div>
    </div>

    
  
  </section></>
  )
}

export default Testimonial