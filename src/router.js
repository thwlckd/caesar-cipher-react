import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import CaesarCiper1 from "./components/CaesarCiper1";
import CaesarCiper2 from "./components/CaesarCiper2";
import CaesarCiper3 from "./components/CaesarCiper3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cc1", element: <CaesarCiper1 /> },
      { path: "cc2", element: <CaesarCiper2 /> },
      { path: "cc3", element: <CaesarCiper3 /> },
    ],
  },
]);

export default router;
