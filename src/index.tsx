import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.less";
import { addValue } from "./utils";

let div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(
  <div className={"main-frame"}>
    <div>标题</div>
    <div>菜单</div>
    <div>内容</div>
    <div className="pic">{"name"}</div>
  </div>,
  div
);

console.log(addValue(1, 2));



