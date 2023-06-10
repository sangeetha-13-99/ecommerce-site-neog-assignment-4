import React from 'react'
import { RangeBar } from './RangeBar'
import { Category } from './Category'
import { Rating } from './Rating'
import { PriceSort } from './PriceSort'
import { useProductsContext } from '../../store/productsContext'
import { FiltersDiv } from './FiltersCss'

export const Filters = ({onClick,show}) => {
  const {clearFilters}=useProductsContext();
  return (
    <FiltersDiv style={{display:show?"flex":"none"}}>
        <div class="filters-clear">
            <h3>Filters</h3>
            <button onClick={clearFilters}>Clear</button>
        </div>
        <RangeBar/>
        <Category/>
        <Rating/>
        <PriceSort/>
        <button onClick={onClick}>Close</button>
    </FiltersDiv>
  )
}
