import React, { useRef }  from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useProductsContext } from '../../store/productsContext';
import { ProductsCard } from '../ProductsPage/ProductsCard';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { FormCard } from '../../UI/FormCard';


export const SearchComponent = () => {
  const [fallBackText,setFallBackText]=useState('Try Searching For Product');
  const [filteredData,setFilteredData]=useState(null)
  const {data:{products}}=useProductsContext();
  const searchInputRef=useRef(null);


  const searchSubmitHandler=()=>{
    
    let value=searchInputRef.current.value.trim();
    if(value===""){
      return ;
    }
    else{
      value=value.toLowerCase();
    }
    const getAllFilteredProducts=products.filter((product)=>{
      const productsText=[product.title.toLowerCase(),product.description.toLowerCase(),product.brand.toLowerCase(),product.category.toLowerCase()]
      return productsText.filter(text=>text.includes(value)).length>0?true:false;
    });
    if(getAllFilteredProducts.length===0){
      setFallBackText('No Products Found, Try With some other Keys');
      return;
    }
    setFilteredData(getAllFilteredProducts);
  }
  return (
    <Modal modalType="searchModal">
      <FormCard>
        <div className='form-field-div'>
          <label className="form-label" htmlFor='search'>Search</label>
          <div className='form-input-div'>
            <span><SearchIcon/></span>
            <input id="search" ref={searchInputRef} placeholder='Search By brand, Category or title' aria-label="Search" onKeyDown={(e)=>{
            if(e.key==='Enter'){
              searchSubmitHandler()
            }
            }}/>
          </div>
        </div>
        <button className='form-button' onClick={searchSubmitHandler}>Submit</button>
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
