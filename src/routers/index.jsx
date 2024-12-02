import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { NAVIGATION_LIST } from "../constants/navigations";

import { TodoPage } from "../pages/todo";
import { TodoCreatePage } from "../pages/create";

export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
]);
