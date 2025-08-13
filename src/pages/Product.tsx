import ProductCard from "../components/ProductCard.tsx";

const Product = () => {

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

return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
)
}

export default Product;