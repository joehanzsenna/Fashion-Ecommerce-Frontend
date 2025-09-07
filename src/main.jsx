import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <div className="max-w-[1440px] w-[100%] m-[auto]">
        <App />
      </div>
    </ShopContextProvider>
  </BrowserRouter>
);
