import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createStore } from "redux";
import { Provider } from "react-redux";
//components
import App from "./components/App";
//reducer
import root from "./reducer/root";

const GlobalStyle = createGlobalStyle`
  ${reset}  
`;

const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
