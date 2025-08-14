import {useEffect, useState} from "react";
import type {productType} from "../@types/ProductType"
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard.tsx";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const ProductDetails = () => {
    const [cart, setCart] = useState<productType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedProduct);
    }, []);

    const handleOrder = () => {
        const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            products: cart
        };

        localStorage.setItem("orders", JSON.stringify([...allOrders, newOrder]));

        localStorage.setItem("order", JSON.stringify(cart));

        localStorage.setItem("cart", "[]");
        setCart([]);

        navigate("/order");
    };

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
               <Grid item xs={12}>
                   <Button
                       variant="contained"
                       color="primary"
                       onClick={handleOrder}
                   >
                       Commander
                   </Button>
               </Grid>
           </div>
       </>
    )
};

export default ProductDetails;
