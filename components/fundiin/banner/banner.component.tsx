
import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import 'animate.css';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  animateOut: 'fadeOutDownBig',
  animateIn: 'fadeInRightBig',
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: true,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const Banner = (props) => {

  const {bannerList} = props;

  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='home-slider-area'>
        <div className='home-slides owl-theme'>
          <div className='homepage-banner'>
            <div style={{width:"93vw", margin: "4.5vw auto"}}>
            {display ? (
              <OwlCarousel {...options}>
                {
                  bannerList.map((item)=>  {
                      return (
                        <img src={item.image} className='single-banner-item'/>
                      )
                  })
                }
                

              </OwlCarousel>
            ) : (
              ''
            )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Banner;