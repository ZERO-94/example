import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';
import { getDanhmuc, TitleList, getMerchant } from '../index';
import Merchant from '../../merchant-data/processAllMerchantList';
import {  useRouter } from 'next/router';
import useInView from 'react-cool-inview';
const Danhmuc = getDanhmuc(TitleList);
const DanhmucFilter = getMerchant(Merchant, Danhmuc);


const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const SinglePartner = (props) => {
  let inView = props.inView;
  let website = '#';
  if(props.website != undefined){
    website = props.website;
  }
  
  return (
    <>
    <div className='col-xl-2 col-lg-3 col-md-3' style={{padding: "1rem"}}>
    <div className='single-listings-box' style={{borderRadius: '20px', marginBottom: '10px'}}>
                    
      {inView && <Link href={website}><a target="_blank" ><img className="partner-image" src={props.image} alt='Partner' style={{borderRadius: '20px'}}/></a></Link>}
    </div>
    </div>
    </>
  )
}


      
const PartnerList = () => { 
  
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);

    // document.getElementById('danhmuc_nav').classList.add('active')
  }, []);

  const allData = Merchant;

  return (
    <>
      <Navbar />

      <section className='listings-area pb-100 pt-50 bg-f9f9f9'  ref={observe}>
      <nav aria-label="breadcrumb" className='container bg-f9f9f9'>
        <ol className="breadcrumb bg-f9f9f9" style={{fontSize: '1rem', padding: 0}}>
          <li className="breadcrumb-item"><Link href="/"><a style={{color: '#5CB0F7'}}>Trang chủ</a></Link></li>
          <li className="breadcrumb-item active" aria-current="page">Tất cả</li>
        </ol>
        <hr className="mb-3" style={{width: '8rem', margin: 0}}/>
      </nav>
      
      <div className='section-title' style={{marginBottom: '2rem'}}>
            <h1>Tất cả</h1>
            <p>
              
            </p>
          </div>
        <div className='container'>
          <div className='row'>
          {
            allData.map((dm)=>  {
              
                return (<SinglePartner inView={inView} name={dm.name} image={dm.image} website={dm.website} />)
            })
          }
          </div>
        </div>
      </section>

      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

export default PartnerList;
