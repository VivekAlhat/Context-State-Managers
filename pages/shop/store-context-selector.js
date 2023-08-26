import { useCallback, useState } from "react";
import { useContextSelector, createContext } from "use-context-selector";

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

const useUser = () => useContextSelector(StoreContext, (s) => s.user);
const useCart = () => useContextSelector(StoreContext, (s) => s.cart);
const useLogin = () => useContextSelector(StoreContext, (s) => s.login);
const useLogout = () => useContextSelector(StoreContext, (s) => s.logout);
const useAddToCart = () => useContextSelector(StoreContext, (s) => s.addToCart);

export {
  useUser,
  useCart,
  useLogin,
  useLogout,
  useAddToCart,
  StoreContextProvider,
};
