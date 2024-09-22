import Product from "../components/Product";
import "./Catalog.css";
import { catalog as Products, categories } from "../services/DataService";
function Catalog() {
  return (
    <div className="catalog page">
      <h3 className="catalog-title">Check out our catalog!</h3>

      <div className="filters">
        {categories.map((categorie) => (
          <button className="btn btn-sm btn-outline-dark">{categorie}</button>
        ))}
      </div>

      {Products.map((prod) => (
        <Product data={prod} key={prod["#id"]} className="product"></Product>
      ))}
    </div>
  );
}
export default Catalog;
