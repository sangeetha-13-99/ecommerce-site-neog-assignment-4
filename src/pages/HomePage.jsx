import React, { Fragment } from 'react'
import { useProductsContext } from '../store/productsContext'
import { CategoryCard } from '../components/HomePage/CategoryCard';
import { colors } from '../constant';
import { CategorySection } from './HomePageCss';
import { Footer } from '../components/Footer/Footer';
import { HeroBanner } from '../components/HomePage/HeroBanner';

export const HomePage = () => {
    const {data:{categories,loading}}= useProductsContext();
    const categoriesHtml=categories.map(category=>
        <CategoryCard key={category._id} name={category.categoryName} thumbnail={category.thumbnail} id={category._id}/>
    )
    return (
        <Fragment>
            <HeroBanner/>
            <CategorySection>
                <h2 className='category-title'>Categories</h2>
                <div className='category-section'>
                    {loading?<i className="fa-solid fa-spinner fa-spin fa-2xl" style={{color: colors.colorGreen}}></i>:
                        categoriesHtml
                    }
                </div>
            </CategorySection>
            <Footer/>
        </Fragment>
    )
}

