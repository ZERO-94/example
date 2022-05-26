import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import FaqComponent from '../components/fundiin/faq/faq.component';

//TODO: remove these when add api call
import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';

const Faq = (props) => {

  const {faqData} = props;

  return (
    <>
      <Head>
          <title>Fundiin - Giải đáp thắc mắc</title>
          <meta property="og:title" content="Fundiin - Giải đáp thắc mắc" key="title" />
          <meta
          name="description"
          content="Giải đáp thắc mắc cho người dùng qua một số câu hỏi về dịch vụ của Fundiin"
          />
      </Head>
      <Navbar />
      <PageBanner pageTitle='Câu hỏi thường gặp' pageName='Frequently Asked Questions'  classElement="page-title-faq"/>
      <section className='faq-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            {
              faqData.map((faq) => {
                return (
                  <FaqComponent {...faq}/>
                );
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  //TODO: replace with api call
  const faqFilePath = path.join(process.cwd(), 'faq.json');
  const faqJsonData = await fs.readFile(faqFilePath);
  const faqData = JSON.parse(faqJsonData.toString());

  return {
    props: {
      faqData: faqData
    }
  }
}

export default Faq;
