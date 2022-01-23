import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./hooks/useLocalStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = createStore(
  rootReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(
  throttle(() => {
    saveState({
      tasks: store.getState().tasks,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
