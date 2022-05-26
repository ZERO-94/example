import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from '../../utils/ActiveLink';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const category = [
  {
    id: "BRANDHOT",
    title: "Brand hot"
  },
  {
    id: "SUCKHOEVALAMDEP",
    title: "Sức khỏe & làm đẹp"
  },
  {
    id: "THOITRANGNU",
    title: "Thời trang nữ"
  },
  {
    id: "THOITRANGNAM",
    title: "Thời trang nam"
  },
  {
    id: "PHUKIENTHOITRANG",
    title: "Phụ kiện thời trang"
  },
  {
    id: "NHACUAVADOISONG",
    title: "Nhà cửa & đời sống"
  },
  {
    id: "GIAODUC",
    title: "Giáo dục"
  },
  {
    id: "THETHAOVADULICH",
    title: "Thể thao & Du lịch"
  },
  {
    id: "MEVABE",
    title: "Mẹ & Bé"
  },
  {
    id: "KHAC",
    title: "Khác"
  }
]

const Navbar = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();
     // your async action is here
      return () => {
        abortController.abort();
      }
    }, []);

  return (
    <>
      <div className={displayAuth ? 'body_overlay open' : 'body_overlay'}></div>
      <div className={sticky ? 'is-sticky navbar-area' : 'navbar-area'}>
        <div className='miran-responsive-nav'>
          <div className='container'>
            <div className='miran-responsive-menu'>
              <div
                onClick={() => toggleMenu()}
                className='hamburger-menu hamburger-two'
              >
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='/images/black-logo.png' alt='logo' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav'}>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light'>
            <Link href='/'>
              <a className='navbar-brand'>
                <img src='/images/black-logo.png' alt='logo' />
              </a>
            </Link>
              <div className='collapse navbar-collapse mean-menu'>
               
              {/* <form className='navbar-search-box search-box-one'>
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    type='text'
                    className='input-search'
                    placeholder='What are you looking for?'
                  />
                </form> */}

                <ul className='navbar-nav'>
                  
                  <li className='nav-item'>
                    <Link href='/about-fundiin' activeClassName='active'>
                      <a className='nav-link' >
                        Về Fundiin
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/faq' activeClassName='active'>
                      <a className='nav-link' >
                        FAQs
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' style={{position: "initial"}}>
                    <Link href='#' onClick={() => {return;}} activeClassName='active'>
                      <a className='nav-link' id="danhmuc_nav" >
                        Danh mục
                      </a>
                    </Link>
                    {/* this is for desktop */}
                    <ul id="for-desktop"className='dropdown-menu' style={{width: "100vw", display: "flex",flexWrap: "wrap", padding: "1rem 2rem"}}>
                      <li className='nav-item' style={{width: "20%"}}>
                              <Link href={`/partner`} activeClassName='active'>
                                <a className='nav-link'>Tất cả</a>
                              </Link>
                      </li>
                      {
                        category.map((item) => {
                          return (
                            <li className='nav-item' style={{width: "20%"}}>
                              <Link href={`/partner/${item.id}`} activeClassName='active'>
                                <a className='nav-link'>{item.title}</a>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <Link href='/press' activeClassName='active'>
                      <a className='nav-link' >
                        Báo chí
                      </a>
                    </Link>
                  </li>

                </ul>

                <div className='others-option d-flex align-items-center'>
                  <div className='option-item users-action'>
                    <Link href="/usercheck">
                      <a className='default-btn register button-one'>
                      Đăng ký
                      </a>
                    </Link>
                  </div>

                  <div className='option-item'>
                    <Link
                      href='https://docs.google.com/forms/d/1sijSlbmK8vn6LdiOfB2Rb7PRj9fbi2RPBgkCa8HitM0/viewform?edit_requested=true'
                      activeClassName='active'>
                      <a className='default-btn button-one' target="_blank">
                         Liên hệ để hợp tác
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='others-option-for-responsive'>
          <div className='container'>
            <div className='dot-menu' onClick={toggleMiniAuth}>
              <div className='inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={displayMiniAuth ? 'container active' : 'container'}>
              <div className='option-inner'>
                <div className='others-option'>
                  

                  <div className='option-item mobile-register'>
                    <Link href="/usercheck">
                      <span>
                        Đăng ký
                      </span>
                    </Link>
                  </div>
                   {/* <div className='option-item'>

                   <form className='navbar-search-box'>
                      <label>
                        <i className='flaticon-search'></i>
                      </label>
                      <input
                        type='text'
                        className='input-search'
                        placeholder='What are you looking for?'
                      />
                    </form>
                   </div> */}
                    
                  <div className='option-item'>
                    <Link
                      href='https://docs.google.com/forms/d/1sijSlbmK8vn6LdiOfB2Rb7PRj9fbi2RPBgkCa8HitM0/viewform?edit_requested=true'
                      activeClassName='active'
                    >
                      <a  className='default-btn' target='_blank' >
                        Liên hệ để hợp tác
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal ------- */}
      <div
        className={
          displayAuth
            ? 'modal loginRegisterModal show'
            : 'modal loginRegisterModal'
        }
        id='loginRegisterModal'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs>
              <button type='button' className='close' onClick={toggleAuth}>
                <i className='bx bx-x'></i>
              </button>

              <ul className='nav nav-tabs' id='myTab'>
                <TabList>
                  <Tab className="nav-item">
                   
                      <a className='nav-link' id='login-tab'>
                        Login
                      </a>
                   
                  </Tab>
                  <Tab className="nav-item">
                   
                      <a className='nav-link' id='register-tab'>
                        Register
                      </a>
                   
                  </Tab>
                </TabList>
              </ul>

              <div className='tab-content' id='myTabContent'>
                <TabPanel>
                  <div className='tab-pane fade show active' id='login'>
                    <div className='miran-login'>
                      <div className='login-with-account'>
                        <span>Login with</span>
                        <ul>
                          <li>
                            <a href='#' className='facebook'>
                              <i className='bx bxl-facebook'></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href='#' className='twitter'>
                              <i className='bx bxl-twitter'></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className='sub-title'>
                        <span>Or login with</span>
                      </span>
                      <form>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Username or Email'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Password'
                            className='form-control'
                          />
                        </div>

                        <button type='submit'>Register Now</button>
                      </form>
                      <span className='dont-account'>
                        Don't have an account? <a href='#'>Register Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tab-pane' id='register'>
                    <div className='miran-register'>
                      <div className='register-with-account'>
                        <span>Register with</span>
                        <ul>
                          <li>
                            <a href='#' className='facebook'>
                              <i className='bx bxl-facebook'></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href='#' className='twitter'>
                              <i className='bx bxl-twitter'></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className='sub-title'>
                        <span>Or Register with</span>
                      </span>
                      <form>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Username'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='email'
                            placeholder='Email'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Password'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Confirm Password'
                            className='form-control'
                          />
                        </div>

                        <button type='submit'>Register Now</button>
                      </form>
                      <span className='already-account'>
                        Already have an account? <a href='#'>Login Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
