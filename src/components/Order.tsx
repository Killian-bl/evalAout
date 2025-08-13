import { useEffect, useState } from "react";
import type { productType } from "../@types/ProductType";

const Order = () => {
    const [order, setOrder] = useState<productType[]>([]);

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem("order") || "[]");
        setOrder(storedOrder);
    }, []);

    return (
        <div>
            <h1>Récapitulatif de votre commande</h1>
            {order.length === 0 ? (
                <p>Aucune commande trouvée</p>
            ) : (
                <ul>
                    {order.map((product) => (
                        <li key={product.id}>
                            {product.name} - {product.price} €
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Order;
