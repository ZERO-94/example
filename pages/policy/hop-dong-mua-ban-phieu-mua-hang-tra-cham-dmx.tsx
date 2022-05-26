import React, { Fragment, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';

const File = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <>
         <Navbar />

        <section className='listings-area ptb-100 bg-f9f9f9 file-viewer dmx-page' >

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 height-full  section-title'>
                            <div>
                            <Document
                                file="/assets/files/hop-dong-mua-ban-phieu-mua-hang-tra-cham-dmx.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                                
                            >
                            {[...Array.from(Array(numPages).keys())].map((p) => (
                                    <Fragment>
                                        <Page pageNumber={p + 1} />
                                        <div style={{height: "1rem", width: "100%"}}></div>
                                    </Fragment>
                                    ))}
                            </Document>
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