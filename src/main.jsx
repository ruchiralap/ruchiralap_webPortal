import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FilterProvider from "./Context/FilterProvider";
import CartProvider from "./Context/CartContext";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <FilterProvider>
          <RouterProvider router={Router} />
        </FilterProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
