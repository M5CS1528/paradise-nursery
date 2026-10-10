import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice.jsx";

const money = (value) => value.toLocaleString("en-US", { style: "currency", currency: "USD" });

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page container cart-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Your little indoor jungle</p>
          <h1>Shopping Cart</h1>
          <p className="muted">{count} {count === 1 ? "item" : "items"} in your cart</p>
        </div>
        <Link className="secondary-button" to="/plants">← Continue Shopping</Link>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is ready to grow</h2>
          <p className="muted">You haven't added any plants yet.</p>
          <Link className="primary-button" to="/plants">Explore plants</Link>
        </section>
      ) : (
        <>
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-info">
                  <h2>{item.name}</h2>
                  <p className="muted">Unit price: {money(item.price)}</p>
                  <button className="text-button danger" type="button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
              </article>
            ))}
          </section>
          <aside className="cart-summary">
            <div><span>Subtotal</span><strong>{money(total)}</strong></div>
            <div><span>Estimated total</span><strong className="grand-total">{money(total)}</strong></div>
            <button className="primary-button checkout-button" type="button" onClick={() => window.alert("Coming Soon! Checkout will be available soon.")}>Checkout · Coming Soon</button>
            <Link className="continue-link" to="/plants">Continue shopping</Link>
          </aside>
        </>
      )}
    </main>
  );
}
