import React from 'react'

import { HeroBannerContentDiv } from './Home';


export const HeroBannerContent = ({category}) => {
    console.log(category)
  return (
    <HeroBannerContentDiv>
        <div key={category._id} className='banner-category-div'>
        <h2 className='banner-category-title'>{category.categoryName}</h2>
            <p className='banner-category-description'>{category.description}</p>
        </div>
    </HeroBannerContentDiv>
  )
}
