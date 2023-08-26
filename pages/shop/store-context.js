import { createContext, useCallback, useContext, useState } from "react";

const StoreContext = createContext(null);

const useStore = () => {
  const [user, setUser] = useState("");
  const [cart, setCart] = useState(0);

  return {
    user,
    cart,
    login: useCallback(() => setUser("Tommy"), []),
    logout: useCallback(() => setUser(""), []),
    addToCart: useCallback(() => setCart((prev) => prev + 1), []),
  };
};

const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

const useUser = () => useContext(StoreContext).user;
const useCart = () => useContext(StoreContext).cart;
const useLogin = () => useContext(StoreContext).login;
const useLogout = () => useContext(StoreContext).logout;
const useAddToCart = () => useContext(StoreContext).addToCart;

export {
  useUser,
  useCart,
  useLogin,
  useLogout,
  useAddToCart,
  StoreContextProvider,
};
