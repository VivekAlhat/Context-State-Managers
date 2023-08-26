import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => {
  return (
    <div className="border border-red-400 p-4">
      <p className="my-2">Container component</p>
      <Increment />
    </div>
  );
};

const Increment = () => {
  const [_, setCounter] = useContext(CounterContext);
  return (
    <div className="border border-red-700 p-4">
      <p className="my-2">Increment component</p>
      <button
        className="border border-black px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
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

const WithState = () => {
  return (
    <CounterContextProvider>
      <div className="flex flex-col items-center justify-center h-screen gap-6 border border-blue-600 p-4">
        <p className="my-2">Main component</p>
        <Container />
        <Counter />
      </div>
    </CounterContextProvider>
  );
};

const WithStateWrapper = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WithState />
      <WithState />
      <WithState />
    </div>
  );
};

export default WithStateWrapper;
