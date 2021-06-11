import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const avatar = form.elements["submit"].value;
    this.props.addPerson(avatar);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <button id="submit" type="submit" value="submit">New avatar</button>
      </form>
    );
  }
}

export default Form;