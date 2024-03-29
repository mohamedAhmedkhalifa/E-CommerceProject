import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Categories from './components/categories/Categories';
import Brands from './components/brands/Brands';
import Notfound from './components/notFound/Notfound';
import { AuthProvider } from './context/authContext';
import Profile from './components/profile/Profile';
import ProtectedRoute from './components/protection/Protection';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { CartContextProvider } from './context/cartContext';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import AllOrders from './components/AllOrders/AllOrders';
import { Offline } from 'react-detect-offline';
import Wishlist from './components/wishlist/Wishlist';
import { WishlistContextProvider } from './context/wishlistContext';
import ForgetPassword from './components/forgetpass/ForgetPassword';
import ResetPassword from './components/resetPassword/ResetPassword';
import NewPassword from './components/newPassword/NewPassword';
import BrandDetails from './components/BrandDetails/BrandDetails';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';






const myRouter = createHashRouter([


{path : "" , element : <Layout /> , children:[
{index:true ,element: <ProtectedRoute><Products /></ProtectedRoute>},
{path:"products" ,element: <ProtectedRoute><Products /></ProtectedRoute>},

{path:"cart" ,element: <ProtectedRoute><Cart /></ProtectedRoute>},
{path:"wishlist" ,element: <ProtectedRoute><Wishlist /></ProtectedRoute>},

{path:"payment" ,element: <ProtectedRoute><Payment /></ProtectedRoute>},
{path:"allorders" ,element: <ProtectedRoute><AllOrders /></ProtectedRoute>},

{path:"Register" ,element: <Register />},
{path:"Login" ,element: <Login />},
{path:"ForgetPassword" ,element: <ForgetPassword />},
{path:"ResetPassword" ,element: <ResetPassword />},
{path:"newPassword" ,element: <NewPassword />},

{path:"Categories" ,element: <ProtectedRoute> <Categories /></ProtectedRoute>},
{path:"CategoryDetails/:id" ,element: <ProtectedRoute> <CategoryDetails /></ProtectedRoute>},
{path:"Brands" ,element: <ProtectedRoute><Brands /></ProtectedRoute>},
{path:"brandDetails/:id" ,element: <ProtectedRoute><BrandDetails /></ProtectedRoute>},
{path:"profile" ,element: <ProtectedRoute><Profile /></ProtectedRoute>},
{path:"productDetails/:id" ,element: <ProtectedRoute><ProductDetails /></ProtectedRoute>},
{path:"*" ,element: <Notfound />},
]}
])

let clientQuery = new QueryClient()


function App() {



  return <>


  <QueryClientProvider client={ clientQuery }>
      
      <WishlistContextProvider>

      
      <CartContextProvider>


      <AuthProvider>
  

        <RouterProvider router={myRouter} />

  
      </AuthProvider>


      </CartContextProvider>

      </WishlistContextProvider>

      
      <ToastContainer />
  </QueryClientProvider>
  
  <Offline>

  <div className='position-fixed bottom-0 start-0 ms-2 bg-dark p-4 text-white rounded'>
    sorry , your internet disconnected
  </div>


  </Offline>
  
  </>
}

export default App;
