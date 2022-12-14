import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }
  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
        <p>Current Count: {this.state.counter}</p>
      </>
    );
  }
}

export default Counter;
