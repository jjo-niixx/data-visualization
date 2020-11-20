import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/root-reducer";
import GlobalStyle from "./Styles/GlobalStyle";
import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer);

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
