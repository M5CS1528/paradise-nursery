import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allPlants, categories } from "./data/plants.js";
import { addItem } from "./CartSlice.jsx";

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const addedIds = new Set(items.map((item) => item.id));

  return (
    <main className="page container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Find your new favorite</p>
          <h1>Shop Houseplants</h1>
          <p className="muted">Choose a plant, find your light, and let the good grow.</p>
        </div>
        <Link className="secondary-button" to="/cart">View cart ({items.reduce((n, item) => n + item.quantity, 0)})</Link>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category.id} aria-labelledby={`heading-${category.id}`}>
          <div className="category-heading">
            <h2 id={`heading-${category.id}`}>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <span className="plant-category-label">{category.title}</span>
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button
                        type="button"
                        className="add-button"
                        disabled={added}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {added ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
