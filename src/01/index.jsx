// 引入所需模块
import React, { Component } from "react";
import ReactDom from "react-dom";

// 编写一个组件
class App extends Component {
  render() {
    // const和var类似，它是ES6中的变量命名关键字，它命名的是一个常量。
    const text = "test";
    // jsx语法
    return <div>{text}</div>;
  }
}

// 将组件渲染到页面中
ReactDom.render(<App />, document.getElementById("root"));
