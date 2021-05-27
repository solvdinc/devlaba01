import * as React from "react";

class Button extends React.Component {
  render() {
    return (
      <button type="button" {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

/**
 * Basic sample of Button component
 */
class Title extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("%c [TITLE] UNSAFE_componentWillMount", "color: yellow");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("%c [TITLE] UNSAFE_componentWillReceiveProps", "color: yellow");
  }

  shouldComponentUpdate() {
    console.log("%c [TITLE] shouldComponentUpdate", "color: yellow");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("%c [TITLE] UNSAFE_componentWillUpdate", "color: yellow");
  }

  componentDidUpdate() {
    console.log("%c [TITLE] componentDidUpdate", "color: yellow");
  }

  componentDidMount() {
    console.log("%c [TITLE] componentDidMount", "color: yellow");
  }

  componentWillUnmount() {
    console.log("%c [TITLE] componentWillUnmount", "color: yellow");
  }

  render() {
    console.log("%c [TITLE] render", "color: yellow");
    return <h1>{this.props.children}</h1>;
  }
}

export default class App extends React.Component {
  state = {
    name: "Alice",
    surname: "Any",
    visible: true,
    house: {
      name: "Misha"
    }
  };

  updateName = () => {
    this.setState({
      name: this.state.name === "Alice" ? "Bob" : "Alice"
    });
  };

  updateSurname = () => {
    this.setState({
      name: this.state.name === "Any" ? "Any 2" : "Any"
    });
  };

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  UNSAFE_componentWillMount() {
    console.log("%c [APP] UNSAFE_componentWillMount", "color: green");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("%c [APP] UNSAFE_componentWillReceiveProps", "color: green");
  }

  // shouldComponentUpdate() {
  //   console.log("%c [APP] shouldComponentUpdate", "color: green");
  //   return true;
  // }

  UNSAFE_componentWillUpdate() {
    console.log("%c [APP] UNSAFE_componentWillUpdate", "color: green");
  }

  componentDidUpdate() {
    console.log("%c [APP] componentDidUpdate", "color: green");
  }

  componentDidMount() {
    console.log("%c [APP] componentDidMount", "color: green");
  }

  componentWillUnmount() {
    console.log("%c [APP] componentWillUnmount", "color: green");
  }

  render() {
    console.log("%c [APP] render", "color: green");
    return (
      <div>
        {this.state.visible ? <Title name={this.state.name}>Hello {this.state.name}</Title> : null}
        <Button onClick={this.toggleVisibility}>Toggle Title Visibility</Button>
        <Button onClick={this.updateName}>Toggle Name</Button>
        <Button onClick={this.updateSurname}>Toggle Surname</Button>
      </div>
    );
  }
}