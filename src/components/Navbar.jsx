import { Link } from "react-router-dom";

export default function Navbar({ bankTotal }) {
    return (
        <nav>
            <Link to="/transactions">Budgtr</Link>
            <div>
                Bank Account Total: ${bankTotal}
            </div>
            <button>
                <Link to="/transactions/new">Add</Link>
            </button>
        </nav>
    )
}