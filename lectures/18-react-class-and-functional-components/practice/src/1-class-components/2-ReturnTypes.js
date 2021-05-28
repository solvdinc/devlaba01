import * as React from "react";
// import ReactDOM from "react-dom";

/**
 * Basic sample of Title component
 */
class Title extends React.Component {
  render() {
    return this.props.children && <h1>{this.props.children}</h1>;
  }
}

/**
 * Different return types example
 */
export default class App extends React.Component {
  // portalEl = document.getElementById("no-root");
  render() {
    /**
     * React Elements - basic html tags
     */
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );

    /**
     * React Elements - React component
     */
    // return <Title>Hello World</Title>;

    /**
     * Booleans
     */
    // return true;
    // return false;

    /**
     * null
     */
    // return null;

    /**
     * Strings or numbers
     */
    // return 'Hello World111';
    // return 13;

    /**
     * Portals
     */
    // return ReactDOM.createPortal(<Title>Hello Outside</Title>, this.portalEl);

    /**
     * Arrays
     */
    // return [1, 2, 3];

    /**
     * Fragments
     */
    // return (
    //   <React.Fragment>
    //     <Title>Hello From Fragment</Title>
    //   </React.Fragment>
    // );
  }
}
