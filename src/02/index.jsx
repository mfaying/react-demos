import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  render() {
    const { arr } = this.props;

    return (
      <ul>
        {arr.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

const arr = [1, 2, 3];

ReactDom.render(<App arr={arr} />, document.getElementById("root"));
