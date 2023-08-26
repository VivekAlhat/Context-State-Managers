import {
  useUser,
  useCart,
  useLogin,
  useLogout,
  useAddToCart,
  StoreContextProvider,
} from "./store-context";

const User = () => {
  const user = useUser();
  return (
    <div>
      <p>User: {user}</p>
    </div>
  );
};

const Login = () => {
  const login = useLogin();
  return (
    <div>
      <button
        className="px-4 py-2 border border-black hover:bg-slate-600 hover:text-white rounded-md w-full"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
};

const Logout = () => {
  const logout = useLogout();
  return (
    <div>
      <button
        className="px-4 py-2 border border-black hover:bg-slate-600 hover:text-white rounded-md w-full"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

const AddToCart = () => {
  const addToCart = useAddToCart();
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-300 text-white hover:bg-red-400 hover:text-white rounded-md w-full"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

const Cart = () => {
  const cart = useCart();
  return (
    <div className="">
      <p>Cart: {cart}</p>
    </div>
  );
};

const WithContext = () => {
  return (
    <StoreContextProvider>
      <div className="grid h-screen place-content-center gap-5">
        <main className="space-y-2">
          <Login />
          <Logout />
        </main>
        <User />
        <main className="space-y-2">
          <AddToCart />
          <Cart />
        </main>
      </div>
    </StoreContextProvider>
  );
};

export default WithContext;
