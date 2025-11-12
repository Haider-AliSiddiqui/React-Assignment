import React, { useState } from "react";
import "./ColorChanger.css";

const ColorChanger = () => {
  const [color, setColor] = useState("aqua");

  return (
    <div className="body" style={{ background: color }}>
      <div className="container">
      <h1 className="h1" style={{ color: color }}>
        Click the Button to change the color
      </h1>

      <div className="button">
        <button className="color-button red" onClick={() => setColor("red")}>Red</button>
        <button className="color-button green" onClick={() => setColor("green")}>Green</button>
        <button className="color-button blue" onClick={() => setColor("blue")}>Blue</button>
        <button className="color-button orange" onClick={() => setColor("orange")}>orange</button>
        <button className="color-button yellow" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="color-button brown" onClick={() => setColor("brown")}>Brown</button>
        <button className="color-button pink" onClick={() => setColor("pink")}>Pink</button>
        <button className="color-button purple" onClick={() => setColor("purple")}>purple</button>
        <button className="color-button gray" onClick={() => setColor("gray")}>Gray</button>
        <button className="color-button white" onClick={() => setColor("white")}>white</button>

      </div>
      </div>
    </div>
  );
};

export default ColorChanger;
