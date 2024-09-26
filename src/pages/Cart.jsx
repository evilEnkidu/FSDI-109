import "./Cart.css";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Cart() {
  const { cart } = useContext(DataContext);

  return (
    <div className="cart page">
      <h2>Got everything?</h2>
      <h4>Proceed with your payment</h4>
      <h5>
        We've got your <b>{cart.length}</b> products ready
      </h5>
      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <div className="prod-cart">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label htmlFor="">${prod.price}</label>
              <label htmlFor="">
                Amount: <b>{prod.quantity}</b>
              </label>
              <label htmlFor="">${prod.price * prod.quantity}</label>
              <button className="btn btn-sm btn-outline-danter">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="side">
          <h4>Total</h4>
          <h3>N+1</h3>
          <button className="btn btn-primary">Proceed with Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
