import Link from 'next/link';

import Navbar from '../../components/_App/Navbar';
import CareerFilter from '../../components/Common/CareerFilter';
import Footer from '../../components/_App/Footer';

const VerticalListingsFullWidth = () => {
  return (
    <>
      <Navbar />
      <CareerFilter />
      <section className='listings-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='listings-grid-sorting row align-items-center'>
            
          </div>

          <div className='row listings-row'>
            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img1'>
                      <img
                        src='/images/listings/listings9.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a  className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user3.jpg' alt='image' />
                          <span>James</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status'>
                        <i className='flaticon-save'></i> Open Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a >The Mad Made Grill</a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <span className='count'>(18)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$121</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-furniture-and-household'></i>{' '}
                            Restaurant
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> New York, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img2'>
                      <img
                        src='/images/listings/listings10.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user2.jpg' alt='image' />
                          <span>Sarah</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status'>
                        <i className='flaticon-save'></i> Open Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a>
                          The Beverly Hills Hotel
                        </a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bx-star'></i>
                          <span className='count'>(10)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$200</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-hotel'></i> Hotel
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> Los Angeles, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img3'>
                      <img
                        src='/images/listings/listings11.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a  className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user5.jpg' alt='image' />
                          <span>Lina</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status'>
                        <i className='flaticon-save'></i> Open Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a>
                          Blue Water Shopping City
                        </a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <span className='count'>(55)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$500</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-shopping-bags'></i> Shopping
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> Seattle, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img4'>
                      <img
                        src='/images/listings/listings12.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user1.jpg' alt='image' />
                          <span>Taylor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status status-close'>
                        <i className='flaticon-save'></i> Close Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a >
                          Chipotle Mexican Grill
                        </a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <span className='count'>(45)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$150</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-furniture-and-household'></i>{' '}
                            Restaurant
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> New York, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img6'>
                      <img
                        src='/images/listings/listings17.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user1.jpg' alt='image' />
                          <span>Taylor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status status-close'>
                        <i className='flaticon-save'></i> Close Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a>Thai Me Up Restaurant</a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <span className='count'>(45)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$150</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-furniture-and-household'></i>{' '}
                            Restaurant
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> New York, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 single-item'>
              <div className='single-listings-item'>
                <div className='row m-0'>
                  <div className='col-lg-4 col-md-4 p-0'>
                    <div className='listings-image bg-img5'>
                      <img
                        src='/images/listings/listings16.jpg'
                        alt='image'
                      />
                      <a href='#' className='bookmark-save'>
                        <i className='flaticon-heart'></i>
                      </a>
                      <a href='#' className='category'>
                        <i className='flaticon-cooking'></i>
                      </a>
                      <Link href='/single-listings'>

                      <a  className='link-btn'></a>
                      </Link>
                      <div className='author'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/user5.jpg' alt='image' />
                          <span>Lina</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-8 col-md-8 p-0'>
                    <div className='listings-content'>
                      <span className='status'>
                        <i className='flaticon-save'></i> Open Now
                      </span>
                      <h3>
                      <Link href='/single-listings'>

                        <a>
                          Skyview Shopping Complex
                        </a>
                      </Link>
                      </h3>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <span className='count'>(55)</span>
                        </div>
                        <div className='price'>
                          Start From <span>$500</span>
                        </div>
                      </div>
                      <ul className='listings-meta'>
                        <li>
                          <a href='#'>
                            <i className='flaticon-shopping-bags'></i> Shopping
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='flaticon-pin'></i> Seattle, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default VerticalListingsFullWidth;
