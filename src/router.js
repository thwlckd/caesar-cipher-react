import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Encryption from "./components/Encryption";
import Decryption from "./components/Decryption";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "encryption", element: <Encryption /> },
      { path: "decryption", element: <Decryption /> },
    ],
  },
]);

export default router;
