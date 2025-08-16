import ProductCard from "../components/ProductCard.tsx";
import { useState } from "react";
import type { productType } from "../@types/ProductType";

const Product = () => {

    const mockProducts:  productType[] = [
        {
            id: 1,
            name: "Chaise design",
            price: 5,
            overview: "Chaise confortable en bois massif",
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

    const [quantities, setQuantities] = useState<Record<number, number>>({});

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: newQuantity,
        }));
    };

return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {mockProducts.map((product) => (
            <ProductCard key={product.id} product={{ ...product, quantity: quantities[product.id] ?? 1 }}
                         onQuantityChange={(newQty) => handleQuantityChange(product.id, newQty)}
            />
        ))}
    </div>
)
}

export default Product;