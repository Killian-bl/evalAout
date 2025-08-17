import ProductCard from "../components/ProductCard.tsx";
import {useEffect, useState} from "react";
import type { productType } from "../@types/ProductType";

interface ProductsPageProps {
    searchQuery: string;
}

const Product = ({ searchQuery }: ProductsPageProps) => {

    /*const mockProducts:  productType[] = [
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
    ];*/

    const [products, setProducts] = useState<productType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/product")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Erreur réseau");
                }
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const [quantities, setQuantities] = useState<Record<number, number>>({});

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: newQuantity,
        }));
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <p>Chargement...</p>;
    if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;

return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
            <ProductCard
                key={product.id}
                product={{ ...product, quantity: quantities[product.id] ?? 1 }}
                onQuantityChange={(newQty) => handleQuantityChange(product.id, newQty)}
            />
        ))}
    </div>
)
}

export default Product;