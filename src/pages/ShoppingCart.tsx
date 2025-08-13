import {useEffect, useState} from "react";
import type {productType} from "../@types/ProductType"
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard.tsx";

const ProductDetails = () => {
    const [cart, setCart] = useState<productType[]>([]);

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedProduct);
    }, []);

    return (
       <>
           <div className={"cart-container"}>
               <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
                   {cart.length === 0 ? (
                       <p>Panier Vide</p>
                   ) : (
                       cart.map((product: productType) => (
                           <Grid item xs={12} key={product.id}>
                               <ProductCard product={product}/>
                           </Grid>
                       ))
                   )}
               </Grid>
           </div>
       </>
    )
};

export default ProductDetails;
