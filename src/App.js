import { useState } from "react";
import "./styles.css";

export default function App() {
  let [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    let input = event.target.value;
    let output = input.split("").reverse().join("");
    if (input === output) {
      setUserInput("It is a pallindrome!");
    } else {
      setUserInput("It is not a pallindrome!");
    }
  }
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Welcome people!</h1>
      <div style={{ fontSize: "1.5rem", padding: "1rem", fontWeight: "500" }}>
        Type a number to see whether its pallindrome or not!
      </div>
      <input onChange={inputChangeHandler} /> <br />
      <div
        style={{
          display: "inline-block",
          fontSize: "2rem",
          padding: "0.6rem",
          fontWeight: "400",
          backgroundColor: "black",
          color: "#fff",
          margin: "1rem",
        }}
      >
        {userInput}
      </div>
    </div>
  );
}
