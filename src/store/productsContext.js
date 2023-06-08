import { createContext, useContext, useEffect ,useReducer} from "react";
import { toast } from "react-toastify";
import { fetchCategory ,fetchProducts} from "../services/products/products-service";
import { dataReducerFunction, intialDataReducer } from "./productReducer";
import { useAuthContext } from "./authContext";
import { getCart } from "../services/cart/cart-service";
import { getWishList } from "../services/wishlist/wish-service";
import { colors } from "../constant";

export const ProductsContext=createContext({
    data:{},
    categorySortHandler:()=>{},
    priceRangeHandler:()=>{},
    ratingHandler:()=>{},
    priceSortHandler:()=>{},
    AddToWishList:()=>{},
    DeleteFromWishList:()=>{},
    AddAllCartData:()=>{},
    AddToCart:()=>{},
    DeleteFromCart:()=>{},
    clearFilters:()=>{},
    setLoading:()=>{},
    setOrders:()=>{}
})

export const  ProductsProvider=({children})=>{
    const [data,dispatchData]=useReducer(dataReducerFunction,intialDataReducer);
    const {authData:{isLoggedIN}}=useAuthContext(); 
   

    useEffect(()=>{
        (async()=>{
         
            try{
                dispatchData({type:'SETLOADING',payload:true});
                const [categoryData,productData]=await Promise.all([fetchCategory(),fetchProducts()]);
                const modifyProductsData=productData.map((product)=>{
                    return {...product,isLiked:false,isAddedTocart:false};
                })
                dispatchData({type:'SETCATEGORY',payload:categoryData});
                dispatchData({type:'SETINITIALCATEGORYSORT',payload:categoryData});
                dispatchData({type:'SETPRODUCTS',payload:modifyProductsData});
            }
            catch(error){
                console.error('useEffect',error)
            }finally{
                dispatchData({type:'SETLOADING',payload:false});
            }
        })();
    },[]);

    useEffect(()=>{
        (async()=>{
            try{
                dispatchData({type:'SETLOADING',payload:true});
                const token=localStorage.getItem('token');
                if(isLoggedIN && token){
                  const[{data:{wishlist:wishListData}},{data:{cart:cartData}}]=await Promise.all([getWishList(token),getCart(token)]);
                    dispatchData({type:'SETWISHLIST',payload:wishListData});
                    dispatchData({type:'SETCART',payload:cartData});
                }
                else {
                  if(token){
                      localStorage.removeItem('token');
                  }
                  dispatchData({type:'CLEARPRODUCTSWISHLISTANDCART'});
                  clearFilters();
                }
            }catch(error){
                console.error('useEffect',error)
            }finally{
                dispatchData({type:'SETLOADING',payload:false});
            }
        })();
    },[isLoggedIN]);

    function categorySortHandler(categoryId){
       dispatchData({type:'SETCATEGORYFILTER',payload:categoryId});
    }
    function priceRangeHandler(priceRange){
        dispatchData({type:'SETPRICERANGE',payload:priceRange});
    }
    function ratingHandler(rating){
        dispatchData({type:'SETRATING',payload:rating});
    }
    function priceSortHandler(priceSort){
        dispatchData({type:'SETPRICESORT',payload:priceSort});
    }
    function clearFilters(){
        dispatchData({type:'CLEARFILTER'});
    }
    function AddToWishList(productId,wishListData){
        dispatchData({type:'SETADDWISHLIST',payload:{productId,wishListData}});
        toast.success('Product is Added to WishList',{
            icon: ({theme, type}) =><span className="fa-solid fa-heart" style={{color: colors.colorWhite}}></span>
        });
    }
    function DeleteFromWishList(productId,wishListData){
        dispatchData({type:'SETDELETEWISHLIST',payload:{productId,wishListData}});
        toast.warn('Product is Deleted From WishList',{
            icon: ({theme, type}) =><span className="fa-solid fa-heart-crack" style={{color: colors.colorWhite}}></span>
        });
    }
    function AddToCart(productId,cartData){
        dispatchData({type:'SETADDTOCART',payload:{productId,cartData}});
        toast.success('Product is Added to Cart',{
            icon: ({theme, type}) =><span className="fa-solid fa-cart-shopping" style={{color: colors.colorWhite}}></span>
        });
    }
    function DeleteFromCart(productId,cartData){
        dispatchData({type:'SETDELETEFROMCART',payload:{productId,cartData}});
        toast.warn('Product is Deleted From Cart',{
            icon: ({theme, type}) =><span className="fa-solid fa-cart-shopping" style={{color: colors.colorWhite}}></span>
        });
    }
    function updateCart(productId,cartData){
        dispatchData({type:'SETUPDATECARTPRODUCT',payload:{productId,cartData}});
    }
    function setLoading(value){
        dispatchData({type:'SETLOADING',payload:value});
    }
    function setOrders(value){
        dispatchData({type:'SETADDTOORDERS',payload:value});
    }
    return (
        <ProductsContext.Provider value={{data,categorySortHandler,priceRangeHandler,ratingHandler,priceSortHandler,clearFilters,AddToWishList,DeleteFromWishList,AddToCart,DeleteFromCart,updateCart,setLoading,setOrders}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}