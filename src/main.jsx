import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FilterProvider from "./Context/FilterProvider";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <RouterProvider router={Router} />
      </FilterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
