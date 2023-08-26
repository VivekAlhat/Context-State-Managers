import { useState } from "react";

// classic case of prop drilling
const Container = ({ setCounter }) => {
  return (
    <div className="border border-red-400 p-4">
      <p className="my-2">Container component</p>
      <Increment setCounter={setCounter} />
    </div>
  );
};

const Increment = ({ setCounter }) => {
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

const Counter = ({ counter }) => {
  return (
    <div className="text-center border border-yellow-600 p-4">
      <p className="my-2">Counter component</p>
      <p>Counter: {counter}</p>
    </div>
  );
};

const PropDrilling = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 border border-blue-600 p-4">
      <p className="my-2">Main component</p>
      <Container setCounter={setCounter} />
      <Counter counter={counter} />
    </div>
  );
};

export default PropDrilling;
