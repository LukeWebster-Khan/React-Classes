import "../src/styles/App.css";
import React from "react";
import Render from "../src/components/Render";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Render />
      <ClassComponent />
      <Counter />
    </>
  );
}

export default App;
