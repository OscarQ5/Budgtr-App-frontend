import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import List from "./pages/List.jsx";
import Details from "./pages/Details.jsx";
import AddInfo from "./pages/AddInfo.jsx"
import Home from "./pages/Home.jsx"
import EditTransaction from "./components/EditTransaction.jsx";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/transactions" element={<List />}/>
          <Route path="/transactions/new" element={<AddInfo />}/>
          <Route path="/transactions/:id" element={<Details />}/>
          <Route path="/transactions/:id/edit" element={<EditTransaction />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;