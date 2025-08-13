import type {productType} from "../../@types/ProductType";
import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";


interface ProductCardProps {
    product: productType;
}

function AddCartButton({product}: ProductCardProps) {
    const [addCart, setAddCart] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const isAlreadyAdded = storedCart.find((fav: productType)=> fav.id === product.id);
        setAddCart(!!isAlreadyAdded);
    }, [product.id]);

    const toggleAddCart = () => {
        const storedCart: productType[] = JSON.parse(localStorage.getItem('cart') || '[]');
        const isAlreadyAdded = storedCart.find((fav: productType)=> fav.id === product.id);

        let updatedCart;
        if (isAlreadyAdded) {
            updatedCart = storedCart.filter((fav: productType)=> fav.id !== product.id);
            alert("Produit retiré du panier.");
            setAddCart(false);
        } else {
            updatedCart = [...storedCart, product];
            alert("Produit ajouté au panier.");
            setAddCart(true);
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <Button onClick={toggleAddCart} style={{ opacity: addCart ? 0.6 : 1 }}>
            ajouter au panier
        </Button>
    )
}

export default AddCartButton;