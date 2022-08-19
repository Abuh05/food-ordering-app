import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../component/Header";

import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'
import Payment from '../pages/Payment/Payment'
import Register from '../pages/Register/Register'
import Menu from '../pages/Menu/Menu'


const Navigation = () => (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/payment-success" element={<Payment/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
)

export default Navigation; 