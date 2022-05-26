import dynamic from 'next/dynamic';

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import AppDownload from '../container/AppDownload.container';
import Head from 'next/head';

const File = () => {
    return (
        <>
        <Head>
            <title>Fundiin - Tải App Fundiin</title>
            <meta property="og:title" content="Fundiin - Tải App Fundiin" key="title" />
            <meta
            name="description"
            content="Tải ngay app trên App Store và Google Play để có thể sử dụng dịch vụ của Fundiin ngay lập tức"
            />
        </Head>
         <Navbar />
         <AppDownload />
        <Footer/>
        </>
    )
}
export default File;