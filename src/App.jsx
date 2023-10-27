import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import List from "./pages/List.jsx";
import Details from "./pages/Details.jsx";
import AddInfo from "./pages/AddInfo.jsx"

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<List />}/>
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/add" element={<AddInfo />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;