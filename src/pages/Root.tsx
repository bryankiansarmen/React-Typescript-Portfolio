import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/Navigation/Navigation";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const RootPage = () => {
  return (
    <DivContainer>
      <NavigationHeader />
      <Main>
        <Outlet />
      </Main>
    </DivContainer>
  );
};

export default RootPage;
