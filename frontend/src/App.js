import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";

import "./App.css";

import Home from "./routes/Home";
import Furniture from "./routes/Furniture";
import Food from "./routes/Food";

import Electricals from "./routes/Electricals";
import Phones from "./routes/Phones";
import Supermarket from "./routes/Supermarket";
import Fashion from "./routes/Fashion";
import Motors from "./routes/Motors";
import Computing from "./routes/Computing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electricals" element={<Electricals />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/food" element={<Food />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/supermarket" element={<Supermarket />} />
        <Route path="/motors" element={<Motors />} />
        <Route path="/computing" element={<Computing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
