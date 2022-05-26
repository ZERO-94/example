import Link from 'next/link';
import useInView from "react-cool-inview";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

import jQuery from 'jquery'

//firebase package
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import firebaseConfig from '../../../services/firebase/firebase.config';
import Partner from '../partner/partner.component';

firebase.initializeApp(firebaseConfig);
// //tracking use
// const firebaseConfig = {
//   apiKey: "AIzaSyAjabgzOAF5OXFegmRBiV3OLVWDvd7TQPU",
//   authDomain: "fundiin.firebaseapp.com",
//   databaseURL: "https://fundiin.firebaseio.com",
//   projectId: "fundiin",
//   storageBucket: "fundiin.appspot.com",
//   messagingSenderId: "1015683961286",
//   appId: "1:1015683961286:web:3fa89e4c140a313a",
//   measurementId: "G-RWHN3MN7DE"
// };

// const SinglePartner = (props) => {
//   let inView = props.inView;
//   let website = '#';
//   if(props.website != undefined){
//     website = props.website;
//   }
//   let id = -1;
//   if(props.id != undefined){
//     id = props.id;
//   }
//   let name = "";
//   if(props.name != undefined){
//     name = props.name;
//   }
//   const merchantOnclick = e => {
//     firebase.analytics().logEvent('merchant_icon_clicked', {
//       merchant_id : e.target.getAttribute('data-id'),
//       merchant_name : e.target.getAttribute('data-name'),
//       device_type : 'web'
//     });
//     console.log(`Merchant clicked`)
//   }
//   return (
//     <>
//     <div className='single-listings-box'>

//       {inView && <Link href={website}><a onClick={merchantOnclick} target="_blank"  className='merchant_click' data-id={id}><img  data-id={id} data-name={name} className="partner-image" src={props.image} alt='Partner' /></a></Link>}
//     </div>
//     </>
//   )
// }

const options = {
  loop: false,
  margin: 20,
  nav: true,
  mouseDrag: false,
  items: 5,
  dots: true,
  autoplay: false,
  autoplayTimeout:7000,
  smartSpeed: 50,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 2,
      slideBy: 2
    },
    576: {
      items: 2,
      slideBy: 2
    },
    768: {
      items: 2,
      slideBy: 2
    },
    992: {
      items: 6,
      slideBy: 6
    },
  },
}

const PartnerList = (props) => {
  jQuery;
  const $ = jQuery;
  const partnerList = props.partnerList;
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(true);
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
 
  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(true);
    if(typeof window != undefined){
      firebase.analytics()
    }
    
  });

  const handleOnClick = e => {
    firebase.analytics().logEvent('merchant_icon_clicked', {
      merchant_id : e.target.getAttribute('data-id'),
      merchant_name : e.target.getAttribute('data-name'),
      device_type : 'web'
    });
  }

  return (
    <>
      <section className='destinations-area pt-40 pb-70' style={{paddingTop : '30px'}}>
        <div className='container'>
          <div className='section-title' style={{margin: 0, display: 'flex', maxWidth: '100%', marginBottom: '1.5rem'}}>
            <div style={{flex: 1}}>
              <h2 style={{textAlign: 'start', margin: 0}}>{props.title}</h2>
            </div>
            <div style={{display: 'flex', alignItems: 'end'}}>
              <Link href={`/partner/${props.id}`}><a style={{fontSize: '1rem'}}>Xem thêm</a></Link>
            </div>
          </div>

          <div className='listings-slides owl-theme'  ref={observe}>
            
            {display ? (
              <OwlCarousel {...options}>
                {partnerList.map(item => {
                  
                  // return <SinglePartner image={x.image} website={x.website} inView={inView} id={x.id} name={x.name}/>
                  return <Partner {...item} inView={inView} onClick={handleOnClick}/>
                  })}
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerList;
