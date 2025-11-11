// Counter Page
import React, { useState } from "react";
import Header from "../../components/header/header";
import "./CounterApp.css"; 

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const countstyle = () => {
    if (count % 2 === 0) return { color: "green" };
    else return { color: "red" };
  };

  const Eo = () => {
    if (count % 2 === 0) return "Even";
    else return "Odd";
  };

  return (
    <div className="cointainer">
      <Header title="Counter" className="title" />
      <div className="counter-box">
        <h1 style={countstyle()} className="h1-count">
          Count: {count} ({Eo()})
        </h1>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)} className="btn inc">
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className="btn dec"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            disabled={count === 0}
            className="btn reset"
          >
            Reset
          </button>
        </div>  
      </div> 
    </div>  
  );
};

export default CounterApp;