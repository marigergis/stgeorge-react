import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router'

import HomePage from "./pages/HomePage.tsx";
import ContactPage  from "./pages/ContactPage.tsx";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";

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