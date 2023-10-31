import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTransaction() {
    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        date: "",
        item_name: "",
        amount: 0,
        from: "",
        category: "",
    });

    useEffect(() => {
        fetch(`${apiUrl}/transactions/${id}`)
            .then((res) => res.json())
            .then((data) => setTransaction(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }, [id]);

    const handleUpdate = e => {
        e.preventDefault();
        fetch(`${apiUrl}/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => navigate(`/transactions/${id}`))
            .catch(err => console.error("Catch error", err));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Edit transaction</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Item Name:
                        <input
                            name="item_name"
                            value={transaction.item_name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Item name"
                        />
                    </label>
                </div>
                <div>
                    <label>Amount:
                        <input
                            name="amount"
                            value={transaction.amount}
                            onChange={handleChange}
                            type="number"
                            placeholder="Amount"
                        />
                    </label>
                </div>
                <div >
                    <label>Date:
                        <input
                            name="date"
                            value={transaction.date}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter date (MM/DD/YYYY)"
                        />
                    </label>
                </div>
                <div >
                    <label>From:
                        <input
                            name="from"
                            value={transaction.from}
                            onChange={handleChange}
                            type="text"
                            placeholder="From"
                        />
                    </label>
                </div>
                <div >
                    <label>Category:
                        <input
                            name="category"
                            value={transaction.category}
                            onChange={handleChange}
                            type="text"
                            placeholder="Category"
                        />
                    </label>
                </div>
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
    )
}