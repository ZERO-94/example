
import React, { useState } from 'react';
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

        <section className='listings-area ptb-100 bg-f9f9f9 file-viewer' >

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 height-full  section-title'>
                            <div>
                            <Document
                                file="/assets/files/huong-dan-thanh-toan.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                            {[...Array.from(Array(numPages).keys())].map((p) => (
                                    <Page pageNumber={p + 1} />
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