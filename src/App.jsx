import React from "react"
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>

  )
};

export default App;
