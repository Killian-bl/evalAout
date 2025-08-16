import { useEffect, useState } from "react";
import type { productType } from "../@types/ProductType";

const Order = () => {
    const [order, setOrder] = useState<productType[]>([]);
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem("order") || "[]");
        setOrder(storedOrder);

        const storedEmail = localStorage.getItem("email");
        if (storedEmail) setEmail(storedEmail);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Veuillez entrer un email valide.");
            return;
        }

        localStorage.setItem("email", email);

        const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

        const newOrder = {
            id: Date.now(),
            email,
            date: new Date().toLocaleString(),
            products: order,
        };

        const updatedOrders = [...storedOrders, newOrder];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));

        alert("Commande validée !");
    };

    return (
        <div>
            <h1>Récapitulatif de votre commande</h1>
            {order.length === 0 ? (
                <p>Aucune commande trouvée</p>
            ) : (
                <>
                    <ul>
                        {order.map((product) => (
                            <li key={product.id}>
                                {product.name} x {product.quantity ?? 1} - {product.price} €
                            </li>
                        ))}
                    </ul>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Email :
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Valider la commande</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Order;


