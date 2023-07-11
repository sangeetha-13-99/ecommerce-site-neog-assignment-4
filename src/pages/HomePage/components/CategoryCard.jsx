import React from 'react'
import { useProductsContext } from '../../../store/productsContext'
import { Link } from 'react-router-dom';
import { CategoryCardDiv } from '../styles/HomePageCss';

export const CategoryCard = ({name,thumbnail,id}) => {
    const {categorySortHandler}=useProductsContext();
    return (
        <CategoryCardDiv>
            <Link className='category-link' to="/product" onClick={()=>categorySortHandler(id)}>
                <img className='category-image' src={thumbnail} alt={name}/>
                <div className='category-name'>{name}</div>
            </Link>
        </CategoryCardDiv>
    )
}
