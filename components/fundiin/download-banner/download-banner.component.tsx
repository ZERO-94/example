
const AppDownload = (props) => {

  const {extra, imageBanner} = props;

  return (
    <>
      <section className='app-download-area bg-main-color' id="app">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12'>
              <div className='app-download-content'>
                <h2>Tải Fundiin ngay</h2>
                <div className='btn-box'>
                  {extra}
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-12'>
              <div className='app-download-image'>
                <img src={imageBanner} alt='image' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const DownloadButton = (props) => {
  const {link, image, subtitle, title} = props;

  return (
    <a href={link} target="_blank" className='applestore-btn'>
      <img src={image} alt='image' />
      {subtitle}
      <span>{title}</span>
    </a>
  );
} 

export default AppDownload;
  