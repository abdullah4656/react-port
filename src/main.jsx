import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Team from "./componenets/Team.jsx";
import ContactForm from "./componenets/ContactForm.jsx";
import Servicessep from "./componenets/Servicessep.jsx";

import Portfoliosep from "./componenets/Portfoliosep.jsx";
import Aboutussep from "./componenets/Aboutussep.jsx";
const routerr = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "team",
    element: <Team />,
  },
  {
    path: "contact",
    element: <ContactForm />,
  },
  {
    path: "services",
    element: <Servicessep />,
  },
  {
    path: "about",
    element: <Aboutussep />,
  },
  {
    path: "portfolio",
    element: <Portfoliosep />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerr} />{" "}
  </StrictMode>
);
