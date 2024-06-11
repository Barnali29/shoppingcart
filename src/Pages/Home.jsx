import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
export default function Home() {
    const[loading,setloading]=useState(false)
    const[product,setproduct]=useState([])

    async function fetchdata(){
        setloading(true);
        const response=await fetch('https://fakestoreapi.com/products');
        const data=await response.json();
      if(data)setproduct(data);
    console.log(product);
    setloading(false);
    }

    useEffect(()=>{fetchdata()},[])
    return(
        <>
        <h1>Home</h1>
        {loading ?<h2>Loading...</h2>:
        null
        }
        {
            product && product.length>0 ?
            product.map((item)=><Product item={item}/>)
            :null
        }
        </>
    )
}