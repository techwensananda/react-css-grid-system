import React from 'react';
import new1 from '../assets/img/new1.png';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";


const Service = () => {
  return (
    <>   <section className="new section container" id="new">
    <h2 className="section__title">New Arrivals</h2>

    <div className="new__container">
      <div className="swiper new-swiper">
       <div className="swiper-wrapper">
       <Swiper
      loop={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Navigation]}
        pagination={{ clickable: true, el: '.swiper-pagination' }}

        
navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
        className="mySwiper "
      >
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={new1} alt="" className="new__img" />

            <div className="new__data">
              <h3 className="new__title">Longines rose</h3>
              <span className="new__price">$980</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
          </article>
        </SwiperSlide>
      

      
       
      </Swiper>
      <div className="swiper-controler">
          <div className="swiper-button-next next__button-swiper">
           <span className="controller__icon"> <BsArrowRightCircleFill/></span>
          </div>
          <div className="swiper-button-prev prev__button-swiper">
          <span className="controller__icon">     <BsArrowLeftCircleFill/> </span>
          </div>
        
     
        </div>
       </div>
      </div>
    </div>
  </section>
  
  
  
  
  

   
 

  
  </>
  )
}

export default Service