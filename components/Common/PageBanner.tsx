import Link from 'next/link';

interface PageBannerProps{
  pageTitle?:string;
  pageName?:string;
  classElement?: string;
}

const PageBanner:React.FC<PageBannerProps> = ({ pageTitle, pageName, classElement }) => {

  return (
    <>
      <div className={`page-title-area ${classElement}`}>
        <div className='container'>
          <div className='page-title-content'>
            <h2>{pageTitle}</h2>
            {/* <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>{pageName}</li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
