import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.controlFunc = this.controlFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  controlFunc(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
      <>
        <h1>Controlled Input</h1>
        <input onChange={this.controlFunc} />
        <h4>Controlled state:{this.state.input}</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            This is a form. When the submit function runs it will update the
            below
          </p>
          <button type="submit">Submit</button>
          <h4>{this.state.submit}</h4>
        </form>
      </>
    );
  }
}

export default ControlledInput;
