import Product from "../components/Product";
import "./Catalog.css";
import { catalog as Products, categories } from "../services/DataService";
import { useState } from "react";

function Catalog() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = Products.filter((prod) => {
    if (filter === "All") return true;

    if (Array.isArray(prod.category)) {
      return prod.category.includes(filter);
    } else {
      return prod.category === filter;
    }
  });

  return (
    <div className="catalog page">
      <div className="banner">
        <h3 className="catalog-title">Check out our catalog!</h3>
      </div>
      <div className="filters">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setFilter("All")}
        >
          See all
        </button>
        {categories.map((categorie) => (
          <button
            key={categorie}
            className="btn btn-sm btn-outline-dark"
            onClick={() => setFilter(categorie)}
          >
            {categorie}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((prod) => (
          <Product data={prod} key={prod["#id"]} className="product" />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
