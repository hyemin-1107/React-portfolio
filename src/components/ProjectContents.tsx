import styled from "styled-components";
import SubProjectContents from "./SubProjectContents";
import img_com from '../images/img_com.png'
import img_homepage from '../images/img_homepage.png'
import img_portfolio from '../images/img_portfolio.png'
import img_aws from '../images/img_aws.png'

const ProjectContents = () => {

  return (
    <>
      <ProjectTitle >
        <h2 id="nav_subproject">
          PROJECT
        </h2>
        <div></div>
      </ProjectTitle>
      <Project>
        <SubProjectContents />
        <ProjectWrap id="nav_projectclone">
          <div id="content_clone" className="content">
            <ProjectImg>
              <ProjectWrapImg src={img_com} alt="로고" />
              <ProjectHomepageImg src={img_homepage} alt="로고" />
              <ImgShadow></ImgShadow>
            </ProjectImg>
          </div>
          <ProjectText>
            <ProjectNumber className="project-number">02</ProjectNumber>
            <h3>
              Sooldamhwa Homepage clone coding
            </h3>
            <p>
              전통주를 소개하고 구독 시스템을 통해
              매달 집으로 배송 해주는 사이트 입니다.
            </p>
            <span>
              메인페이지, 구독페이지, 로그인페이지 구현
            </span>
            <em>
              · React
            </em>
            <a href="https://hyemin-1107.github.io/" target='_blank' rel="noreferrer">
              Go To</a>
            <a href="https://rust-collarbone-363.notion.site/a0982db29b504af1b8227c82457264dc?pvs=4" target='_blank' rel="noreferrer">
              Notion Review</a>
            <a href="https://github.com/hyemin-1107/React-router/tree/main/sooldamhwa" target='_blank' rel="noreferrer">
              Github Source code</a>
          </ProjectText>
        </ProjectWrap>
        <ProjectWrap id="nav_projectportfolio">
          <ProjectText id="content_portfolio" className="content">
            <ProjectNumber className="project-number">03</ProjectNumber>
            <h3>
              Portfolio Site
            </h3>
            <p>
              포트폴리오를 위한 1인 프로젝트. <br />
              색상, 동적 이벤트, 버튼의 통일감에 초점을 두었습니다.
            </p>
            <em style={{ marginBottom: "20px" }}>
              · React
            </em>
            <a href="https://rust-collarbone-363.notion.site/React-Portfolio-f547ae6274bf4962ac150bca55ee4ab9?pvs=4" target='_blank' rel="noreferrer">
              Notion Review</a>
            <a href="https://github.com/hyemin-1107/React-router/tree/main/react-portfolio" target='_blank' rel="noreferrer">
              Github Source code
            </a>
          </ProjectText>
          <div>
            <ProjectImg>
              <ProjectWrapImg src={img_com} alt="로고" />
              <ProjectHomepageImg src={img_portfolio} alt="로고" />
              <ImgShadow></ImgShadow>
            </ProjectImg>
          </div>
        </ProjectWrap>
        <ProjectWrap id="nav_projectaws">
          <div id="content_aws" className="content">
            <ProjectImg>
              <ProjectWrapImg src={img_com} alt="로고" />
              <ProjectHomepageImg src={img_aws} alt="로고" />
              <ImgShadow></ImgShadow>
            </ProjectImg>
          </div>
          <ProjectText>
            <ProjectNumber className="project-number">04</ProjectNumber>
            <h3>
              AWS 서버 배포
            </h3>
            <p>
              Elastic Compute Cloud 인스턴스를 이용하여 서버를 실행하는 방법에 대해서 알아봤습니다.
            </p>
            <span>
              배포 과정을 블로그로 정리 했습니다.
            </span>
            <em style={{ marginBottom: "30px" }}>
              · AWS
            </em>
            <a href="https://rust-collarbone-363.notion.site/AWS-19812f827908477c8ca605fb14f605a9?pvs=4" target='_blank' rel="noreferrer">
              Notion Review</a>
          </ProjectText>
        </ProjectWrap>
      </Project>
    </>
  )
};

export default ProjectContents;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 200px;
  gap : 20px;
  
  h2{
    font-size: 30px;
    font-weight: 600;
  }

  div{
    margin-top: 5px;
  
    width: 100%;  

    border-bottom: 1px solid #6E6D70;
  }
`

const ProjectWrap = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 230px 0 120px;
`

const Project = styled.article`
  display: flex;
  flex-direction: column;
  
  gap: 100px;
`

const ProjectImg = styled.div`
  position: relative;
`

const ProjectWrapImg = styled.img`
  position: relative;
  
  width: 600px;
  height: 410px;
`

const ProjectHomepageImg = styled.img`
  position: absolute;
  top: 19px;
  left: 57px;
  
  width: 496px;
  height: 271px;
`

const ImgShadow = styled.div`
  position: absolute;
  bottom: -10px;
  left: 99px;
  z-index: -1;
  
  width: 398px;
  height: 27px;
  
  box-shadow: 10px 10px 10px rgba(0,0,0,.2);
  border-radius: 100%;
`

const ProjectText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  gap: 18px;
 
  padding: 0 40px;
 
  font-size: 18px;
  
  h3{
    margin-bottom: 8px;
    font-size: 22px;
  }
  
  em{
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 600;
  }

  a{
    text-align: center;

    padding: 6px;

    font-size: 16px;

    box-sizing: border-box;
    background-color: #fff;
    
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 5px 10px -1px, 0px 0px 0px inset;  transition: all 200ms cubic-bezier(.23, 1, 0.32, 1);
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #6E6D70;
      
      box-shadow: rgba(0, 0, 0, 0.2) 0 8px 15px;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`

const ProjectNumber = styled.div`
  position: absolute;
  top: -140px;
  right: 48%;

  font-size: 170px;
  font-weight: 900;

  // z-index: -1;
  opacity: .1;
`