import Link from 'next/link';
import Countdown from 'react-countdown';
import Footer from '../../components/_App/Footer';
import Navbar from '../../components/_App/Navbar';

const ComingSoong = () => {
  return (
    <>
    <Navbar />
      <div className='coming-soon-area'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='coming-soon-content' style={{maxWidth: "1000px"}}>
              <img src="/images/thank-you-letter.png" alt="thank you letter"/>
              {/* <Link href='/'>
                <a className='logo'>
                  <img src='/images/black-logo.png' alt='image' />
                </a>
              </Link>
              <h2>We Are Launching Soon</h2>

              <form className='newsletter-form' data-toggle='validator'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='input-newsletter'
                    placeholder='Enter your email'
                    name='EMAIL'
                    required
                    autoComplete='off'
                  />
                  <span className='label-title'>
                    <i className='bx bx-envelope'></i>
                  </span>
                </div>
                <button type='submit' className='default-btn'>
                  Subscribe
                </button>
                <div id='validator-newsletter' className='form-result'></div>
                <p>
                  If you would like to be notified when your app is live, Please
                  subscribe to our mailing list.
                </p>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoong;
