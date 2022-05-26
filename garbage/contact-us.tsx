
import dynamic from 'next/dynamic';

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
type Props = {
    fileType?: string;
    filePath?: string
}
const FileView: React.FC<Props> = ({...rest}) => {
    
    return (
        <FileViewer {...rest} />
    );
};
const File = () => {
    return (
        <>
         <Navbar />
         <section className='blog-details-area bg-f9f9f9 ptb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='blog-details-desc'>
                  

                  <div className='article-content'>
                      <h4>Trụ sở chính</h4>
                      <div>
                          
                          Tầng 4, Charmington La Pointe 181 Cao Thắng, P 12, Q 10, TP.HCM
                      </div>
                      
                  </div>

                  
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='blog-details-desc'>
                  

                  <div className='article-content'>
                      <h4>Liên lạc chung</h4>
                      <div>
                      lienhe@fundiin.vn
                      </div>
                    
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        </>
    )
}
export default File;