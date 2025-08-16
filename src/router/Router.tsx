import {Route, Routes} from "react-router";
import Product from "../pages/Product.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";
import ShoppingCart from "../pages/ShoppingCart.tsx";
import Admin from "../pages/Admin.tsx";
import Order from "../components/Order.tsx";

interface RouterProps {
    searchQuery: string;
}

const Router = ({ searchQuery }: RouterProps) => {
    return (
        <Routes>
            <Route path="/Product" element={<Product searchQuery={searchQuery}/>} />
            <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
            <Route path="/ShoppingCart" element={<ShoppingCart/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/order" element={<Order />} />
        </Routes>
    )
}

export default Router;