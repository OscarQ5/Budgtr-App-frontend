import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Budgtr</Link>
            <button>
                <Link to="/add">Add</Link>
            </button>
        </nav>
    )
}