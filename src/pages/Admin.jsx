import "./Admin.css";
import { useState } from "react";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  function saveCoupon() {
    console.log(coupon);
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
    title: "",
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
      <h1>Hello $ADMIN$.</h1>
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
                onBlur={handleCoupon}
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
                onBlur={handleCoupon}
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
                onBlur={handleCoupon}
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
                onBlur={handleCoupon}
              />
            </div>
            <div>
              <button className="btn btn-outline-dark">Add</button>
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
                Discount:
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
