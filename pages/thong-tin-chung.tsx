import dynamic from 'next/dynamic';
import Head from 'next/head';

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});
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
            <Head>
                <title>Fundiin - Thông tin chung</title>
                <meta property="og:title" content="Fundiin - Thông tin chung" key="title" />
                <meta
                name="description"
                content="Thông tin chung về Fundiin và dịch vụ Fundiin đem lại"
                />
            </Head>
            <div className='height-full-2x section-title'>
            <FileView fileType="pdf" filePath='/assets/files/hop-dong-mua-ban-fundiin.pdf'/>
            </div>
            
        </>
    )
}
export default File;