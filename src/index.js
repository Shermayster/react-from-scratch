import "./styles.css";
import { render, createTextElement, createElement } from "./utils";

const React = { createElement };
function App() {
  return (
    <div>
      <h1>whooo!</h1>
      <div>bye</div>
    </div>
  );
}

const container = document.getElementById("root");
render(<App />, container);
