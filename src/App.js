import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};

export default App;
