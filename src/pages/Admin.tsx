import { useEffect, useState } from "react";
import type {orderType} from "../@types/OrderType";

const Admin = () => {
    const [orders, setOrders] = useState<orderType[]>([]);
    const [inputEmail, setInputEmail] = useState<string>("");
    const [selectedEmail, setSelectedEmail] = useState<string>("");

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        setOrders(storedOrders);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
            alert("Veuillez entrer un email valide.");
            return;
        }

        setSelectedEmail(inputEmail);
    };

    const filteredOrders = orders.filter((order) => order.email === selectedEmail);

    return (
        <div>
            <h1>Liste des commandes</h1>

            {!selectedEmail ? (
                <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                    <label>
                        Entrez un email :
                        <input
                            type="email"
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            required
                            placeholder="exemple@email.com"
                        />
                    </label>
                    <button type="submit">Voir les commandes</button>
                </form>
            ) : (
                <div>
                    <h2>Commandes pour : {selectedEmail}</h2>
                    {filteredOrders.length === 0 ? (
                        <p>Aucune commande trouvée pour cet email.</p>
                    ) : (
                        filteredOrders.map((order) => (
                            <div
                                key={order.id}
                                style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                }}
                            >
                                <h3>Commande #{order.id}</h3>
                                <p>Date : {order.date}</p>
                                <ul>
                                    {order.products.map((p) => (
                                        <li key={p.id}>
                                            {p.name} - {p.price} € x {p.quantity ?? 1}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Admin;



