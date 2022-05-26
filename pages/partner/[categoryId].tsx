import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import OwlCarousel from 'react-owl-carousel3';

//components
import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';
import {  useRouter } from 'next/router';
import Router from 'next/router';
import useInView from 'react-cool-inview';

//firebase package
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import firebaseConfig from '../../services/firebase/firebase.config';
import Partner from '../../components/fundiin/partner/partner.component';
import Head from 'next/head';
import { getAllCategoriesAndMerchants, getAllMerchantsByCategory } from '../../services/api-service/category-controller';

firebase.initializeApp(firebaseConfig);
      
const PartnerPage = (props) => {
  const router = useRouter()

  const {categoryList, partnerList} = props;
  
  const {categoryId} = router.query;

  if(categoryId == undefined || categoryId == null || categoryId == '' ){
    useEffect(() => {Router.push('/')});
    return (<></>);
  };

  console.log(partnerList);

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  useEffect(() => {

    // document.getElementById('danhmuc_nav').classList.add('active')
  }, []);

  const handleOnClick = e => {
    firebase.analytics().logEvent('merchant_icon_clicked', {
      merchant_id : e.target.getAttribute('data-id'),
      merchant_name : e.target.getAttribute('data-name'),
      device_type : 'web'
    });
  }

  return (
    <>
      <Head>
          <title>{`Fundiin - ${categoryId}`}</title>
          <meta property="og:title" content={`Fundiin - ${categoryId}`} key="title" />
          <meta
          name="description"
          content={`Danh sách các Partner của Fundiin thuộc danh mục ${categoryId}`}
          />
      </Head>
      <Navbar categoryList={categoryList}/>
      <section className='listings-area ptb-100 bg-f9f9f9'  ref={observe}>
      <div className='section-title'>
            <h2>{categoryId}</h2>
            <p>
              
            </p>
          </div>
        <div className='container'>
          <div className='row'>
          {
            partnerList.map((item)=>  {
              
                return (
                  <div className='col-xl-2 col-lg-3 col-md-3'>
                    <Partner key={item.id} inView={inView} {...item} onClick={handleOnClick}/>
                  </div>
                )
            })
          }
          </div>
        </div>
      </section>

      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

export async function getServerSideProps(context) {

   //get category section
  //TODO: will replace with real category getAlls later
  let categoryData;
  let merchantsData;
  try {
    const categoryRes = await getAllCategoriesAndMerchants();
    if(categoryRes?.code == 1) {
      categoryData = categoryRes.data.map((category) => {
        return {
          title : category.name,
          id : category.name.replace(' ', '').toUpperCase()
        }
      })
    }

    //No category -> 404 page
    if(!categoryData)
      return {
        notFound: true,
      }

    //get merchantData section
    const merchantsRes = await getAllMerchantsByCategory(context.params.categoryId);
    if(merchantsRes?.code === 1) {
      merchantsData = merchantsRes?.merchants?.map((item) => ({...item, image: process.env.FUNDIIN_FILE_END_POINT + item.image}));
    }

    //No category -> 404 page
    if(!merchantsData)
      return {
        notFound: true,
      }

  } catch (err) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      categoryList: categoryData,
      partnerList: merchantsData
    },
  }
}

export default PartnerPage;

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