import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        id: "",
        date: "",
        item_name: "",
        amount: 0,
        from: "",
        category: "",
    });

    const postTransaction = () => {
        fetch(`${apiUrl}/transactions`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((newTransaction) => {
            navigate(`/transactions/${newTransaction.id}`);
            setTransaction({
                date: "",
                item_name: "",
                amount: 0,
                from: "",
                category: "",
            });
        })
        .catch(err => console.error("Catch error", err));
    }

    const handleSubmit = e => {
        e.preventDefault();
        postTransaction();
    };

    const handleChange = e => {
        const { name, value } = e.target
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            id: Math.floor(Math.random() * 5555),
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Add transaction</h2>
            <form onSubmit={handleSubmit}>
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
                    Submit
                </button>
            </form>
        </div>
    )
}