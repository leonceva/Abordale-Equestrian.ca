import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import Home from "./routes/Home";
import About from "./routes/About";
import Facilities from "./routes/Facilities";
import Lessons from "./routes/Lessons";
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
          path: "/lessons",
          element: <Lessons />
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
