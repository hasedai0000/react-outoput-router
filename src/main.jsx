import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { TodoProvider } from "./contexts/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode basename={import.meta.env.DEV ? "/" : "/レポジトリ名/"}>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);
