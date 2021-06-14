import { StrictMode } from "react";
import ReactDOM from "react-dom";
// defalt exportではなく直接exportにしたので、コンポーネント名を{}で囲う
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
