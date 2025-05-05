import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Lodging from './pages/Lodgings/lodgingPage';
import NotFound from './pages/NotFound/notFound';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';

function App() {
    return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Lodgings/:id" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App