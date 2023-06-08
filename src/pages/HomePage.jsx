import React from 'react'
import { useProductsContext } from '../store/productsContext'
import { CategoryCard } from '../components/HomePage/CategoryCard';
import { colors } from '../constant';
import { CategorySection } from './HomePageCss';


export const HomePage = () => {
    const {data:{categories,loading}}= useProductsContext();
    const categoriesHtml=categories.map(category=>
        <CategoryCard key={category._id} name={category.categoryName} thumbnail={category.thumbnail} id={category._id}/>
    )
    return (
        <CategorySection>
            {loading?<i className="fa-solid fa-spinner fa-spin fa-2xl" style={{color: colors.colorGreen}}></i>:
                categoriesHtml
            }
        </CategorySection>
    )
}

