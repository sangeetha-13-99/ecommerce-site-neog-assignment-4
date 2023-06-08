import React from 'react'
import { useProductsContext } from '../../store/productsContext';
import { PriceSortDiv } from './FiltersCss';

export const PriceSort = () => {
   const {data:{priceSort},priceSortHandler}=useProductsContext();

  return (
    <PriceSortDiv>
        <h3>Sort by</h3>
        <ul>
            <li><label className='price-label'><input className="price-radio" type="radio" onChange={()=>priceSortHandler("increment")} checked={priceSort==="increment"}/>
            <span className='price-name'>Price-Low to High
              </span></label></li>
            <li><label className='price-label'><input className="price-radio" type="radio" onChange={()=>priceSortHandler("decrement")} checked={priceSort==="decrement"}/>
            <span className='price-name'>Price-Low to High
              </span></label></li>
        </ul>
    </PriceSortDiv>
  )
}
