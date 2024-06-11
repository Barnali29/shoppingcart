import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
export default function Navbar() {
    return(
        <>
       <Link to={'/'} element={<Home/>}>Home</Link>
       <Link to={'/cart'} element={<Cart/>}> Cart</Link>
        </>
    )
}