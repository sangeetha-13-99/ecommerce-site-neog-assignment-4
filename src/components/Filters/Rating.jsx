import React from 'react'
import { useProductsContext } from '../../store/productsContext'
import { RatindDiv } from './FiltersCss';

export const Rating = () => {
    const {data:{rating:currentRating},ratingHandler}=useProductsContext();
    const ratingStars=[1,2,3,4];
    return (
        <RatindDiv>
            <h3>Rating</h3>
            <ul>
                {ratingStars.map(rating=>{
                    return <li key={rating}>
                        <label className='rating-label'>
                            <input className='rating-radio' type="radio" name="rating" checked={currentRating===rating} onChange={()=>ratingHandler(rating)}/>
                             <span className='rating-name'>{rating} Stars and Above</span>
                        </label>
                    </li>
                })}
            </ul>
        </RatindDiv>
    )
}
