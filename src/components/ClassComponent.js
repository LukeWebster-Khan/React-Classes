import CurrentDate from "./CurrentDate";

import React from "react";
// const ChildComponent = () => {
//   return <div>I am a Child</div>;
// };
const TypesOfCheese = () => {
  return (
    <>
      <h2>Types of Cheeses</h2>
      <ul>
        <li>Cheddar</li>
        <li>Swiss</li>
        <li>Provolone</li>
        <li>Manchego</li>
      </ul>
      {/* Use React to Render Nested Component */}
      <p>
        The current date is: <CurrentDate date={Date()} />
      </p>
    </>
  );
};
const Cheese = () => {
  return (
    <>
      <TypesOfCheese />
    </>
  );
};
class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>This is a class based component</h2>
        {/* <ChildComponent /> */}
        <Cheese />
      </div>
    );
  }
}

export default MyComponent;
