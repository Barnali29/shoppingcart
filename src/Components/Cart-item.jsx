import React from "react";
import { useDispatch } from "react-redux";
import { deletefromCart } from "../Slice/Slice";
export default function Cartitem({ item }) {
    const dispatch = useDispatch()
    return (
        <div className="mt-10 border-2  rounded-xl shadow-2xl">
            <h1>{item?.title}</h1>
            <img src={item?.image} alt="image" width="100px" />
            <article>
                {item?.description}
            </article>
            <button className='bg-red-800 border-2 border-black rounded-lg p-3  text-base font-bold'
                onClick={() => {
                    dispatch(deletefromCart(item))
                }}>Remove from Cart</button>
        </div>
    )
}