import React from 'react'
import { useProductsContext } from '../../store/productsContext';
import { RangeBarDiv } from './FiltersCss';

export const RangeBar = () => {
  const {data:{priceRange},priceRangeHandler}=useProductsContext();
  return (
    // set value in usereducer
    <RangeBarDiv>
        <h3>Price</h3>
        <div className='range-div'>
            <span>0</span>
            <span>1000</span>
            <span>2000</span>
        </div>
        <input className="range-input" id="price" type="range" value={priceRange} onChange={(e)=>priceRangeHandler(e.target.value)} max="2000" min="0" />
    </RangeBarDiv>
  )
}
