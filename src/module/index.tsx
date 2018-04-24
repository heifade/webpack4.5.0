import * as React from "react";
import * as ReactDOM from "react-dom";
// import * as styles from "./index.css";
import { addValue } from "./utils";
let styles = require("./index.less");

let div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(
  <div className={styles["main-frame"]}>
    <div>标题</div>
    <div>菜单</div>
    <div>内容</div>
    <div className={styles["pic"]}>{"name"}</div>
  </div>,
  div
);

console.log(addValue(1, 2));



