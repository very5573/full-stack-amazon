// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Panel from './components/Panel';
import MobilePage from './components/MobilePage';
import LaptopPage from './components/LaptopPage';
import FashionPage from './components/FashionPage';
import ElectronicsDealsPage from './components/ElectronicsDealsPage';
import Home from "./components/Home";
import CartPage from './pages/CartPage';
import SuccessPage from './pages/SuccessPage';
import RegisterPage from './components/RegisterPage'; // ✅ Register page route
import RegistrationSuccessPage from './pages/RegistrationSuccessPage';  // Success Page (Updated)


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Router>
      <Header searchTerm={searchTerm} onSearch={handleSearch} />
      <Panel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/mobile" element={<MobilePage searchTerm={searchTerm} />} />
        <Route path="/laptop" element={<LaptopPage searchTerm={searchTerm} />} />
        <Route path="/fashion" element={<FashionPage searchTerm={searchTerm} />} />
        <Route path="/electronics-deals" element={<ElectronicsDealsPage searchTerm={searchTerm} />} />
        <Route path="/cart" element={<CartPage />} />

        {/* ✅ New route */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registration-success" element={<RegistrationSuccessPage />} />  {/* Success Page */}

      </Routes>
    </Router>
  );
}

export default App;
