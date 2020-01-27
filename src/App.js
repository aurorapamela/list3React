import React from "react";
import "./App.css";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const ulFunction = (item, index) => {
  return (
    <li key={index} className="list-group-item">
      {item}
    </li>
  );
};

const App = () => {
  return <ul className="list-group m-5">{planets.map(ulFunction)}</ul>;
};

export default App;
