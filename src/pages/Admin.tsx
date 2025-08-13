import { useEffect, useState } from "react";

interface OrderType {
    id: number;
    date: string;
    products: {
        id: number;
        name: string;
        price: number;
        overview?: string;
    }[];
}

const Admin = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        setOrders(storedOrders);
    }, []);

    return (
        <div>
            <h1>Liste des commandes</h1>
            {orders.length === 0 ? (
                <p>Aucune commande trouvée</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                        <h3>Commande #{order.id}</h3>
                        <p>Date : {order.date}</p>
                        <ul>
                            {order.products.map(p => (
                                <li key={p.id}>{p.name} - {p.price} €</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default Admin;

