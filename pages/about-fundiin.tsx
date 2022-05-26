import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import HowItWorks from '../components/Common/HowItWorks';
import Feedback from '../components/Common/Feedback';
import Countdowns from '../components/Common/Countdowns';
import Footer from '../components/_App/Footer';
import Head from 'next/head';

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  items: 7,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const About = ({}) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>

      <Head>
        <title>Fundiin - Giới thiệu về Fundiin</title>
        <meta property="og:title" content="Fundiin - Giới thiệu về Fundiin" key="title" />
        <meta
          name="description"
          content="Giới về Fundiin.vn cơ chế thanh toán vượt trội và tiện lợi dành cho khách hàng đến từ Fundiin"
        />
      </Head>
      <Navbar />
      <PageBanner pageTitle='Về Fundiin' pageName='Về Fundiin' classElement='page-title-about' />
      <section className='about-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <h2>Về Fundiin</h2>
                <span>
                  <strong>
                  Chúng tôi tự hào khi luôn hướng tới việc đem đến trải nghiệm mua sắm tốt nhất cho người tiêu dùng tại Việt Nam.
                  </strong>
                </span>
                <p>
                
                Sứ Mệnh Của Fundiin là mang đến các phương thức thanh toán hiện đại và tối ưu theo thói quen tiêu dùng của người Việt Nam, 

                Giá Trị Cốt Lõi Của Fundiin
                Phương thức thanh toán trả sau được Fundiin định hình là một hình thức thanh toán hỗ trợ khách hàng cân bằng tài chính và gia tăng trải nghiệm khách hàng. để khẳng định cam kết thì Fundiin tìm cách phá bỏ các giới hạn cơ bản:

                </p>
                
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='about-image'>
                <img src='/images/about.png' alt='image' style={{borderRadius: 15}}/>
                <a target="_blank"
                  href='https://www.youtube.com/watch?v=a04MVtMZQUs'
                  className='video-btn popup-youtube'
                >
                  <i className='bx bx-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='funfacts-area pb-70'>
        <div className='container'>
          <div className='row'>
          <Countdowns/>
          </div>
        </div>
      </section>

      {/* <section className='team-area pt-100 pb-70 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Meet Our Awesome Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team1.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>James Anderson</a>
                  </h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team2.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>Sarah Taylor</a>
                  </h3>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team3.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>Steven Smith</a>
                  </h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team4.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>John Capabel</a>
                  </h3>
                  <span>Programer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <HowItWorks /> */}

      {/* <div className='partner-area ptb-100 bg-f5f5f5'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='partner-slides owl-theme'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner1.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner2.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner3.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner4.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner5.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner6.png' alt='image' />
                  </a>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div> */}
     
      <Footer />
    </>
  );
};

export default About;
