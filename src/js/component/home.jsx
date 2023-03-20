import React, { useState } from "react";

const Home = () => {
  const [button, setButton] = useState(null);

  const colors = {
    red: {
      normal: "#FF0000",
      light: "#FF6666",
    },
    yellow: {
      normal: "#f0e330",
      light: "#faee43",
    },
    green: {
      normal: "#2ead1d",
      light: "#39db23",
    },
  };
  const handleClick = (color) => {
    setButton(color);
  };

  return (
    <div>
      <div className="base bg-dark m-auto mt-3"></div>
      <div className="cuadro bg-dark m-auto p-2 rounded-top">
        <button
          className="lighthouse m-auto rounded-circle d-flex justify-content-center"
          style={{
            backgroundColor:
              button === "red" ? colors.red.light : colors.red.normal,
          }}
          onClick={() => handleClick("red")}
        ></button>
        <button
          className="lighthouse m-auto mt-2 rounded-circle d-flex justify-content-center"
          style={{
            backgroundColor:
              button === "yellow" ? colors.yellow.light : colors.yellow.normal,
          }}
          onClick={() => handleClick("yellow")}
        ></button>
        <button
          className="lighthouse m-auto mt-2 rounded-circle d-flex justify-content-center"
          style={{
            backgroundColor:
              button === "green" ? colors.green.light : colors.green.normal,
          }}
          onClick={() => handleClick("green")}
        ></button>
      </div>
    </div>
  );
};

export default Home;
