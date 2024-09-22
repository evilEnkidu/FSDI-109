import { createContext } from "react";
/* Context is the blueprint / interface, no implementation */
/* This is global data, inmutable */
const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},

})
export default DataContext;