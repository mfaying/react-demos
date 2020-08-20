// 引入所需模块
import React, { Component } from "react";
import ReactDom from "react-dom";

// 编写一个组件
class App extends Component {
  render() {
    const text = "test";
    return <div>{text}</div>;
  }
}

// 将组件渲染到页面中
ReactDom.render(<App />, document.getElementById("root"));
