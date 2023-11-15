import { Link } from "react-router-dom";

export default function Navbar({ bankTotal }) {
    const getBankTotalColor = () => {
        if (bankTotal > 100) {
            return 'green';
        } else if (bankTotal >= 0) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    const bankTotalColor = getBankTotalColor();

    return (
        <nav>
            <Link to="/transactions">Budgtr</Link>
            <div style={{color: bankTotalColor}}>
                Bank Account Total: ${bankTotal}
            </div>
            <button>
                <Link to="/transactions/new">Add</Link>
            </button>
        </nav>
    )
}