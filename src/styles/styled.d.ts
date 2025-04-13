import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    boxShadow: string;
    projectNumber: string;
    borderBottom: string;
  }
};