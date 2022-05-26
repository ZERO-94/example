import Navbar from '../components/_App/Navbar';
import Banner from '../components/fundiin/banner/banner.component';
import Features from '../components/fundiin/Features';
import Deal from '../components/fundiin/Deal';
import Category from '../components/fundiin/category/category.component';
import BigDeal from '../components/fundiin/BigDeal';

import PartnerList from '../components/fundiin/partner-list/partner-list.component';
import AppDownload from '../container/AppDownload.container';
import Footer from '../components/_App/Footer';
import {getAllCategoriesAndMerchants} from '../services/api-service/category-controller';
import {getAllBanners} from '../services/api-service/banner-controller';
import { IBanner } from '../types/banner';

const Homepage = (props) => {

  const {categoryList, merchantsData, bannerList} = props;

  console.log(merchantsData);

  return (
    <>
      <Navbar categoryList={categoryList ? categoryList : []} />
      <Banner bannerList={bannerList}/>
      {/* <Features/> */}
      {/* <Category category={CategoryList} /> */}
      <div style={{margin: "3rem auto"}}>
        {
          merchantsData.map((item : {id, name, merchants}) =>  {
            return (<PartnerList key={item.id} partnerList={item.merchants} title={item.name} />)
          })
        }
        </div>
      {/* <AppDownload /> */}
      <Footer />
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
    const merchantsRes = await getAllCategoriesAndMerchants();
    if(merchantsRes?.code === 1) {
      merchantsData = merchantsRes?.data?.map((data) => {
        return {
          ...data,
          merchants : data?.merchants?.map((item) => ({...item, image: process.env.FUNDIIN_FILE_END_POINT + item.image}))
        }
      });
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

  let bannerData;
  try {
    const res = await getAllBanners();
    if(res?.code === 1) {
      bannerData = res?.banners?.map((banner : IBanner) => ({
        ...banner,
        image: process.env.FUNDIIN_FILE_END_POINT + banner.image
      }));
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      categoryList: categoryData,
      merchantsData : merchantsData,
      bannerList: bannerData
    }
  }
}

export default Homepage;
