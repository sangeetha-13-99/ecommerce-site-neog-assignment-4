export const dataReducerFunction=(state,action)=>{
    switch (action.type) {
        case "SETCATEGORY":
            return {...state,categories:action.payload};
        case "SETPRODUCTS":
            return {...state,products:action.payload};
        case "SETLOADING":
            return {...state,loading:action.payload};
        case "SETCATEGORYFILTER":
            const updateCategoriesSort=state.categoriesSort.map(
                category=>{
                    if(category._id===action.payload){
                        return {...category,checked:!category.checked}
                    }
                    return category;
                })
            return {...state,categoriesSort:updateCategoriesSort};
        case "SETINITIALCATEGORYSORT":
            const categoriesSort=action.payload.map(
                category=>{
                    return {...category,checked:false};
                })    
            return {...state,categoriesSort}; 
        case "SETPRICERANGE":
            return {...state,priceRange:action.payload};
        case "SETRATING":
            return {...state,rating:action.payload};
        case "SETPRICESORT":
            return {...state,priceSort:action.payload};
        case "CLEARFILTER":
            const categories=state.categoriesSort.map(
            category=>{
                return {...category,checked:false};
            })  
            return {...state,categoriesSort:categories,priceRange:1000,rating:0,priceSort:""};
        case "CLEARPRODUCTSWISHLISTANDCART":
            const clearProductsWishlistAndCart=state.products.map(product=>{
                return {...product,isLiked:false,isAddedTocart:false};
            });
            return {...state,products:clearProductsWishlistAndCart,cart:[],wishList:[]};
        case "SETWISHLIST":
            const setWishListIds=action.payload.map((wProduct)=>wProduct._id);
            const setWishListCart=state.cart.map((cproduct)=>{
                if(setWishListIds.includes(cproduct._id)){
                    return {...cproduct,isLiked:true};
                }
                return cproduct;
            });
            const setWishListProducts=action.payload.map((wProduct)=>({...wProduct,isLiked:true}));
            const setAllLikedProducts=state.products.map(product=>{
                if(setWishListIds.includes(product._id)){
                    return {...product,isLiked:true};
                }
                return product;
            });
            return {...state,products:setAllLikedProducts,cart:setWishListCart,wishList:setWishListProducts};
        case "SETADDWISHLIST":
            const setAddWishListCartProducts=state.cart.map((cproduct)=>{
                if(cproduct._id===action.payload.productId){
                    return {...cproduct,isLiked:true};
                }
                return cproduct;
            });
            const setAddWishListProducts=action.payload.wishListData.map((wproduct)=>{
                if(wproduct._id===action.payload.productId){
                    return {...wproduct,isLiked:true};
                }
                return wproduct;
            });
            const setLikedProduct=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isLiked:true};
                }
                return product
            });
            return {...state,products:setLikedProduct,wishList:setAddWishListProducts,cart:setAddWishListCartProducts};
        case "SETDELETEWISHLIST":
            const setDeleteWishListCartProducts=state.cart.map((cproduct)=>{
                if(cproduct._id===action.payload.productId){
                    return {...cproduct,isLiked:false};
                }
                return cproduct;
            });
            const setUnlikedProduct=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isLiked:false};
                }
                return product
            });
            return {...state,products:setUnlikedProduct,wishList:action.payload.wishListData,cart:setDeleteWishListCartProducts};
        case "SETCART":
            const cartProducts=action.payload.map((cProduct)=>cProduct._id);
            const setCartWishListProducts=state.wishList.map((wproduct)=>{
                if(cartProducts.includes(wproduct._id)){
                    return {...wproduct,isAddedTocart:true};
                }
                return wproduct;
            });
            const setCartProducts=action.payload.map((cproduct)=>({...cproduct,isAddedTocart:true}))
            const setAllCartProducts=state.products.map(product=>{
                if(cartProducts.includes(product._id)){
                    return {...product,isAddedTocart:true};
                }
                return product;
            });
            return {...state,products:setAllCartProducts,cart:setCartProducts,wishList:setCartWishListProducts};
        case "SETADDTOCART":
            const setAddCartWishListProducts=state.wishList.map((wproduct)=>{
                if(wproduct._id===action.payload.productId){
                    return {...wproduct,isAddedTocart:true};
                }
                return wproduct;
            });
            const setAddCartProducts=action.payload.cartData.map(cproduct=>{
                return {...cproduct,isAddedTocart:true};
            })
            const setCartProduct=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isAddedTocart:true};
                }
                return product;
            });
            return {...state,products:setCartProduct,cart:setAddCartProducts,wishList:setAddCartWishListProducts};
        case "SETDELETEFROMCART":
            const setDeleteCartWishListProducts=state.wishList.map((wproduct)=>{
                if(wproduct._id===action.payload.productId){
                    return {...wproduct,isAddedTocart:false};
                }
                return wproduct;
            });
            const setUnCartProduct=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isAddedTocart:false};
                }
                return product;
            });
            return {...state,products:setUnCartProduct,cart:action.payload.cartData,wishList:setDeleteCartWishListProducts};
        case "SETUPDATECARTPRODUCT":
            const setUpdateCartProductWishList=state.wishList.filter((wProduct)=>{
                if(wProduct.isAddedTocart){
                    return true;
                }
                return false;
            }).map((wProduct)=>wProduct._id);
            const setUpdateCart=action.payload.cartData.map((cproduct)=>{
                if(setUpdateCartProductWishList.includes(cproduct._id)){
                    return {...cproduct,isLiked:true,isAddedTocart:true};
                }
                return {...cproduct,isLiked:false,isAddedTocart:true};
            });
            return {...state,cart:setUpdateCart};
        case "SETADDTOORDERS":
            const setOrders={order:state.cart.map(product=>product),address:action.payload};
            const setproducts=state.products.map((product)=>{
                return {...product,isAddedTocart:false}
            })
            const setWishList=state.wishList.map((product)=>{
                return {...product,isAddedTocart:false}
            })
            return {...state,cart:[],wishList:setWishList,products:setproducts,orders:[...state.orders,setOrders]};
        default:
            break;
    }
}

export const intialDataReducer={
    loading:true,
    categories:[],
    products:[],
    categoriesSort:[],
    wishList:[],
    cart:[],
    orders:[],
    priceRange:1000,
    rating:0,
    priceSort:"",
    
}