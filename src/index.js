import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as ReactDomClinet from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDomClinet.createRoot(container);
root.render(<App />);
