import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../Components/Cart-item";

export default function Cart() {
    const{cart}=useSelector((state)=>state)
    const[totalprice,settotalprice]=useState(0)
    console.log(cart);

    useEffect(()=>{
    settotalprice(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])
    return(
        <>
        <div className="grid grid-cols-3 gap-4">
        {
            cart && cart.length?
            cart.map((item)=><Cartitem item={item}/>)
            :null
        }
        <div className='border-4 text-end p-6'>
            <p><span className="font-bold col">Cart Summary</span>:
                <span>{cart.length}</span></p>
            <p>Total price:
                <span>
                {totalprice}</span></p>
        </div>
        </div>
        </>
    )
}