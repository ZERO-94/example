
import { useState, useEffect, useLayoutEffect } from 'react';

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
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

import { useRouter } from 'next/router';
import { IBanner } from '../../types/banner';
const Banner = ({bannerList}) => {

  const [bannerHeight, setBannerHeight] = useState()
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='home-slider-area'>
        <div className='home-slides owl-theme'>
          <div className='homepage-banner'>
              <div style={{width: "93vw", margin: "4.5vw auto"}}>
              {display ? (
                <OwlCarousel {...options}>
                  {
                    bannerList.map((banner : IBanner, key)=>  {
                        const bannerStyle = {
                          cursor: "pointer",
                          borderRadius: "20px",
                          width: "98%",
                          marginRight: "0 !important"
                        }
                        return (
                          <img 
                            key={key}
                            alt={banner.content}
                            src={banner.image} 
                            className='single-banner-item' 
                            style={ banner.redirectUrl ? bannerStyle : {borderRadius: "20px"}}
                            onClick={() => {
                              if(banner.redirectUrl) router.push(banner.redirectUrl)
                              else return;
                            }}
                          />
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
