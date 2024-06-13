import { React } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addToCart,deletefromCart } from "../Slice/Slice";

export default function Product({item}) {
    const dispatch=useDispatch();
    const{cart}=useSelector((state)=>state);

    function handleAdd(e){
        e.preventDefault();
        dispatch(addToCart(item));
    }
    function handleRemove(e){
        e.preventDefault();
        dispatch(deletefromCart(item));
    }
    return(
        <div className="mt-10 border-2  rounded-xl shadow-2xl">
       <div key={item?.id} >
        <img src={item?.image} alt={item?.title} width="100px"/>
       <p className='font-bold text-lg'>
       {item?.title}</p>
        <p className='mb-5'> <h3 className='font-bold text-lg'>Description:</h3>{item?.description}</p>
        <button className="bg-red-800 border-2 border-black rounded-lg p-3  text-base font-bold" onClick={(e)=>{
            cart && cart.length>0 && cart.some((product)=>product.id===item?.id) ?
            handleRemove(e)
            :handleAdd(e)}}>
            {cart && cart.length>0 && cart.some((product)=>product.id===item?.id) ?
            "remove from cart"
            :"add to cart"
            }
            </button>
            </div>
       </div>
    )
}