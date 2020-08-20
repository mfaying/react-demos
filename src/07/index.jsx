import React, { Component } from "react";
import ReactDom from "react-dom";

class Child extends Component {
  render() {
    return (
      <div>
        <div>child</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <Child>parent</Child>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
