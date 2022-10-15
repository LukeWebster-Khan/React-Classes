import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.controlFunc = this.controlFunc.bind(this);
  }
  controlFunc(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <>
        <h1>Controlled Input</h1>
        <input onChange={this.controlFunc} />
        <h4>Controlled state:{this.state.input}</h4>
      </>
    );
  }
}

export default ControlledInput;
