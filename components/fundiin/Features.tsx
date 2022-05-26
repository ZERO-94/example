import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className='features-area ptb-100' style={{paddingTop: 0}}>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Thanh toán nhẹ nhàng với <span>Fundiin</span>
            </h2>
            
            <div className="row">
              <div className="col-6">
                <div className='mobile-only section-title pt-100'>
                    <div className='users-action'>
                      <Link href="/usercheck">
                        <a className='default-btn register'>
                        Đăng ký Fundiin
                        </a>
                      </Link>
                    </div>
                </div>
              </div>
              <div className="col-6">
                <div className='mobile-only section-title pt-100'>
                    <div className='users-action'>
                      <Link href="https://docs.google.com/forms/d/1sijSlbmK8vn6LdiOfB2Rb7PRj9fbi2RPBgkCa8HitM0/viewform?edit_requested=true">
                        <a target="_blank" className='default-btn contact active'>
                        Liên hệ hợp tác
                        </a>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
              
            
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12' style={{marginBottom: "30px"}}>
              <div className='single-features-box' style={{marginBottom: 0, height: "100%"}}>
                <div className='icon'>
                  <img className='icon-image' src='images/Icon-01.png'/>
                </div>
                <h3>3 kỳ thanh toán nhẹ nhàng</h3>
                <p>
                Chia 3 kỳ thanh toán miễn lãi thật nhanh và dễ
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12' style={{marginBottom: "30px"}}>
              <div className='single-features-box' style={{marginBottom: 0, height: "100%"}}>
                <div className='icon'>
                  <img className='icon-image' src='images/Icon-02.png'/>
                </div>
                <h3>Không phí phát sinh</h3>
                <p>
                  Không phí ẩn, không phí phạt khi thanh toán đúng hạn.
                </p>
              </div>
            </div>

            <div
              className='
              col-lg-4 col-md-6 col-sm-12
              offset-lg-0 offset-md-3 offset-sm-3
            '
            style={{marginBottom: "30px"}}
            >
              <div className='single-features-box' style={{marginBottom: 0, height: "100%"}}>
                <div className='icon'>
                  <img className='icon-image' src='images/Icon-03.png'/>
                </div>
                <h3>Duyệt tự động</h3>
                <p>
                  Hoàn thành dưới 30 giây. Hồ sơ của khách hàng đều được duyệt tự động
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='divider'></div>
      </section>
    </>
  );
};

export default Features;
