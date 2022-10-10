import "../src/styles/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Render from "../src/components/Render";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <>
      <Render />
      <ClassComponent />
    </>
  );
}

export default App;
