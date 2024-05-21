import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/Navigation/Navigation";

const RootPage = () => {
  return (
    <>
      <NavigationHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
