import {Route, Routes} from "react-router";
import Product from "../pages/Product.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";
import ShoppingCart from "../pages/ShoppingCart.tsx";
import Admin from "../pages/Admin.tsx";


const Router = () => {
    return (
        <Routes>
            <Route path="/Product" element={<Product/>} />
            <Route path="/ProductDetails" element={<ProductDetails/>} />
            <Route path="/ShoppingCart" element={<ShoppingCart/>} />
            <Route path="/Admin" element={<Admin/>} />
        </Routes>
    )
}

export default Router;