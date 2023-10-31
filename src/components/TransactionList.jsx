import React, {useState,useEffect} from "react";
import TransactionCard from "./TransactionCard.jsx";

export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setLoading(true);

        fetch(`${apiUrl}/transactions`)
        .then(res => res.json())
        .then(data => {
            setTransactions(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
            {transactions.map(transaction => 
                <TransactionCard
                key={transaction.id}
                id={transaction.id}
                item_name={transaction.item_name}
                amount={transaction.amount}
                date={transaction.date}
                />)}
        </div>
    )
}