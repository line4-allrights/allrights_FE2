import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import colors from "./styles/colors.js";
import { Outlet, useLocation } from "react-router-dom";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/background.svg");
  background-size: 100%;
  background-repeat: repeat;
`;

const Wrapper = styled.div`
  padding-top: 4vw;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: repeat;
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const location = useLocation();

  return (
    <BackGroundColor>
      <Header />
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
