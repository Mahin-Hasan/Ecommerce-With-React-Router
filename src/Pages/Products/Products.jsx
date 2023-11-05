import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
    // updated way
    // const {products} = useLoaderData();
    // console.log(products);

    //old way
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then(res=>res.json())
        .then(data=>setProducts(data.products))

    },[])
    console.log(products);
    
    return (
        <div className="grid grid-cols-3 gap-5 p-5">
          {
            products?.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
          }
        </div>
    );
};

export default Products;