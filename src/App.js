import {createBrowserRouter,RouterProvider} from "react-router-dom"

import "./App.css";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";
import { LoginPage} from "./pages/LoginPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishListPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ErrorPage } from "./pages/ErrorPage";
import { ProductsProvider } from "./store/productsContext";
import { AuthContextProvider } from "./store/authContext";
// import Mockman from "mockman-js"
import { RequireAuth } from "./components/Utils/RequireAuth";
import { ProfilePage } from "./pages/ProfilePage";
import { AddressContextProvider } from "./store/addressContext";
import { ModalContextProvider } from "./store/modalContext";
import { CheckOutPage } from "./pages/CheckOutPage";
import { ThemeProvider } from "styled-components";
import { colors,fontFamily } from "./constant";

const theme={
  colors,
  fontFamily
}

function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Main/>,children:[
      {index:true,element:<HomePage/>},
      {path:"/product",element:<ProductPage/>},
      {path:"/product/:productId",element:<ProductDetailPage/>},
      {path:"/login",element:<LoginPage/>},
      {path:'/signup',element:<SignUpPage/>},
      {path:"/cart",element:<RequireAuth><CartPage/></RequireAuth>},
      {path:"/wishlist",element:<RequireAuth><WishListPage/></RequireAuth>},
      {path:"/profile",element:<RequireAuth><ProfilePage/></RequireAuth>},
      {path:"/checkout",element:<RequireAuth><CheckOutPage/></RequireAuth>},
      {path:'/error',element:<ErrorPage/>}
    ]}
  ])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
        <ProductsProvider>
          <AddressContextProvider>
            <ModalContextProvider>
              <RouterProvider router={router}/>
              {/* <Mockman/> */}
            </ModalContextProvider>
          </AddressContextProvider>
        </ProductsProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
