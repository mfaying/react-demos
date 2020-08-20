import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  static defaultProps = {
    value: ""
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return null;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
