import "./Admin.css";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Admin() {
  const { user } = useContext(DataContext);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  var dynamicText = document.querySelector(".dynamic-text");

  function couponAlert(couponCode) {
    var newCoupon = couponCode;
    dynamicText.textContent = "The coupon " + newCoupon + " has been created!";
    dynamicText.style.backgroundColor = "#36c927";
  }
  function productAlert(productName) {
    var newProduct = productName;
    dynamicText.textContent = "The product " + newProduct + " has been added!";
    dynamicText.style.backgroundColor = "#cf47f3";
  }

  function saveCoupon() {
    console.log(coupon);
    couponAlert(coupon.code);
  }
  function saveProduct() {
    productAlert(product.name);
  }
  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);
    // When using states and arrays:
    // copy, modify copy, set the copy
    const copy = { ...coupon }; // Use `coupon` instead of `copy`
    copy[name] = text;
    setCoupon(copy);
  }

  /* Finish the product form, 
  create the product state var
  create the handleProduct fn
  set the onBlur and name to input fields
  create the saveProduct that console logs the product
  call the fn on the click event of the save button
  */

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    const copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  return (
    <div className="admin page">
      <h1 className="dynamic-text">
        You are currently logged in as {user.name}!
      </h1>
      <div className="flex-parent">
        <div className="products">
          <h3>Manage your products</h3>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                onBlur={handleProduct}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Category"
                onBlur={handleProduct}
                name="category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Image URL"
                onBlur={handleProduct}
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Price"
                onBlur={handleProduct}
                name="price"
              />
            </div>
            <div>
              <button className="btn btn-outline-dark" onClick={saveProduct}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="coupons">
          <h3>Manage your coupons</h3>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Coupon:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Coupon code"
                onBlur={handleCoupon}
                name="code"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Discount percentage:
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Discount value"
                onBlur={handleCoupon}
                name="discount"
              />
            </div>
            <div>
              <button className="btn btn-outline-dark" onClick={saveCoupon}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
