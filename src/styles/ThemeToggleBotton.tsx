import styled from "styled-components";
import ico_dark from "../images/ico_dark.png"
import ico_light from "../images/ico_light.png"

interface ThemeToggleProps {
    isDarkMode: boolean;
    themeToggle: () => void;
};

const ThemeToggleButton = ({ isDarkMode, themeToggle }: ThemeToggleProps) => {
  return (
    <ToggleSwitch>
        <img src={isDarkMode ? ico_dark : ico_light} alt="toggleImg" />
        <input type="checkbox" id="theme" checked={isDarkMode} onChange={themeToggle} />
        <label htmlFor="theme"></label>
    </ToggleSwitch>
  );
};

export default ThemeToggleButton;

const ToggleSwitch = styled.div`
  
  position: absolute;
  right: 15%;
  top: 25px;

  display: flex;
  align-items: center;
  gap: 8px;

  img{
    width: 20px;
    height: 20px;
  }

  input {
    display: none;
  }

  label {
    display: block;
    width: 54px;
    height: 26px;
    background: ${({ theme }) => (theme.bgColor === "white" ? "#666" : "#444")};
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  label::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.bgColor};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  input:checked + label {
    background: ${({ theme }) => (theme.bgColor === "white" ? "#888" : "#ddd")};
  }

  input:checked + label::after {
    transform: translateX(25px);
  }
`;