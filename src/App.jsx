import React from "react";
import { useState } from "react";
import data from "./component/Data";
import List from "./component/List";
function App() {
  const [count, setCount] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{count.length} birthdays today</h3>
        <List count={count} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setCount([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
