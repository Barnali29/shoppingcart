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
       {loading?<p>Loading..</p>
       :null}
       <div className="grid grid-cols-3 gap-4">
    {
        product && product.length>0?
        product.map(item=><Product item={item}/>)
        :null
    }
    </div>
       </>
    
    )
}