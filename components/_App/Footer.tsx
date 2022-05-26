import Link from 'next/link';
import React from 'react';
import Script from 'next/script'
const   Footer = ({bgColor}:{bgColor?:string}) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                
                <div className='logo-footer'>
                  <Link href='/'>
                    <a>
                      <img src='/images/logo-color.png' alt='logo' />
                    </a>
                  </Link>
                </div>
                
                <h3>CÔNG TY CỔ PHẦN FUNDIIN</h3>
                <ul className="info link-list">
                  <li>
                    <a>
                       Địa chi: Tầng 8, 366 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh, Việt Nam
                    </a>
                  </li>
                  <li>
                    <a>
                       <b>Giấy phép kinh doanh số</b><br/> 0315563775 do Sở KHĐT Tp.HCM cấp ngày 14/03/2019
                    </a>
                  </li>
                  <li>
                    <a>
                      <b>Thời gian hỗ trợ: </b>8h30 - 22h00
                    </a>
                  </li>
                  <li>
                    <a>
                      <b>Email:</b> lienhe@fundiin.vn
                    </a>
                  </li>
                  <li>
                    <a>
                      <b>Hỗ trợ:</b> 028 3622 1097
                    </a>
                  </li>
                  <li>
                    <a>
                      <b>Zalo:</b> 088 6290 070
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Về Fundiin</h3>

                <ul className='link-list'>
                  <li>
                    {/* <a href='/chinh-sach-chung'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Chính sách chung
                    </a>
                  </li>
                  <li>
                    {/* <a href='/press'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Truyền thông nói về Fundiin
                    </a>
                  </li>
                  <h3>Dành cho đối tác</h3>

                  <ul className='link-list'>
                    <li>
                      <a href='https://docs.google.com/forms/d/1sijSlbmK8vn6LdiOfB2Rb7PRj9fbi2RPBgkCa8HitM0/viewform?edit_requested=true'>
                        <i className='flaticon-left-chevron'></i> Liên hệ hợp tác
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>DÀNH CHO NGƯỜI TIÊU DÙNG</h3>

                <ul className='link-list'>
                  <li>
                    {/* <a href='/hop-dong-mua-ban-phieu-mua-hang-tra-cham'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Hợp đồng mua bán
                    </a>
                  </li>
                  <li>
                    {/* <a href='/privacy'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Chính sách quyền riêng tư
                    </a>
                  </li>
                  <li>
                    {/* <a href='/huong-dan-mua-hang'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li>
                    {/* <a href='/huong-dan-thanh-toan'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-left-chevron'></i> Hướng dẫn thanh toán
                      
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Kết nối với chúng tôi</h3>

                <ul className='link-list'>
                  <li>
                    {/* <a target="_blank" href='https://www.facebook.com/fundiin/'> */}
                    <a href='#' style={{pointerEvents: "none"}}>
                      <i className='flaticon-facebook'></i> Facebook
                    </a>
                  </li>
                  {/* <li>
                    <a target="_blank" href='http://online.gov.vn/Home/AppDetails/921?AspxAutoDetectCookieSupport=1'>
                      <img src="/images/logoSaleNoti.png"/>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright 2021 <span>Fundiin</span> 
            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </footer>
    
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
    __html:`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '325616966036788');
      fbq('track', 'PageView');`
  }}/>

    </>
  );
};

export default Footer;
