import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./pages/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";

// Category pages
import CakesPage from "./pages/CakesPage";
import ClothesPage from "./pages/ClothesPage";
import FruitsPage from "./pages/FruitsPage";
import FlowersPage from "./pages/FlowersPage";
import VegetablesPage from "./pages/VegetablesPage";
import DrinksPage from "./pages/DrinksPage";
import Land from "./Land";
import ItemDetailsPage from "./pages/ItemDetailsPage"; // Import the ItemDetailsPage component

import CartPage from "./pages/CartPage"; // Import the CartPage component


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Default route shows landing page */}
          <Route path="/" element={<Land />} />

          {/* Main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />

          {/* Category pages */}
          <Route path="/cakes/*" element={<CakesPage />} />
          <Route path="/clothes/*" element={<ClothesPage />} />
          <Route path="/fruits/*" element={<FruitsPage />} />
          <Route path="/flowers/*" element={<FlowersPage />} />
          <Route path="/vegetables/*" element={<VegetablesPage />} />
          <Route path="/drinks/*" element={<DrinksPage />} />
          <Route path="/:category/:itemId" element={<ItemDetailsPage />} />


          

          {/* Cart page route */}
          <Route path="/cart" element={<CartPage />} />

          {/* Catch-all redirect to landing page */}
          <Route path="*" element={<Land />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


