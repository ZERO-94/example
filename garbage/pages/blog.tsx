import Link from 'next/link';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
const SingleBlog = (props) => { 
  return (
    <>
    
      <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                <Link href='/single-blog'>
                  <a className='d-block'>
                    <img src='/images/blog/blog4.jpg' alt='image' />
                  </a>
                  </Link>
                </div>

                <div className='post-content'>
                  <ul className='post-meta d-flex align-items-center'>
                    <li>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user1.jpg' alt='image' />
                        <span>
                          <a href='#'>Taylor</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className='flaticon-calendar'></i> Aug 7, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href='/single-blog'>
                      10 Types of Social Proof & What Makes Them Effective
                    </Link>
                  </h3>
                  <a href='#' className='link-btn'>
                    <i className='flaticon-right-arrow'></i>
                  </a>
                </div>
              </div>
            </div>
    </>
  )
}
const Blog2 = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Blog' pageName='Blog' classElement='page-title-press'/>
      <section className='blog-area bg-f9f9f9 ptb-100'>
        <div className='container'>
          <div className='row'>
            

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog2;
