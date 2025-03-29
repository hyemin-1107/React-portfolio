import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import AboutContents from "./components/AboutContents";
import ContactContents from "./components/ContactContents";
import FooterContents from "./components/FooterContents";
import ScrollTopButtonContents from "./components/ScrollTopButtonContents";
import ProjectContents from "./components/ProjectContents";
import FunctionImplementation from "./components/FunctionImplementation";


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.bgColor};
    transition: background-color 0.3s ease, color 0.3s ease;
    
  }
  h1, h2, h3, p, span, li, div, section, p.active, em,{
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;   
  }
  .sub, .contact{
      box-shadow: ${({ theme }) => theme.boxShadow};
    }
`;

const lightTheme = {
  bgColor: "white",
  textColor: "#555",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 10px -2px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset",
};

const darkTheme = {
  bgColor: "#202124",
  textColor: "white",
  boxShadow: "rgba(255, 255, 255, 0.3) 0px 2px 4px, rgba(255, 255, 255, 0.3) 0px 7px 10px -2px, rgba(255, 255, 255, 0.3) 0px -2px 0px inset",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
      <Body>
        <GlobalStyle />
        <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? "😀 Light Mode" : "😀 Dark Mode"}
        </ThemeToggleButton>
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

const ThemeToggleButton = styled.button`
  position: absolute;
  right: 15%;
  
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};

  margin: 20px;
  padding: 8px 24px;

  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    // background-color: ${({ theme }) => (theme.bgColor === "white" ? "#ddd" : "#444")};
  }
  
`;