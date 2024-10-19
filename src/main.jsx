  import { StrictMode, Suspense, lazy } from "react";
  import { createRoot } from "react-dom/client";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import Loader from "./componenets/Loader.jsx"; 
  import "./index.css";
  import ScrolltoTop from "./componenets/ScrolltoTop.jsx"; 


  const App = lazy(() => import("./App.jsx"));
  const Team = lazy(() => import("./componenets/Team.jsx"));
  const ContactForm = lazy(() => import("./componenets/ContactForm.jsx"));
  const Servicessep = lazy(() => import("./componenets/Servicessep.jsx"));
  const Portfoliosep = lazy(() => import("./componenets/Portfoliosep.jsx"));
  const Aboutussep = lazy(() => import("./componenets/Aboutussep.jsx"));


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<Loader />}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <ContactForm />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Servicessep />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <Aboutussep />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfoliosep />
          </Suspense>
        ),
      },
    ],
    
  );
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider basename={import.meta.env.BASE_URL} router={router}>
       
      </RouterProvider>
    </StrictMode>
  );
