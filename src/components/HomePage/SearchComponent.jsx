import React, { useCallback, useEffect, useRef }  from 'react'
import debounce from 'lodash.debounce';
import SearchIcon from '@mui/icons-material/Search';
import { useProductsContext } from '../../store/productsContext';
import { ProductsCard } from '../ProductsPage/ProductsCard';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { FormCard } from '../../UI/FormCard';


export const SearchComponent = () => {
  const [fallBackText,setFallBackText]=useState('Try Searching For Product');
  const [searchValue,setSearchValue]=useState();
  const [filteredData,setFilteredData]=useState(null);
  const {data:{products}}=useProductsContext();

    useEffect(()=>{
      const timer=setTimeout(()=>{

        if(searchValue){
          const getAllFilteredProducts=products.filter((product)=>{
            const productsText=[product.title.toLowerCase(),product.description.toLowerCase(),product.brand.toLowerCase(),product.category.toLowerCase()]
            return productsText.filter(text=>text.includes(searchValue)).length>0?true:false;
          });
          if(getAllFilteredProducts.length===0){
            setFallBackText('No Products Found, Try With some other Keys');
            return;
          }
          setFilteredData(getAllFilteredProducts);
        }else{
          setFilteredData([]);
        }
      },200);
      return ()=>clearInterval(timer);
    },[searchValue,products]);
    
  const searchChangeHandler=(value)=>{
    if(value===""){
      setFallBackText('Try Searching For Product');
    }
    else{
      value=value.toLowerCase();
    }
    setSearchValue(value);
  }

  return (
    <Modal modalType="searchModal">
      <FormCard>
        <div className='form-field-div'>
          <label className="form-label" htmlFor='search'>Search</label>
          <div className='form-input-div'>
            <span><SearchIcon/></span>
            <input id="search" value={searchValue} placeholder='Search By brand, Category or title' aria-label="Search" onChange={(e)=>{
              searchChangeHandler(e.target.value.trim());
            }}/>
          </div>
        </div>
      </FormCard>
      <div className='search-data'>
        {
          filteredData?filteredData.map(product=>{
            return <ProductsCard key={product._id} product={product}/>
          }):
          <p>{fallBackText}</p>
        }
      </div>
    </Modal>
  )
}
