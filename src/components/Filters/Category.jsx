import React from 'react'
import { useProductsContext } from '../../store/productsContext'
import { CategorySort } from './FiltersCss';
export const Category = () => {
   const {data:{categoriesSort},categorySortHandler}=useProductsContext();
  return (
    <CategorySort>
        <h3>Category</h3>
        <ul className='category'>
            {
            categoriesSort.map(category=>{
                return <li key={category._id}>
                    <label className='category-label'>
                        <input type='checkbox' className='category-checkbox' checked={category.checked} 
                        onChange={()=>categorySortHandler(category._id)}/>
                        <span className='category-name'>{category.categoryName}</span>
                    </label>
                </li>
            }) 
            }
        </ul>
    </CategorySort>
  )
}
