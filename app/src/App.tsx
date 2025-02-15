import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <h1 className="text-3xl">Welcome to polifi!</h1>
      <p>{count}</p>
      <button className="border-2 border-black rounded-sm p-2.5 cursor-pointer" onClick={increaseCount}>
        Click me
      </button>
      <Link to={"login/"}>Trykk for å logge inn</Link>
    </main>
  );
}

export default App;
