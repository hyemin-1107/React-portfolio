import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/theme";

import Main from "./components/Main";
import SideNav from "./components/SideNav";
import AboutContents from "./components/AboutContents";
import ContactContents from "./components/ContactContents";
import FooterContents from "./components/FooterContents";
import ScrollTopButtonContents from "./components/ScrollTopButtonContents";
import ProjectContents from "./components/ProjectContents";
import FunctionImplementation from "./components/FunctionImplementation";
import ThemeToggleButton from "./styles/ThemeToggleBotton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const themeToggle = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
      <Body>
        <GlobalStyle />
        <ThemeToggleButton isDarkMode={isDarkMode} themeToggle={themeToggle} />
        <Main />
        <SideNav />
        <AboutContents />
        <ProjectContents />
        <FunctionImplementation />
        <ContactContents />
        <FooterContents />
        <ScrollTopButtonContents />
      </Body>
    </ThemeProvider>
  );

};

export default App;

const Body = styled.body`
  margin: 0 auto;

  width: 1070px;

  @media (width < 768px) {
    width: 100%;
  }
`;
