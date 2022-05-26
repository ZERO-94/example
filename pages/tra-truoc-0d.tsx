import React from 'react';
import Head from 'next/head';
const CommercialPage = () => {
    return (
      <>
        <Head>
          <meta property="og:title" content="Shopping trả trước 0đ" key="title" />
          <meta
            name="description"
            content="Shopping trả trước 0đ cùng Fundiin ngay hôm nay"
          />
          <link href="/css/commercial-page.css" rel="stylesheet"></link>
        </Head>
        <div className='page-container'>
          <div className='container-1'>
            <HeadContainer/>
          </div>
          <div className='container-2'>
            <FundiinFeatures/>
          </div>
          <div className='container-3'>
            <FundiinTutorial/>
          </div>
          <div className='container-4'>
            <FundiinRules/>
          </div>
          <div className='container-5'>
            <FundiinMerchants/>
          </div>
          <div className='container-6'>
            <FundiinContact/>
          </div>
        </div>
      </>
    );
}

const HeadContainer = () => {
  return (
    <>
      <div className="container-fluid" style={{minHeight: "100vh", background: "#24CDF3", padding: "1rem !important", paddingTop: "2rem !important"}}>
        <div className='logo-container'>
          <img className='logo' src="/assets/commercial/fundiin-white-logo.svg"></img>
        </div>
        <div className='row' style={{marginTop: "3rem"}}>
          <div className='content-container col-8' style={{padding: 0}}>
            <div className='content' style={{background: "#FFFFFF"}}>
              <div>
                <h1 className="header" style={{display: "inline",}}>SHOPPING </h1><h1 className="header mobile text-highlight">TRẢ TRƯỚC 0Đ</h1>
                <h1 className="header" >CÙNG FUNDIIN NGAY HÔM NAY</h1>
              </div>
              <div className='tag'>
                <span className='tag-text'>{"# Áp dụng đối với đơn hàng < 500K"}</span>
              </div>
              <p>Mua sắm ngay qua app Fundiin với các thương hiệu hàng đầu</p>
              <p>và hàng trăm local-brand được yêu thích tại Việt Nam.</p> 
              <br/>
              <p>Shopping với Fundiin, mọi lúc mọi nơi !</p>
            </div>
            <div style={{display: "flex", width: "100vw"}}>
            <div className='QR-code-container'>
              <p style={{ color: "#FFFFFF", marginBottom: "0.5rem", fontWeight: 600}}>Tải app Fundiin miễn phí trên điện thoại của bạn</p>
              <img className='QR-code' src="/assets/commercial/fundiin-app-QR-code.svg"></img>
            </div>
            <div className='mockup-container mobile'>
                <img className='mockup' src="/assets/commercial/mockup-fundiin-app.svg" style={{position: "relative", padding: "3rem", right: "-2rem"}}></img>
              </div>
              </div>
          </div>
          <div className='mockup-container col-4 desktop'>
            <img className='mockup' src="/assets/commercial/mockup-fundiin-app.svg" style={{position: "relative", right: "0"}}></img>
          </div>
        </div>
        <div className='scroll-down' style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
          <img src="/assets/commercial/scroll-down-white-icon.svg" style={{width: '50px'}}></img>
        </div>
      </div>
    </>
  );
}

const FundiinFeatures = () => {
  return (
    <>
      <div className="container-fluid" style={{minHeight: "100vh", background: "#FFFFFF"}}>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div className="header-feature">
            <h1 style={{margin: 0, fontSize: "5.7rem", fontFamily: "iCielFester",display: "inline",}}>TẠI SAO CHỌN </h1><h1 style={{margin: 0, fontSize: "5.7rem", fontFamily: "iCielFester", display: "inline", color: "#24CDF3"}}>FUNDIIN</h1><h1 style={{margin: 0, fontSize: "5.7rem", fontFamily: "iCielFester",display: "inline",}}>?</h1>
          </div>
          <div style={{textAlign: "center"}}><p style={{fontSize: "1.8rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline"}}>Là giải pháp thanh toán hoàn toàn mới giúp người tiêu dùng mua sắm dễ dàng với chi phí </p><p style={{fontSize: "1.8rem", color: "#000000", marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', fontWeight: "bold", display: "inline"}}>trả trước 0đ</p><p style={{fontSize: "1.8rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem',  display: "inline"}}>, nhận hàng sử dụng trước và thanh toán sản phẩm sau 30 ngày.</p></div>
        </div>
        <div className='features'>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/free-icon.svg' style={{marginBottom: '15px'}}></img>
            </div>
            <div>
              <h3>Miễn phí</h3>
              <p>Miễn lãi.</p>
              <p>Không phí ẩn.</p>
              <p>Không chênh lệch giá.</p>
            </div>
          </div>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/fast-icon.svg' style={{marginBottom: '15px'}}></img>
            </div>
            <div>
              <h3>Nhanh chóng</h3>
              <p>Duyệt trong 5 giây với</p>
              <p>chỉ 1 hình CMND/CCCD.</p>
            </div>
          </div>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/easy-icon.svg'></img>
            </div>
            <div>
              <h3>Dễ dàng</h3>
              <p>Nhận hàng trước.</p>
              <p>Trả sau 30 ngày.</p>
              <p>Chi tiêu thông minh.</p>
            </div>
          </div>
        </div>
        <div className="callout-container" style={{background: "#FFE173"}}>
            <div className='icon-container' style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
              <img src="/assets/commercial/devices-icon.svg" style={{width: '85%'}}></img>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 2rem"}}>
              <h1 style={{margin: 0, fontSize: "2.5rem", fontFamily: "iCielFester",display: "inline"}}>THANH TOÁN QUA MỌI THIẾT BỊ</h1>
              <p style={{fontSize: "1.8rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', textAlign: "center"}}>{"(Không cần tải App)"}</p>
            </div>
          </div>
          <div className='scroll-down' style={{display: 'flex', justifyContent: 'center', marginTop: "3rem"}}>
          <img src="/assets/commercial/scroll-down-icon.svg" style={{width: '50px'}}></img>
        </div>
      </div>
    </>
  );
}

const FundiinTutorial = () => {
  return (
    <>
      <div className="container-fluid" style={{minHeight: "100vh", background: "#FFDEEC"}}>
        <div style={{display: "flex", padding: "0.5rem 0rem"}}>
          <div className='header-tutorial header-container'>
            <h1 style={{display: "inline"}}>DÙNG </h1><h1 style={{display: "inline", color: "#24CDF3"}}> FUNDIIN </h1><h1 style={{display: "inline"}}> THẾ NÀO ?</h1>
          </div>
        </div>
        <div className='tutorial row'>
          <div className='feature-1 col-12 col-md-6' style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
            <div style={{display: "flex", flexDirection: "column", padding: "1.5rem 0"}}>
              <div className='tutorial-content'><p style={{fontSize: "2.4rem", color: "#000000", marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline", fontWeight: "bold"}}>{'Bước 1. '}</p><p style={{fontSize: "2.4rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline"}}>{'Chọn sản phẩm trên trang chủ cửa hàng bạn yêu thích. ( ĐH < 500K )'}</p></div>
            </div>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/buy-now-icon.png'></img>
            </div>
          </div>
          <div className='feature-2 col-12 col-md-6' style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
            <div style={{display: "flex", flexDirection: "column", padding: "1.5rem 0"}}>
              <div className='tutorial-content'><p style={{fontSize: "2.4rem", color: "#000000", marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline", fontWeight: "bold"}}>{'Bước 2. '}</p><p style={{fontSize: "2.4rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline"}}>{'Ở trang thanh toán, chọn Fundiin làm phương thức.'}</p></div>
            </div>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/choose-fundiin-icon.png'></img>
            </div>
          </div>
          </div>
          <div className='tutorial row'>
          <div className='feature-3 col-12 col-md-6' style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
            <div style={{display: "flex", flexDirection: "column", padding: "1.5rem 0"}}>
              <div className='tutorial-content'><p style={{fontSize: "2.4rem", color: "#000000", marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline", fontWeight: "bold"}}>{'Bước 3. '}</p><p style={{fontSize: "2.4rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline"}}>{'Đăng ký tài khoản, chụp mặt trước CMND để định danh.'}</p></div>
            </div>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/identify-card-icon.png'></img>
            </div>
          </div>
          <div className='feature-4 col-12 col-md-6' style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
            <div style={{display: "flex", flexDirection: "column", padding: "1.5rem 0"}}>
              <div className='tutorial-content'><p style={{fontSize: "2.4rem", color: "#000000", marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline", fontWeight: "bold"}}>{'Bước 4. '}</p><p style={{fontSize: "2.4rem", color: "#000000", fontWeight: 500, marginBottom: 0, fontFamily: 'League Spartan', lineHeight: '2rem', display: "inline"}}>{'Nhận hàng, sử dụng và thanh toán cho Fundiin sau 30 ngày miễn lãi.'}</p></div>
            </div>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/receive-order-icon.png'></img>
            </div>
          </div>
        </div>
        <div className='scroll-down' style={{display: 'flex', justifyContent: 'center', padding: "1rem 0", marginTop: "1rem"}}>
          <img src="/assets/commercial/scroll-down-icon.svg" style={{width: '50px'}}></img>
        </div>
      </div>
    </>
  );
}

const FundiinRules = () => {
  return (
    <>
      <div className="container-fluid rules" style={{minHeight: "100vh", background: "#FFFFFF"}}>
        <div style={{display: "flex", padding: "0.5rem 0rem"}}>
          <div className='header-tutorial header-container'>
            <h1 style={{display: "inline"}}>DÙNG </h1><h1 style={{display: "inline", color: "#24CDF3"}}> FUNDIIN </h1><h1 style={{display: "inline"}}> THẾ NÀO ?</h1>
          </div>
        </div>
        <div className='features'>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img className="id-card-icon" src='/assets/commercial/id-card-icon.svg'></img>
            </div>
            <div>
              <p>CMND/CCCD</p>
              <p>bản gốc</p>
            </div>
          </div>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/selfie-icon.svg' ></img>
            </div>
            <div>
              <p>Số điện thoại</p>
              <p>đăng ký chính chủ</p>
            </div>
          </div>
          <div className='feature'>
            <div className='icon-container' style={{margin: "1rem auto"}}>
              <img src='/assets/commercial/over-18-icon.svg' ></img>
            </div>
            <div>
              <p>Công dân Việt Nam</p>
              <p>trên 18 tuổi</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='text-container col-12 col-lg-4' style={{maxWidth: '470px'}}>
            <div className='header-tutorial' style={{textAlign: 'start', marginBottom: '1.5rem'}}>
              <h1 style={{fontFamily: 'League Spartan'}}>Trải nghiệm của</h1>
              <h1 style={{fontFamily: 'League Spartan'}}>khách hàng mua</h1>
              <h1 style={{fontFamily: 'League Spartan'}}>sắm qua Fundiin</h1>
            </div>
            <p style={{fontSize: '1.5rem', color: '#000000', marginBottom: 0}}>Chúng tôi luôn tự hào là đơn vị mua sắm trả sau mang đến trải nghiệm tiện lợi và tốt nhất cho người tiêu dùng tại Việt Nam.</p>
          </div>
          <div className='comment-container col-12 col-lg-8' style={{padding: '0rem 3rem', display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
            <img src='/assets/commercial/comment-img.png' style={{width: '110%'}}></img>
          </div>
        </div>
        <div className='scroll-down' style={{display: 'flex', justifyContent: 'center', padding: "1rem 0", marginTop: "1rem"}}>
          <img src="/assets/commercial/scroll-down-icon.svg" style={{width: '50px'}}></img>
        </div>
      </div>
    </>
  );
}

const FundiinMerchants = () => {
  return (
    <>
      <div className="container-fluid" style={{minHeight: "100vh", background: "#FFE173"}}>
        <div className='row'>
          <div className='text-container col-12 col-lg-6 merchants-content' style={{paddingTop: "2.7rem"}}>
            <div className='header-tutorial header-container' style={{textAlign: 'start', marginBottom: '1.5rem'}}>
              <h1 style={{fontSize: '4.4rem'}}>Bạn đã sẵn sàng</h1>
              <h1 style={{fontSize: '4.4rem'}}>shopping với</h1>
              <h1 style={{fontSize: '4.4rem'}}>Fundiin?</h1>
            </div>
            <p>Mua sắm mọi thương hiệu bạn yêu thích.</p>
            <p> Đa dạng ngành hàng.</p> 
            <br/>
            <p>Trả sau 30 ngày miễn lãi.</p>
          </div>
          <div className='comment-container col-12 col-lg-6' style={{padding: '0rem', display: 'flex', alignItems: 'center'}}>
            <div className='row'>
              <div className='col' style={{padding: "0 3rem"}}>
                <div className='row'>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/unilever-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/tinistore-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/lug-icon.svg"></img>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/marc-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/dhc-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/urban-icon.svg"></img>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/rechic-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/pigeon-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/daysaki-icon.svg"></img>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/baa-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/sablanca-icon.svg"></img>
                  </div>
                  <div className='col-4 merchant-icon'>
                    <img src="/assets/commercial/merchant-icon/zune-icon.svg"></img>
                  </div>
                </div>
                <div className='row merchants-content' style={{ justifyContent: "end", margin: "1rem 0"}}>
                  <p>Và +200 thương hiệu khác</p>
                </div>
              </div>

            </div>
            
          </div>
          
        </div>
        <div className='scroll-down' style={{display: 'flex', justifyContent: 'center', padding: "1rem 0", marginTop: "1rem"}}>
          <img src="/assets/commercial/scroll-down-icon.svg" style={{width: '50px'}}></img>
        </div>
      </div>
    </>
  );
}

const FundiinContact = () => {
  return (
    <>
      <div className="container-fluid" style={{minHeight: "100vh", background: "#24CDF3"}}>
        <div className='row'>
          <div className='text-container col-12 col-xl-8 merchants-content' style={{marginTop: 0}}>
            <div className="fundiin-square-icon">
              <img src="/assets/commercial/fundiin-square-logo.svg"></img>
            </div>
            <div className='header-tutorial header-container' style={{textAlign: 'start', marginBottom: '0.5rem'}}>
              <h1 style={{fontSize: '3.5rem', color: "#FFF"}}>Thanh toán định kỳ</h1>
            </div>
            <p style={{color: "#FFF", marginBottom: '0.5rem', fontWeight: 400}}>Theo dõi và thanh toán các kỳ qua ứng dụng </p>
            <div className='mixed-text'><p style={{color: "#FFF", fontWeight: 400, display: 'inline'}}>Fundiin tại </p><p style={{color: "#FFF", display: 'inline', fontWeight: 'bold'}}>App Store </p><p style={{color: "#FFF", display: 'inline', fontWeight: 400}}>và </p><p style={{color: "#FFF", display: 'inline', fontWeight: 'bold'}}>Google Play</p> </div>
            <div className='contact-container col-12 col-lg-8' style={{padding: '0rem', display: 'flex', alignItems: 'center'}}>
            <div className='row' style={{marginTop: "2rem", marginLeft: "0.5rem"}}>
            <div className="w-100"></div>
              <div className='col contact-info' style={{padding: "0 "}}>
                <div className='row'>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/globe-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>fundiin.vn</p>
                    </div>
                  </div>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/mail-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>support@fundiin.vn</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/facebook-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>Fundiin</p>
                    </div>
                  </div>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/clock-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>T2-CN: 08:30 - 22:00</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/phone-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>(028) 36221097</p>
                    </div>
                  </div>
                  <div className='col-12 col-xl-6 merchant-icon' style={{padding: 0}}>
                    <div className="contact-holder" style={{display: 'flex', alignItems: 'center'}}>
                      <img src="/assets/commercial/contact/zalo-icon.svg"></img>
                      <p style={{color: "#FFF", fontWeight: 600, fontSize: '2rem', marginLeft: "0.8rem"}}>088 6290 070</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='comment-container col-12 col-xl-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src="/assets/commercial/double-phone-mockup.svg" style={{marginTop: "2rem"}}></img>
          </div>
        </div>
      </div>
    </>
  );
}


export default CommercialPage;