import { useState } from "react";

function App() {
  const [count, setcount] = useState(JSON.parse(localStorage.getItem("count")) ?? 0)
  const saveCount = () => {
    setcount(count + 1)
  }
  localStorage.setItem("count", JSON.stringify(count))

  return (
    <>
      <section>
        <p className=""> count: {count}</p>
        <button className="" onClick={saveCount}>+</button>
      </section>
    </>
  );
}

export default App;
