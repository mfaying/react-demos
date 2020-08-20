import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.ref = React.createRef();
  }

  onChange = () => {
    this.setState({
      value: this.ref.current.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input ref={this.ref} onChange={this.onChange}></input>
        <span>{value}</span>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
