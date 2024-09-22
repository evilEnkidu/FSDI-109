import DataContext from "./DataContext";
import { useState } from "react";
function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ userID: 1, name: "Admin" });
  function addProductToCart() {}
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
