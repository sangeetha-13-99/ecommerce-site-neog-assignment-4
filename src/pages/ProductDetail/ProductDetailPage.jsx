import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../../store/productsContext';
import { ProductDetailCard } from './components/ProductDetailCard';

export const ProductDetailPage = () => {
  const {data:{products}}=useProductsContext();
  const {productId}=useParams();
  const productDetail=products.filter((product)=>product._id===productId)[0]||{};
  return (
    <div>
      <ProductDetailCard product={productDetail}/>
    </div>
  )
}
