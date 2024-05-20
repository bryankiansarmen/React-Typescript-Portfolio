import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const RootPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
