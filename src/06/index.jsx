import React, { Component } from "react";
import ReactDom from "react-dom";

class Child extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            onClick(Math.random().toString());
          }}
        >
          child button
        </button>
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onClick = text => {
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <Child onClick={this.onClick} />
        <span>{text}</span>
      </div>
    );
  }
}

ReactDom.render(<Parent />, document.getElementById("root"));
