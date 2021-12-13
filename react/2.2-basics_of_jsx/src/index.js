import React from "react";
import ReactDOM from "react-dom";

function App () {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";

  return (
    <div>
      {data[0][0].toUpperCase()}
      {data[0].slice(1)} {data[1][0].toUpperCase()}
      {data[1].slice(1)}
      <p>{number1}+{number2}={number1 + number2}</p>
      <p>The String length is: {string.length}</p>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));