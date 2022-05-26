import Link from 'next/link';
import { useEffect, useLayoutEffect } from 'react';
import jQuery from 'jquery'
const Danhmuc_single = (props) => {
  const donmuc = props.donmuc;
  return (
     <>
            <div className='col-lg-2 col-sm-6 col-md-4 '>
              <div className='single-category-box danhmuc'>
                <div className='icon-margin'>

                  <img className='icon-image ' src={'images/category/'+donmuc.icon}/>

                </div>
                <h3>{donmuc.title}</h3>
                <Link href={`/partner/${donmuc.id}`}>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

    </>
  )
  
}
const Category = (props) => {
  
  useLayoutEffect(() => {
    
    let listDanhmuc = document.getElementsByClassName('danhmuc') as HTMLCollectionOf<HTMLElement>;
    let maxHeight = 160;
    for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
      if(listDanhmuc[danhmuc].offsetHeight > maxHeight && listDanhmuc[danhmuc].offsetHeight < 200){
        maxHeight = listDanhmuc[danhmuc].offsetHeight;

      }
    }
    for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
      let text = maxHeight + "px !important;";
      listDanhmuc[danhmuc].setAttribute("style", "height: "+text);
    }
    
  })
    
    
  
  let danhmuc = props.category;
  return (
    <>
      <section className='category-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Danh mục
            </h2>
          </div>

          <div className='row'>
            { Object.entries(danhmuc).map((dm, key)=>  {
            
            return (<Danhmuc_single donmuc={dm[1]}  />)
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
