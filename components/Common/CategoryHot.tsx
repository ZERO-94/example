import Link from 'next/link';
import CategoryItem from '../fundiin/category-item/category-item.component';
interface CategoryProps {
  titleOne?:boolean
  titleTwo?:boolean
  categoryItems?:any
}

const CategoryHot: React.FC<CategoryProps> = ({ titleOne, titleTwo, categoryItems }) => {
  
  if(categoryItems == null || categoryItems == undefined){
    categoryItems = {}
  }

  return (
    <>
      <section className='category-area pt-100 pb-70'>
        <div className='container'>
          {titleOne ? (
            <div className='section-title'>
              <h2>Popular Categories</h2>
            </div>
          ) : titleTwo ? (
            <div className='section-title text-left'>
              <h2>Explore by Category</h2>
            </div>
          ) : (
            ''
          )}
          <div className='row'>
          { Object.entries(categoryItems).map((dm, key)=>  {
            
            return (<CategoryItem categoryItemData={dm[1]}  />)
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryHot;

// const Danhmuc_single = (props) => {

//   const donmuc = props.donmuc;
//   return (
//      <>
//             <div className='col-lg-2 col-sm-6 col-md-4'>
//               <div className='single-category-box danhmuc'>
//                 <div className='icon-margin'>
//                   <img className='icon-image' src={'/images/category/'+donmuc.icon}/>

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