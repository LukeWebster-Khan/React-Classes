import React from "react";

class Chance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {expression ? <h1>Yes!</h1> : <h1>No!</h1>}
      </div>
    );
  }
}

export default Chance;
