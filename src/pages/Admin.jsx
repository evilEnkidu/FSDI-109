import "./Admin.css";
import { useState, useContext } from "react";
import DataContext from "../state/DataContext";

function Admin() {
  const { user } = useContext(DataContext);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  const [allCoupons, setAllCoupons] = useState([]); // Initialize as an array
  const [allProducts, setAllProducts] = useState([]);

  var dynamicText = document.querySelector(".dynamic-text");

  function couponAlert(couponCode) {
    dynamicText.textContent = "The coupon " + couponCode + " has been created!";
    dynamicText.style.backgroundColor = "#36c927";
  }

  function productAlert(productName) {
    dynamicText.textContent = "The product " + productName + " has been added!";
    dynamicText.style.backgroundColor = "#cf47f3";
  }

  function saveCoupon() {
    console.log(coupon);
    couponAlert(coupon.code);
    let copy = [...allCoupons]; // Copy the current coupons array
    copy.push(coupon); // Add the new coupon
    setAllCoupons(copy); // Update the state with the new array
  }

  function saveProduct() {
    productAlert(product.name);
    console.log(product); // Logs the current product data
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    const copy = { ...coupon }; // Copy the current coupon object
    copy[name] = text; // Update the field
    setCoupon(copy); // Set the updated coupon state
  }

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    const copy = { ...product }; // Copy the current product object
    copy[name] = text; // Update the field
    setProduct(copy); // Set the updated product state
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
          <div className="itemsForSale">
            {allProducts.map((prod) => (
              <li className="prod">
                <img src={prod.image} alt="" className="product-image" />
                <h5>{prod.name}</h5>
                <label>${prod.price}</label>
              </li>
            ))}
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
            <ul>
              <h5>Current Codes:</h5>
              {allCoupons.map((cp, index) => (
                <li key={index}>
                  {cp.code} - {cp.discount}%
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
