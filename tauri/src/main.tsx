import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactFlowExample from "./pages/ReactFlowExample";

import "./styles/global.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactFlowExample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
