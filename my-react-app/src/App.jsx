import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Accommodation from './pages/Accommodation/accommodation';
import Error from './pages/Error/error';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Accommodation/:accommodationId" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App