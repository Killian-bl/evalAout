import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { productType } from "../@types/ProductType";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<productType | null>(null);

    const mockProducts = [
        {
            id: 1,
            name: "Chaise design",
            price: 5,
            overview: "Chaise confortable en bois massif"
        },
        {
            id: 2,
            name: "Table en chêne",
            price: 15,
            overview: "Table solide pour votre salle à manger"
        },
        {
            id: 3,
            name: "Lampe vintage",
            price: 8,
            overview: "Lampe au style rétro pour éclairer votre pièce"
        }
    ];

    useEffect(() => {
        if (id) {
            const found = mockProducts.find((p) => p.id === parseInt(id));
            setProduct(found || null);
        }
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingIndex = cart.findIndex((item: any) => item.id === product.id);

        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
    };

    if (!product) {
        return <p>Produit introuvable</p>;
    }

    return (
        <Card sx={{ maxWidth: 400, margin: "20px auto" }}>
            <CardContent>
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="h6" color="text.secondary">
                    Prix : {product.price} €
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    {product.overview}
                </Typography>
            </CardContent>

            <Button
                variant="contained"
                color="primary"
                sx={{ m: 2 }}
                onClick={handleAddToCart}
            >
                Ajouter au panier
            </Button>
        </Card>
    );
};

export default ProductDetail;
