import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/transactions">Budgtr</Link>
            <button>
                <Link to="/transactions/new">Add</Link>
            </button>
        </nav>
    )
}