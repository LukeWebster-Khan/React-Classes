import React from "react";

class AgeChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: "",
    };
  }
  submit() {}
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    return (
      <>
        <hr></hr>
        <h1>{buttonOne}</h1>
      </>
    );
  }
}

export default AgeChecker;
