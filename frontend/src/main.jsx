import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseProvider } from "./context/firebase";
// import { Provider } from "react-redux";
// import Store from "./redux/store.js";
import{BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={Store}>
  <React.StrictMode>
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </Provider>
);
