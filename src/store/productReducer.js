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
            return {...state,categoriesSort:categories,priceRange:2000,rating:0,priceSort:""};
        case "CLEARPRODUCTSWISHLISTANDCART":
            const clearProductsWishlistAndCart=state.products.map(product=>{
                return {...product,isLiked:false,isAddedTocart:false};
            });
            return {...state,products:clearProductsWishlistAndCart,cart:[],wishList:[]};
        case "SETWISHLIST":
            const setWishList_wishListIds=action.payload.map((wProduct)=>wProduct._id);
            const setWishList_carttIds=state.cart.map((cproduct)=>cproduct._id);
            const setWishList_cart=state.cart.map((cproduct)=>{
                if(setWishList_wishListIds.includes(cproduct._id)){
                    return {...cproduct,isLiked:true};
                }
                return cproduct;
            });
            const setWishList_wishList=action.payload.map((wProduct)=>{
                if(setWishList_carttIds.includes(wProduct._id)){
                   return {...wProduct,isLiked:true,isAddedTocart:true};
                }
                return {...wProduct,isLiked:true,isAddedTocart:false};
            });
            const setWishList_products=state.products.map(product=>{
                if(setWishList_wishListIds.includes(product._id)){
                    return {...product,isLiked:true};
                }
                return product;
            });
            return {...state,products:setWishList_products,cart:setWishList_cart,wishList:setWishList_wishList};
        case "SETADDWISHLIST":
            const setAddWishList_cartIds=state.cart.map((cproduct)=>cproduct._id);
            const setAddWishList_cart=state.cart.map((cproduct)=>{
                if(cproduct._id===action.payload.productId){
                    return {...cproduct,isLiked:true};
                }
                return cproduct;
            });
            const setAddWishList_wishList=action.payload.wishListData.map((wproduct)=>{
                if(setAddWishList_cartIds.includes(wproduct._id)){
                    return {...wproduct,isLiked:true,isAddedTocart:true};
                }
                return {...wproduct,isLiked:true,isAddedTocart:false};
            });
            const setAddWishList_products=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isLiked:true};
                }
                return product;
            });
            return {...state,products:setAddWishList_products,wishList:setAddWishList_wishList,cart:setAddWishList_cart};
        case "SETDELETEWISHLIST":
            const setDeleteWishList_cartProducts=state.cart.map((cproduct)=>{
                if(cproduct._id===action.payload.productId){
                    return {...cproduct,isLiked:false};
                }
                return cproduct;
            });
            const setDeleteWishList_wishList=state.wishList.filter((wproduct)=>wproduct._id!==action.payload.productId);
            const setDeleteWishList_product=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isLiked:false};
                }
                return product
            });
            console.log(setDeleteWishList_wishList,setDeleteWishList_product)
            return {...state,products:setDeleteWishList_product,wishList:setDeleteWishList_wishList,cart:setDeleteWishList_cartProducts};
        case "SETCART":
            const setCart_cartIds=action.payload.map((cProduct)=>cProduct._id);
            const setCart_wishListIds=state.wishList.map((wproduct)=>wproduct._id);
            const setCart_wishList=state.wishList.map((wproduct)=>{
                if(setCart_cartIds.includes(wproduct._id)){
                    return {...wproduct,isAddedTocart:true};
                }
                return wproduct;
            });
            const setCart_cartProducts=action.payload.map((cproduct)=>{
                if(setCart_wishListIds.includes(cproduct._id)){
                    return {...cproduct,isAddedTocart:true,isLiked:true};
                }
                return {...cproduct,isAddedTocart:true,isLiked:false};
            })
            const setAllCartProducts=state.products.map(product=>{
                if(setCart_cartIds.includes(product._id)){
                    return {...product,isAddedTocart:true};
                }
                return product;
            });
            return {...state,products:setAllCartProducts,cart:setCart_cartProducts,wishList:setCart_wishList};
        case "SETADDTOCART":
            const setAddCart_wishListIds=state.wishList.map((wproduct)=>wproduct._id);
            const setAddCart_wishListProducts=state.wishList.map((wproduct)=>{
                if(wproduct._id===action.payload.productId){
                    return {...wproduct,isAddedTocart:true};
                }
                return wproduct;
            });
            const setAddCart_cartProducts=action.payload.cartData.map(cproduct=>{
                if(setAddCart_wishListIds.includes(cproduct._id)){
                    return {...cproduct,isAddedTocart:true,isLiked:true};
                }
                return {...cproduct,isAddedTocart:true,isLiked:false};
            })
            const setAddCart_products=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isAddedTocart:true};
                }
                return product;
            });
            return {...state,products:setAddCart_products,cart:setAddCart_cartProducts,wishList:setAddCart_wishListProducts};
        case "SETDELETEFROMCART":
            const setDeleteCart_wishList=state.wishList.map((wproduct)=>{
                if(wproduct._id===action.payload.productId){
                    return {...wproduct,isAddedTocart:false};
                }
                return wproduct;
            });
            const setDeleteCart_products=state.products.map(product=>{
                if(product._id===action.payload.productId){
                    return {...product,isAddedTocart:false};
                }
                return product;
            });
            const setDeleteCart_cart=state.cart.filter((cproduct)=>cproduct._id!==action.payload.productId);
            return {...state,products:setDeleteCart_products,cart:setDeleteCart_cart,wishList:setDeleteCart_wishList};
        case "SETUPDATECARTPRODUCT":
            const setUpdateCart_wishListProducts=state.wishList.filter((wProduct)=>{
                if(wProduct.isAddedTocart){
                    return true;
                }
                return false;
            }).map((wProduct)=>wProduct._id);
            const setUpdateCart=action.payload.cartData.map((cproduct)=>{
                if(setUpdateCart_wishListProducts.includes(cproduct._id)){
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
    priceRange:2000,
    rating:0,
    priceSort:"",
    
}