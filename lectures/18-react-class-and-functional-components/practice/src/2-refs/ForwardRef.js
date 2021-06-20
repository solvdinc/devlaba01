import React from "react";

const MyInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

class ForwardRef extends React.Component {
  textInputRef = React.createRef();

  focusInput = () => {
    console.log("textInput", this.textInputRef);
    this.textInputRef.current.focus();
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={this.focusInput}>Focus on Input Box</button>
        <br />
        <br />
        <MyInput ref={this.textInputRef} />
        {/* <input ref={this.textInputRef} /> */}
      </div>
    );
  }
}

export default ForwardRef;
