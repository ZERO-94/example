import Link from 'next/link';

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import EventBox from '../components/fundiin/EventBox';

//TODO: remove these when add api call
import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';

const Events = (props) => {

  const {newsList} = props;

  //main news
  const headerNews = newsList[0];
  
  //get 2 news for side news
  const headerSideNews = [{...newsList[1]}, {...newsList[2]}];

  const filteredNewsList = newsList.filter((news,index) => index > 2);

  //process news list
  const leftSideNews = filteredNewsList.filter((news, index) => index % 2 === 0);

  const rightSideNews = filteredNewsList.filter((news, index) => index % 2 !== 0);

  return (
    <>
      <Head>
          <title>Fundiin - Báo chí nói gì về Fundiin</title>
          <meta property="og:title" content="Fundiin - Báo chí nói gì về Fundiin" key="title" />
          <meta
          name="description"
          content="Tìm hiểu thêm về Fundiin thông qua những tin tức nổi bật trên các trang báo uy tín"
          />
      </Head>
      <Navbar />
      <PageBanner pageTitle='Báo chí nói về Fundiin' pageName='Press' classElement='page-title-press'/>
      <section className='events-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='events-box'>
                <img src={headerNews.image} style={{objectFit: "cover"}} alt='image' />
                <div className='content'>
                  <h3>{headerNews.title}</h3>
                  <span className='meta'>
                    {headerNews.provider}
                  </span>
                </div>
                <Link href={headerNews.link}>
                  <a className='link-btn' target="_blank"></a>
                </Link>
              </div>
            </div>

            {/**Side news */}
            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>
                {
                  headerSideNews.map((news, index) => (
                    <EventBox 
                      imageURL={news.image} 
                      provider={news.provider} 
                      title={news.title} 
                      href={news.link}
                    />
                  ))
                }
              </div>
            </div>

            {/**Left side */}
            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>
                {
                  leftSideNews.map((news, index) => (
                    <EventBox 
                      imageURL={news.image} 
                      provider={news.provider} 
                      title={news.title} 
                      href={news.link}
                    />
                  ))
                }
              </div>
            </div>

            {/**Right side */}
            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>
                {
                  rightSideNews.map((news, index) => (
                    <EventBox 
                      imageURL={news.image} 
                      provider={news.provider} 
                      title={news.title} 
                      href={news.link}
                    />
                  ))
                }
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  //TODO: replace with api call
  const newsFilePath = path.join(process.cwd(), 'news.json');
  const newsJsonData = await fs.readFile(newsFilePath);
  const newsData = JSON.parse(newsJsonData.toString());

  return {
    props: {
      newsList: newsData
    }
  }
}

export default Events;

// const Events = () => {
//   return (
//     <>
//       <Navbar />
//       <PageBanner pageTitle='Báo chí nói về Fundiin' pageName='Press' classElement='page-title-press'/>
//       <section className='events-area bg-f9f9f9 pt-100 pb-70'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-6 col-md-12'>
//               <div className='events-box'>
//                 <img src='/images/press/1.jpeg' style={{objectFit: "cover"}} alt='image' />
//                 <div className='content'>
//                   <h3>Hành trình lập nghiệp của nguyên quản lý quỹ Vietnam Holding: Đầu tư kiếm triệu đô trước tuổi 28, mất trắng khi khởi nghiệp, làm lại với mô hình kinh doanh đang ‘bùng nổ’ toàn cầu</h3>
//                   <span className='meta'>
//                      Cafebiz.vn
//                   </span>
//                 </div>
//                 <Link href='https://cafebiz.vn/hanh-trinh-lap-nghiep-cua-nguyen-quan-ly-quy-vietnam-holding-dau-tu-kiem-trieu-do-truoc-tuoi-28-mat-trang-khi-khoi-nghiep-lam-lai-voi-mo-hinh-kinh-doanh-dang-bung-no-toan-cau-20211104102136804.chn'>
//                   <a className='link-btn' target="_blank"></a>
//                 </Link>
//               </div>
//             </div>

//             <div className='col-lg-6 col-md-12'>
//               <div className='events-item-list'>
//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-1'>
//                         <img src='/images/press/2.jpg' alt='image' />
//                         <Link href='https://cafebiz.vn/hanh-trinh-lap-nghiep-cua-nguyen-quan-ly-quy-vietnam-holding-dau-tu-kiem-trieu-do-truoc-tuoi-28-mat-trang-khi-khoi-nghiep-lam-lai-voi-mo-hinh-kinh-doanh-dang-bung-no-toan-cau-20211104102136804.chn'>
//                           <a className='link-btn' target="_blank"></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                           Nhịp cầu đầu tư
//                         </span>
//                         <h3>
//                           <Link href='https://nhipcaudautu.vn/cong-nghe/fundiin-mua-truoc-tra-sau-3340176/'>
//                             <a target="_blank">
//                             Fundiin – thời đại của mua trước trả sau
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-2'>
//                         <img src='/images/press/3.jpg' alt='image' />
                        
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         Vnexpress
//                         </span>
//                         <h3>
//                           <Link href='https://startup.vnexpress.net/tin-tuc/xu-huong/fundiin-goi-von-thanh-cong-4256200.html'>
//                             <a  target="_blank">
//                             Fundiin gọi vốn thành công 1,8 triệu đô
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             <div className='col-lg-6 col-md-12'>
//               <div className='events-item-list'>
//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-4'>
//                         <img src='/images/press/5.jpg' alt='image' />
//                         <Link href='https://baodautu.vn/mo-vang-dich-vu-mua-ngay-tra-sau-d151338.html'>
//                           <a className='link-btn'></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         baodautu.vn
//                         </span>
//                         <h3>
//                           <Link href='https://baodautu.vn/mo-vang-dich-vu-mua-ngay-tra-sau-d151338.html'>
//                             <a target="_blank">
//                             Mỏ vàng dịch vụ “mua ngay, trả sau”
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-5'>
//                         <img src='/images/press/6.jpg' alt='image' />
//                         <Link href='https://www.24h.com.vn/kham-pha-cong-nghe/fundiin-bat-tay-cung-haravan-kich-thich-tieu-dung-online-cho-nha-ban-le-c675a1305240.html'>
//                           <a className='link-btn'></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         24h.com.vn
//                         </span>
//                         <h3>
//                           <Link href='https://www.24h.com.vn/kham-pha-cong-nghe/fundiin-bat-tay-cung-haravan-kich-thich-tieu-dung-online-cho-nha-ban-le-c675a1305240.html'>
//                             <a target="_blank">
//                             Fundiin bắt tay cùng Haravan, kích thích tiêu dùng online cho nhà bán lẻ 
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-6'>
//                         <img src='/images/press/7.jpg' alt='image' />
//                         <Link href='https://cafef.vn/mua-truoc-tra-sau-con-sot-toan-cau-ve-den-viet-nam-da-bao-gio-ban-nghi-den-viec-tra-gop-de-mua-mot-doi-giay-hay-bo-quan-ao-20210803202447612.chn'>
//                           <a className='link-btn'></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         CafeF
//                         </span>
//                         <h3>
//                           <Link href='https://cafef.vn/mua-truoc-tra-sau-con-sot-toan-cau-ve-den-viet-nam-da-bao-gio-ban-nghi-den-viec-tra-gop-de-mua-mot-doi-giay-hay-bo-quan-ao-20210803202447612.chn'>
//                             <a target="_blank">
//                             Mua trước - Trả sau: Cơn sốt toàn cầu về đến Việt Nam, đã bao giờ bạn nghĩ đến việc trả góp để mua một đôi giày hay bộ quần áo?
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='col-lg-6 col-md-12'>
//               <div className='events-item-list'>
//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-3'>
//                         <img src='/images/press/4.jpg' alt='image' />
//                         <Link href='https://thanhnien.vn/fundiin-hop-tac-voi-sapo-cung-cap-giai-phap-mua-tra-sau-mien-phi-post1089822.html'>
//                           <a className='link-btn'></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         Thanhnien
//                         </span>
//                         <h3>
//                           <Link href='https://thanhnien.vn/fundiin-hop-tac-voi-sapo-cung-cap-giai-phap-mua-tra-sau-mien-phi-post1089822.html'>
//                             <a target="_blank">
//                             Fundiin hợp tác với Sapo cung cấp giải pháp mua trả sau miễn phí
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='single-events-box'>
//                   <div className='row m-0'>
//                     <div className='col-lg-4 col-md-4 p-0'>
//                       <div className='image bg-7'>
//                         <img src='/images/press/8.jpg' alt='image' />
//                         <Link href='https://doanhnhansaigon.vn/khoi-nghiep/startup-dan-nguoi-tieu-dung-viet-vao-thoi-quen-mua-truoc-tra-sau-1106934.html'>
//                           <a className='link-btn'></a>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className='col-lg-8 col-md-8 p-0'>
//                       <div className='content'>
//                         <span className='meta'>
//                         Doanhnhansaigon
//                         </span>
//                         <h3>
//                           <Link href='https://doanhnhansaigon.vn/khoi-nghiep/startup-dan-nguoi-tieu-dung-viet-vao-thoi-quen-mua-truoc-tra-sau-1106934.html'>
//                             <a target="_blank">
//                             Startup dẫn người tiêu dùng Việt vào thói quen "mua trước trả sau"
//                             </a>
//                           </Link>
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

