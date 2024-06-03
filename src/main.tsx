import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import ContactPage  from "./pages/ContactPage.tsx";


const router = createBrowserRouter([
  {
    path: "/stgeorge-react/",
    element: <App />,
    children: [
      {
        path: "/stgeorge-react/",
        element: <HomePage />,
      },
      {
        path: "/stgeorge-react/contact",
        element: <ContactPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)