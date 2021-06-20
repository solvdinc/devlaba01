import React from "react";


class Ref extends React.Component {
  // textInputRef = React.createRef();
  textInputRef = null;

  focusInput = () => {
    console.log("textInput", this.textInputRef);
    this.textInputRef.focus();
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={this.focusInput}>Focus on Input Box</button>
        <br />
        <br />
        <input ref={(el) => this.textInputRef = el} />
      </div>
    );
  }
}

export default Ref;
