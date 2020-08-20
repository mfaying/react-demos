import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  render() {
    var style = {
      color: "red"
    };
    return (
      <span className="text" style={style}>
        test
      </span>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
