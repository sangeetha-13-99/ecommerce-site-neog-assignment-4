import React, { useState } from 'react'
import { Filters } from '../components/Filters/Filters'
import { useProductsContext } from '../store/productsContext'
import { ProductsCard } from '../components/ProductsPage/ProductsCard';
import { colors } from '../constant';
import { ProductPageDiv } from './ProductPageDivCss';


export const ProductPage = () => {
  const [toggleFilters,setToggleFilters]=useState(true);
  const {data:{products,loading,categoriesSort,priceRange,rating,priceSort}}=useProductsContext();

    const categoryNames=new Set();
    for(let prop in categoriesSort){
      if(categoriesSort[prop].checked){
        categoryNames.add(categoriesSort[prop].categoryName)
      }
    };
    let productsHtml=products.filter(product=>{
      if(categoryNames.has(product.category)){
        return true
      };
      return false;
    });
    productsHtml=productsHtml.length>0?productsHtml:products;
    productsHtml=productsHtml.filter(product=>{
      if (product.price<=priceRange && product.rating>=rating){
        return true;
      };
      return false;
    });
  
    const filterProducts= productsHtml.sort(
      function({price:price1},{price:price2}){ 
        if(priceSort==="increment"){
          return price1-price2;
        }else if(priceSort==="decrement"){
          return price2-price1;
        }
        return 0;
      }
    );
    const filteredProducts=filterProducts.map(product=>{
      return <ProductsCard key={product._id} product={product}/>;
    });

    const toggleFiltersFunction=()=>{
      setToggleFilters(prev=>!prev);
    }
  return (
    <ProductPageDiv>
      <button className='filters-button' onClick={toggleFiltersFunction}><span class="fa-solid fa-sliders" style={{color:colors.colorBlack}}></span></button>
     { toggleFilters && <Filters onClick={toggleFiltersFunction}/>}
      {loading?<i className="fa-solid fa-spinner fa-spin fa-2xl" style={{color: colors.colorGreen}}></i>:
        <div className='products-all-div'>
          <p className='results-text'>Showing All Products {filteredProducts.length}</p>
          <div className='product-all'>
            {filteredProducts}
          </div>
      </div>
      }
    </ProductPageDiv>
    )
}
