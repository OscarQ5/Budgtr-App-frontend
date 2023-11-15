import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import List from "./pages/List.jsx";
import Details from "./pages/Details.jsx";
import AddInfo from "./pages/AddInfo.jsx"
import Home from "./pages/Home.jsx"
import EditTransaction from "./components/EditTransaction.jsx";

function App() {
  const [bankTotal, setBankTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function calculateBankTotal(transactions) {
    let total = 0;

    for (const transaction of transactions) {
      if (transaction.category === 'Income' || transaction.category === 'Savings') {
        total += transaction.amount;
      } else {
        total -= transaction.amount;
      }
    }

    return total;
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/transactions`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        const total = calculateBankTotal(data);
        setBankTotal(total);
      })
      .catch((error) => console.error('Error fetching transactions: ', error));
  }, [transactions]);

  return (
    <Router>
      <div>
        <Navbar bankTotal={bankTotal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<List />} />
          <Route path="/transactions/new" element={<AddInfo />} />
          <Route path="/transactions/:id" element={<Details />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;