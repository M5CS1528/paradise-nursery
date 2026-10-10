import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">🌿 Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-count" aria-label={`${count} items in cart`}>{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}
