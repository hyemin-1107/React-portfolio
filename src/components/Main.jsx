import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import img_profile from "../images/img_profile.png";

const Main = () => {
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAlert(true);
    }, 1800);
  },[]);

  return (
    <>
      <Header>
        <Typewriter
          options={{
            strings: ["Park Hyemin Portfolio "],
            autoStart: true,
            loop: true,
            pauseFor: 10000,
            delay: 50,
          }}
        />
      </Header>
      <MainContent>
        {isAlert && (
          <>
            <div>
              <ImgFrame></ImgFrame>
              <ProfileImg src={img_profile} alt="profile" />
            </div>

            <ProfileText>
              <div>Front-End 신입 개발자 박혜민 입니다.</div>
              <ProfileTextAbout>
                <div>
                  안녕하세요! <br />
                  저는 어릴 적부터 무언가 그리고 만드는 것을 좋아했습니다.
                  <br />
                  백지 상태에서 나만의 세상을 그려나가는 과정이 즐거웠고,
                  <br />
                  이것이 제 삶의 큰 부분을 차지하게 되었습니다.
                </div>
                <div>
                  퍼블리셔 수업을
                  시작으로 JavaScript를 접하게 되어 프로그래밍에 발을
                  디뎠습니다. 이렇게 시작한 공부는 확장되어 Front-End까지 관심을
                  가지게 되었습니다.
                </div>
                <div>
                  웹 개발을 공부하면서 항상 사용자의 입장에서 생각하는 습관을
                  들였습니다. 웹 접근성과 표준화를 중요하게 생각하고, 이를
                  바탕으로 <br /> 사용자 친화적인 웹 페이지를 제작하는 것을
                  목표로 하고 있습니다.
                </div>
              </ProfileTextAbout>
            </ProfileText>
          </>
        )}
      </MainContent>
    </>
  );
};

export default Main;

const Header = styled.h1`
  text-align: center;

  padding: 140px 0;

  font-size: 40px;
  font-weight: 600;

  border-bottom: 1px solid #6e6d70;

  @media (width < 768px) {
  }
`;

const MainContent = styled.article`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 100px 0 200px;

  height: 328px;

  @media (width < 768px) {
  }
`;

const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(-5%, 0, 0);
	}
	100% {
		opacity: .9;
		transform: translateZ(0);
	}
`;

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(30%, 0, 0);
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
`;

const ProfileImg = styled.img`
  width: 440px;

  border: 1px solid #6e6d70;
  border-radius: 4px;
  opacity: 0.9;

  animation: ${fadeInLeft} 2s ease-out;
  @media (width < 768px) {
  }
`;

const ImgFrame = styled.div`
  position: absolute;
  top: 13px;
  left: 68px;

  width: 450px;
  height: 343px;

  border: .5px solid #6e6d70;
  border-radius: 4px;
  animation: ${fadeInRight} 2s ease-out;

  @media (width < 768px) {
  }
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
    opacity: 1;
	}
`;

const ProfileText = styled.div`
  margin-left: 30px;
  text-align: end;

  font-size: 24px;
  font-weight: 500;

  animation: ${fadeIn} 2s ease-out;

  @media (width < 768px) {
  }
`;

const ProfileTextAbout = styled.div`
  margin-top: 40px;

  width: 470px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;

  div {
    margin-top: 10px;
  }

  @media (width < 768px) {
  }
`;
