import { Link, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <p className="eyebrow">Bring the outdoors in</p>
        <h1>Paradise Nursery</h1>
        <p className="landing-copy">
          Thoughtfully chosen houseplants to help every corner of your home feel alive.
        </p>
        <Link className="primary-button" to="/plants">Get Started</Link>
      </div>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow joy every day.</footer>
    </div>
  );
}
