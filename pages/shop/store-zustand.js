import { create } from "zustand";

const useStore = create((set) => ({
  user: "",
  cart: 0,
  login: () => set(() => ({ user: "Tommy" })),
  logout: () => set(() => ({ user: "" })),
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
}));

const useUser = () => useStore((state) => state.user);
const useCart = () => useStore((state) => state.cart);
const useLogin = () => useStore((state) => state.login);
const useLogout = () => useStore((state) => state.logout);
const useAddToCart = () => useStore((state) => state.addToCart);

export { useUser, useCart, useLogin, useLogout, useAddToCart };
