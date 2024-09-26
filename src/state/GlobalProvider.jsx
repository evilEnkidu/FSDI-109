import DataContext from "./DataContext";
import { useState } from "react";
function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ userID: 1, name: "ADMIN" });
  function addProductToCart(product) {
    console.log("GLOBAL ADD REGISTERED");
    // add product to cart (3 steps)
    const cartCopy = [...cart];
    cartCopy.push(product);
    setCart(cartCopy);
  }
  function removeProductFromCart() {}
  function clearCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default GlobalProvider;
