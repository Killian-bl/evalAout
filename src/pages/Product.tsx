import ProductCard from "../components/ProductCard.tsx";

const Product = () => {

    const mockProduct = {
        id: 1,
        name: "Chaise design",
        price: 5,
        overview: "Chaise confortable en bois massif"
    };

return (
    <div>
        <ProductCard product={mockProduct}/>
    </div>
)
}

export default Product;