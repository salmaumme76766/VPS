import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import RegistrationPage from "./RegistrationPage";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageProducts from "./Admin/ManageProducts";
import UserDashboard from "./User/UserDashboard";
import Products from "./User/Products";
import Home from'./HomeHeader';
import Cart from './User/Cart';
import { ToastContainer } from "react-toastify";
import MyOrders from "./User/MyOrders";
import ManageCustomers from "./Admin/ManageCustomers";
import HomeHeader from "./HomeHeader";
import Contact from "./Contact";
import HomeInfo from "./HomeInfo";
import ManageOrders from "./Admin/ManageOrders";
export const TOAST_PROP={position:"top-center",hideProgressBar:true};

 function App() {
 return(
 
  <BrowserRouter>
  <ToastContainer />
  
  <Routes>
  <Route path="/" element={<HomeHeader />} />
  <Route path="/" element={<HomeInfo />} />
  <Route path="login" element={<Login />} />
  <Route path="register" element={<RegistrationPage/>} />
  <Route path="contactus" element={<Contact/>} />
  
</Routes>

<Routes>
  <Route path="AdminDashboard" element={<AdminDashboard />} />
    <Route path="manageproducts" element={<ManageProducts />} />
    <Route path="manageusers" element={<ManageCustomers/>} />
    <Route path="allorders" element={<ManageOrders/>} />
    </Routes>
    
<Routes>
    <Route path="userdashboard" element={<UserDashboard />} >
    <Route path="products" element={<Products />} />
    <Route path="cart" element={<Cart />} />
    <Route path="myorders" element={<MyOrders />} />

   </Route>
  </Routes>
  </BrowserRouter>
 );
}
export default App;
