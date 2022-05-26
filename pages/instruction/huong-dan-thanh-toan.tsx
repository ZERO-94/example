
import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';
import Head from 'next/head';

const File = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <>
        <Head>
            <title>Fundiin - Hướng dẫn thanh toán</title>
            <meta property="og:title" content="Fundiin - Hướng dẫn thanh toán" key="title" />
            <meta
            name="description"
            content="Hướng dẫn thanh toán các kỳ với Fundiin"
            />
        </Head>
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