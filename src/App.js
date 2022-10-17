import "../src/styles/App.css";
import React from "react";
import Render from "../src/components/Render";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import AgeChecker from "./components/AgeChecker";
import Conditional from "./components/Conditional";
function App() {
  return (
    <>
      <Render />
      <ClassComponent />
      <Counter />
      <ControlledInput />
      <AgeChecker />
      <Conditional />
    </>
  );
}

export default App;
