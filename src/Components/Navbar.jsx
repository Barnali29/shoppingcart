import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
export default function Navbar() {
    return(
        <div className=''>
            <span>Shopping</span>
            <div>
       <Link to={'/'} element={<Home/>}>Home</Link>
       <Link to={'/cart'} element={<Cart/>}> Cart</Link>
       </div>
        </div>
    )
}