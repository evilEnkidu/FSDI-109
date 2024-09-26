import { useContext } from "react";
import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";

function Product(props) {
  // Declare the quantity state at the Product component level
  const [quantity, setQuantity] = useState(1);

  const addToCart = useContext(DataContext).addProductToCart;

  function add() {
    console.log("added to cart");
    let prod = { ...props.data, quantity: quantity };
    addToCart(prod);
  }

  // This function updates the quantity
  function handleQuantityChange(qty) {
    console.log("Quantity Changed!", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <h3>{props.data.title}</h3>
      <img src={props.data.image} alt={props.data.title}></img>
      <div className="price-container">
        <label>Price ${props.data.price}</label>
        <label>Total ${getTotal()}</label>
      </div>
      <div className="controls">
        {/* Pass quantity and handleQuantityChange as props */}
        <QuantityPicker quantity={quantity} onChange={handleQuantityChange} />
        <button onClick={add} className="btn btn-sm btn-info">
          Add
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
