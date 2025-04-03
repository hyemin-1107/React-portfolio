import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.bgColor};
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    h1, h2, h3, p, span, li, div, section, .active, em, .button-text{
        color: ${({ theme }) => theme.textColor};
        transition: background-color 0.3s ease, color 0.3s ease;   
    }
    .sub , .contact {
      box-shadow: ${({ theme }) => theme.boxShadow};
    }
    .project-number{
        opacity: ${({ theme }) => theme.projectNumber};
    }
    .active{
        border-bottom: ${({ theme }) => theme.borderBottom};
    }
`;

export default GlobalStyle;