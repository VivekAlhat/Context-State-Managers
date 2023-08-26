import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => {
  return (
    <div className="border border-red-400 p-4">
      <p className="my-2">Container component</p>
      <Increment />
      <Decrement />
    </div>
  );
};

const Increment = () => {
  const [_, dispatch] = useContext(CounterContext);
  return (
    <div className="border border-red-700 p-4">
      <p className="my-2">Increment component</p>
      <button
        className="border border-black px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
    </div>
  );
};

const Decrement = () => {
  const [_, dispatch] = useContext(CounterContext);
  return (
    <div className="border border-red-700 p-4">
      <p className="my-2">Decrement component</p>
      <button
        className="border border-black px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return (
    <div className="text-center border border-yellow-600 p-4">
      <p className="my-2">Counter component</p>
      <p>Counter: {counter}</p>
    </div>
  );
};

const WithReducer = () => {
  return (
    <CounterContextProvider>
      <div className="flex flex-col items-center justify-center h-screen gap-6 p-8">
        <p className="my-2">Main component</p>
        <Container />
        <Counter />
      </div>
    </CounterContextProvider>
  );
};

const WithReducerWrapper = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WithReducer />
      <WithReducer />
      <WithReducer />
    </div>
  );
};

export default WithReducerWrapper;
