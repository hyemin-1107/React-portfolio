import { useState }from "react";
import styled, { keyframes } from "styled-components";
import useSetShow from "../utils/useSetShow"

const ScrollTopButtonContents = () => {

    const [showUnder, setShowUnder] = useState<boolean>(false);
    useSetShow(setShowUnder);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };

    return (
        <>
            {showUnder && (
                <ScrollContainer>
                    <ToTopButton onClick={scrollToTop} type="button">Top</ToTopButton>
                </ScrollContainer>
            )}
        </>
    )
};

export default ScrollTopButtonContents;

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 54px;
  z-index: 100;
`

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(30%, 0, 0);
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
`

const ToTopButton = styled.button`
  padding: 12px 22px;
  
  font-size: 16px;
  font-weight: 500;
  
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 3px 7px 1px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset;
  border-radius: 4px;

  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  cursor: pointer;
  animation: ${fadeInRight} 2s ease-out;

&:hover {
  color: #fff;
  background-color: #6E6D70;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
`
