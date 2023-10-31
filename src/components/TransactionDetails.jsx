import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function TransactionDetails() {
    const [transaction, setTransaction] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/transactions/${id}`)
            .then((res) => res.json())
            .then((data) => setTransaction(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }, [id]);

    const handleDelete = () => {
        fetch(`${apiUrl}/transactions/${id}`, {
            method: "DELETE",
        })
        .then(() => navigate("/transactions"))
        .catch((err) => console.error("Error deleting data: ", err));
    };

    return (
        <div>
            <h1>Transaction Details</h1>
            <p>ID: {transaction.id}</p>
            <p>Item Name: {transaction.item_name}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>From: {transaction.from}</p>
            <p>Category: {transaction.category}</p>
            <Link to={`/transactions/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}