import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CategoryHot from '../components/Common/CategoryHot';
import Category from '../components/Common/Category';
import Footer from '../components/_App/Footer';
import { useEffect } from 'react';
import {CategoryAPI} from '../services/api-service/category.api';
import Head from 'next/head'

const Categories = (props) => {

  const {categoryList} = props;

  useEffect(() => {
    //fix the style to make all the components have the same size
    let listDanhmuc = document.getElementsByClassName('danhmuc') as HTMLCollectionOf<HTMLElement>;
    let maxHeight = 160;
    for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
      if(listDanhmuc[danhmuc].offsetHeight > maxHeight && listDanhmuc[danhmuc].offsetHeight < 200){
        maxHeight = listDanhmuc[danhmuc].offsetHeight;
        console.log(`maxHeight`, maxHeight)
      }
    }
    for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
      let text = maxHeight + "px !important;";
      listDanhmuc[danhmuc].setAttribute("style", "height: "+text);
    }
    
  })
  return (
    <>
      <Head>
        <title>Fundiin - Danh mục</title>
        <meta property="og:title" content="Fundiin - Danh mục" key="title" />
        <meta
          name="description"
          content="Danh sách danh mục các đối tác hợp tác với dịch vụ của Fundiin"
        />
      </Head>
      <Navbar />
      <PageBanner pageTitle='Danh mục sản phẩm' pageName='Danh mục' classElement='page-title-category'/>
      <CategoryHot categoryItems={categoryList}/>
      {/* <Category /> */}
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  const categoryAPI = new CategoryAPI();
  const categoryData = await categoryAPI.get('/category');

  return {
    props: {
      categoryList: categoryData,
    },
  }
}

export default Categories;
