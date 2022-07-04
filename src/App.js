import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
