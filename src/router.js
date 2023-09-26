import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import CaesarCipher1 from "./components/CaesarCipher1";
import CaesarCipher2 from "./components/CaesarCipher2";
import CaesarCipher3 from "./components/CaesarCipher3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cc1", element: <CaesarCipher1 /> },
      { path: "cc2", element: <CaesarCipher2 /> },
      { path: "cc3", element: <CaesarCipher3 /> },
    ],
  },
]);

export default router;
