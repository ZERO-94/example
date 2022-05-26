import Link from "next/link";
import React from "react";

const CategoryItem = (props) => {
    const categoryItemData = props.categoryItemData;
    return (
       <>
              <div className='col-lg-2 col-sm-6 col-md-4 '>
                <div className='single-category-box danhmuc'>
                  <div className='icon-margin'>
  
                    <img className='icon-image ' src={'/images/category/'+categoryItemData.icon}/>
  
                  </div>
                  <h3>{categoryItemData.title}</h3>
                  <Link href={`/partner/${categoryItemData.id}`}>
                    <a className='link-btn'></a>
                  </Link>
                </div>
              </div>
  
      </>
    )
    
}

export default CategoryItem;