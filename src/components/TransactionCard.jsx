import { Link } from "react-router-dom";

export default function TransactionCard({ id, item_name, amount, date }) {
    return (
        <div>
            {date}
            <Link to={`/transactions/${id}`}>{item_name}</Link>
            {amount}
        </div>
    )
}