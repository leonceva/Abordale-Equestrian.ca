import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import About from "./routes/About";
import Facilities from "./routes/Facilities";
import LessonsAndBoarding from "./routes/LessonsAndBoarding";
import Contact from "./routes/Contact";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/facilities",
          element: <Facilities />
        },
        {
          path: "/lessons-and-boarding",
          element: <LessonsAndBoarding />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
