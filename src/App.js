import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Nav from "./components/Nav";


function App() { 

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;