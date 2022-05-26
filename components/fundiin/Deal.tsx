import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 10,
  nav: true,
  mouseDrag: false,
  items: 10,
  dots: true,
  autoplay: false,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 5,
    },
  },
};
// const optionsTwo = {
//   loop: true,
//   margin: 0,
//   nav: true,
//   mouseDrag: false,
//   items: 1,
//   dots: false,
//   autoplay: false,
//   smartSpeed: 500,

//   navText: [
//     "<i className='flaticon-left-chevron'></i>",
//     "<i className='flaticon-right-chevron'></i>",
//   ],
// };

const Deal = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(true);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(true);
  }, []);

  return (
    <>
      <section className='listings-area ptb-40 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Top Deal</h2>
          </div>

          <div className='listings-slides owl-theme'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    
                  </div>

                  <div className='listings-content'>
                    
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Đồng hồ - Thời trang
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Giảm giá 100%</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      Giảm giá 100% khi mua hàng tại Curnon
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      
                      <div className='price'>
                        Hết hạn <span>20/12/2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='divider2'></div>
      </section>
    </>
  );
};

export default Deal;
