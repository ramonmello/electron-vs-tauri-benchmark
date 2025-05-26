import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactFlowExample from "./pages/ReactFlowExample";
import { RootLayout } from "@/components/RootLayout";

import "./styles/global.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<ReactFlowExample />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
