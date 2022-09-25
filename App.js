import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear</button>
      </section>
    </main>
  );
};

export default App;
