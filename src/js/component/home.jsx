import React, { useState } from "react";

const Home = () => {
  const [button, setButton] = useState(null);
  
  const handleClick = (color) => {
    setButton(color);
  };

  return (
    <div>
      <div className="base bg-dark m-auto mt-3"></div>
      <div className="cuadro bg-dark m-auto p-2 rounded-top">
        <button
          className={`lighthouse m-auto rounded-circle d-flex justify-content-center red 
          ${button === "red" ? "glow" : ""}`}
          onClick={() => handleClick("red")}
        ></button>
        <button
          className={`lighthouse m-auto mt-2 rounded-circle d-flex justify-content-center yellow 
          ${button === "yellow" ? "glow" : ""}`}
          onClick={() => handleClick("yellow")}
        ></button>
        <button
          className= {`lighthouse m-auto mt-2 rounded-circle d-flex justify-content-center green
          ${button === "green" ?  "glow" : ""}`}
          onClick={() => handleClick("green")}
        ></button>
      </div>
    </div>
  );
};

export default Home;
