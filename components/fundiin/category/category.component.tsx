import Link from 'next/link';
import { useEffect } from 'react';
import jQuery from 'jquery'
import CategoryItem from '../category-item/category-item.component';


const Category = (props) => {
  
  useEffect(() => {
    //fix the style to make all the components have the same size
    let subcategoryList = document.getElementsByClassName('danhmuc') as HTMLCollectionOf<HTMLElement>;
    let maxHeight = 160;
    for(let subcategory = 0; subcategory < subcategoryList.length; ++subcategory){
      if(subcategoryList[subcategory].offsetHeight > maxHeight && subcategoryList[subcategory].offsetHeight < 200){
        maxHeight = subcategoryList[subcategory].offsetHeight;

      }
    }
    for(let subcategory = 0; subcategory < subcategoryList.length; ++subcategory){
      let text = maxHeight + "px !important;";
      subcategoryList[subcategory].setAttribute("style", "height: "+text);
    }
    
  })
    
  let subcategory = props.category;

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
            { Object.entries(subcategory).map((dm, key)=>  {
            
            return (<CategoryItem categoryItemData={dm[1]}  />)
            })}
          </div>
        </div>
      </section>
    </>
  );
};



// const Danhmuc_single = (props) => {
//   const donmuc = props.donmuc;
//   return (
//      <>
//             <div className='col-lg-2 col-sm-6 col-md-4 '>
//               <div className='single-category-box danhmuc'>
//                 <div className='icon-margin'>

//                   <img className='icon-image ' src={'images/category/'+donmuc.icon}/>

//                 </div>
//                 <h3>{donmuc.title}</h3>
//                 <Link href={`/partner/${donmuc.id}`}>
//                   <a className='link-btn'></a>
//                 </Link>
//               </div>
//             </div>

//     </>
//   )
  
// }
// const Category = (props) => {
  
//   useEffect(() => {
    
//     let listDanhmuc = document.getElementsByClassName('danhmuc') as HTMLCollectionOf<HTMLElement>;
//     let maxHeight = 160;
//     for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
//       if(listDanhmuc[danhmuc].offsetHeight > maxHeight && listDanhmuc[danhmuc].offsetHeight < 200){
//         maxHeight = listDanhmuc[danhmuc].offsetHeight;

//       }
//     }
//     for(let danhmuc = 0; danhmuc < listDanhmuc.length; ++danhmuc){
//       let text = maxHeight + "px !important;";
//       listDanhmuc[danhmuc].setAttribute("style", "height: "+text);
//     }
    
//   })
    
    
  
//   let danhmuc = props.category;
//   return (
//     <>
//       <section className='category-area pt-100 pb-70'>
//         <div className='container'>
//           <div className='section-title'>
//             <h2>
//               Danh mục
//             </h2>
//           </div>

//           <div className='row'>
//             { Object.entries(danhmuc).map((dm, key)=>  {
            
//             return (<Danhmuc_single donmuc={dm[1]}  />)
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default Category;
