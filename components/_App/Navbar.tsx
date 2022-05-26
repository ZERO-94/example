import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from '../../utils/ActiveLink';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const CustomNavbar = ({categoryList}) => {

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

  return (
      <div className={sticky ? 'is-sticky navbar-area' : 'navbar-area'} style={{padding: 0, boxShadow: "0px 0.1px 10px #d4d4d4"}}>
          <nav className="navbar navbar-expand-xl navbar-light bg-light" style={{padding: "1.5rem"}}>
            <div className='container-fluid'>
                <Link href='/'>
                  <a className="navbar-brand">
                    <img src='/images/black-logo.png' alt='logo' />
                  </a>
                </Link>
              <div id="button-bar">
                <button id="button2" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">

                  </span>
                </button>
                <button id="button1" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="/about-fundiin" >Về Fundiin</a> */}
                    <a className="nav-link" aria-current="page" href='#' style={{pointerEvents: "none", color: "grey"}} >Về Fundiin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href='#' style={{pointerEvents: "none", color: "grey"}}>FAQs</a>
                  </li>
                  <li className="nav-item dropdown" style={{position: "initial"}}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Danh mục
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className='dropdownMenu'>
                        <li className='nav-item'>
                                <Link href={`/partner`} activeClassName='active'>
                                  <a className='nav-link'>Tất cả</a>
                                </Link>
                        </li>
                        {
                          categoryList.map((item) => {
                            return (
                              <li className='nav-item'>
                                <Link href={`/partner/${item.id}`} activeClassName='active'>
                                  <a className='nav-link'>{item.title}</a>
                                </Link>
                              </li>
                            )
                          })
                        }
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href='#' style={{pointerEvents: "none", color: "grey"}}>Báo chí</a>
                  </li>
                </ul>
              </div>
              <div>
            </div>

            </div>
            {/* buttons group */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                  <li className="nav-item">
                    <div className='option-item'>
                      <Link
                        href='/usercheck'
                        activeClassName='active'
                      >
                        <a  className='default-btn register-btn disable' href='#' style={{pointerEvents: "none", background: "grey !important", color: "#FFF !important", border: "1px solid grey !important"}}>
                          Đăng ký
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
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
                  </li>
                </ul>
              </div>
          </nav>
      </div>
  );
};

export default CustomNavbar;
