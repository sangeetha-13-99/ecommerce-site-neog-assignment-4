import React, { useState } from 'react'
import { useProductsContext } from '../../store/productsContext'
import { Filters } from '../../components/Filters/Filters';
import { WishListsCard } from './components/WishListsCard';
import { Link } from 'react-router-dom';
import { ProductPageDiv } from '../ProductPage/styles/ProductPageDivCss';
import { colors } from '../../constant';

export const WishListPage = () => {
  const [toggleFilters,setToggleFilters]=useState(false);
  const {data:{wishList,categoriesSort,priceRange,rating,priceSort}}=useProductsContext();

    const categoryNames=new Set();
    for(let prop in categoriesSort){
      if(categoriesSort[prop].checked){
        categoryNames.add(categoriesSort[prop].categoryName)
      }
    }
    let productsHtml=wishList.filter(product=>{
      if(categoryNames.has(product.category)){
        return true
      };
      return false;
    });
    productsHtml=productsHtml.length>0?productsHtml:wishList;
    productsHtml.filter(product=>{
      if (product.price<=priceRange && product.rating<=rating){
        return true;
      }
      return false;
    });

    const filterProducts= productsHtml.sort(
      function({price:price1},{price:price2}){ 
        if(priceSort==="increment"){
          return price1-price2
        }else if(priceSort==="decrement"){
          return price2-price1
        }
        return 0
      }
    );
    const filteredProducts=filterProducts.map(product=>{
      return <WishListsCard key={product._id} product={product}/>;
    });
   
    const toggleFiltersFunction=()=>{
      setToggleFilters(prev=>!prev);
    } 
    return (
      <ProductPageDiv>
      <button className='filters-button' onClick={toggleFiltersFunction}><span class="fa-solid fa-sliders" style={{color:colors.colorBlack}}></span></button>
      <Filters onClick={toggleFiltersFunction} show={toggleFilters}/>
        {filteredProducts.length===0?
        <div>
          <p className='results-text'>You Have no wishList Items Added</p>
          <p className='results-text'><span>Explore Products Here</span><span><Link to="/product">Go To Products</Link></span></p>
        </div>:
        <div className='products-all-div'>
          <p className='results-text'>Showing All WishList Products {filteredProducts.length}</p>
          <div className='product-all'>
            {filteredProducts}
          </div>
        </div>
        }
      </ProductPageDiv>
    );
}
