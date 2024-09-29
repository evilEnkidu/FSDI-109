import "./Cart.css";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Cart() {
  const { cart } = useContext(DataContext);

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <div className="parent">
        <div className="list">
          {cart.length == 0 ? (
            <div>
              <h3 className="alert alert-primary">Your cart is empty! :'( </h3>
              <img
                src="/images/empty.png"
                alt=""
                className="empty-cart-image"
              />
            </div>
          ) : null}

          {cart.map((prod) => (
            <div className="prod-cart">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label htmlFor="">${prod.price}</label>
              <label htmlFor="">
                Amount: <b>{prod.quantity}</b>
              </label>
              <label htmlFor="">
                ${(prod.price * prod.quantity).toFixed(2)}
              </label>
              <button className="btn btn-sm btn-outline-danter">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
        {cart.length != 0 ? (
          <div className="side">
            <h2 className="got">Got everything?</h2>
            <h4>Proceed with your payment</h4>

            <h4>Total:</h4>
            <h3 className="total">${getTotal()}</h3>
            <h3>Got a discount code?</h3>
            <input
              type="text"
              placeholder="Redeem here"
              className="form-control"
              id="code"
            />
            <button className="btn btn-primary">
              Proceed to Checkout <i class="fa-solid fa-right-long"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
