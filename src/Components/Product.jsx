import { React } from "react";

export default function Product({item}) {
    
    return(
       <div key={item?.id} class='p-10 m-20'>
        <p>{item?.title}</p>
        <p>{item?.description}</p>
       </div>
    )
}