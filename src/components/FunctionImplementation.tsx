import styled from "styled-components";

const FunctionImplementation = () => {

  return (
    <>
      <ProjectTitle id="nav_function" >
        <h2>
          Function Implementation
        </h2>
        <div></div>
      </ProjectTitle>
      <ProjectWrap id="content_function" className="content">

        <ProjectContainer>
          <h3>Book - Management</h3>          
          <div>
            <p>
              책을 체계적으로 관리할 수 있도록 설계된 도서 관리 웹 애플리케이션입니다. <br />
              사용자는 도서 목록을 확인하고 필요에 따라 도서를 추가하거나 삭제할 수 있으며, 재고 수량을 직접 조정할 수 있습니다. <br />
              JSON 목데이터를 활용하여 기본 데이터를 제공하며, 로컬 스토리지를 이용해 사용자의 변경 사항을 지속적으로 저장하고 관리합니다.
            </p>
            <a href="https://book-management-eight-henna.vercel.app" target='_blank' rel="noreferrer">
            Go To </a>
            <a href="https://github.com/hyemin-1107/book-management-project" target='_blank' rel="noreferrer">
            Github Source code, Review </a>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <h3>Infinite - Scroll</h3>
          <div>
            <p>
              사용자가 스크롤을 내릴 때 자동으로 새로운 데이터를 불러오는 무한 스크롤 기능이 적용된 웹 애플리케이션입니다. <br />
              Intersection Observer API를 활용하여 특정 요소가 화면에 보일 때마다 추가 데이터를 로드하도록 구현되었습니다. <br />
              JSONPlaceholder API에서 데이터를 가져오며, 로딩 상태를 관리하여 사용자 경험을 향상시켰습니다. <br />
              또한, TypeScript로 작성되었고, Docker를 활용하여 컨테이너화하였으며, Nginx를 통해 정적 파일을 서빙하는 환경을 구성하였습니다.
            </p>
            <a href="https://github.com/hyemin-1107/infinite-scroll" target='_blank' rel="noreferrer">
            Github Source code </a>
          </div>
        </ProjectContainer>

      </ProjectWrap>
    </>
  )
};

export default FunctionImplementation;

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
  > :nth-child(2){
      border-top: .5px solid #6e6d70;
      margin-top: 110px;
    }
`

const ProjectContainer = styled.article`
  display: flex;
  justify-content: space-between;

  width: 80%;
  margin: 0 auto;

  padding: 170px 0 60px;

  h3{
    font-size: 22px;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 60%;
    gap: 18px; 
  }

  p{
    word-break: keep-all;
    line-height: 1.7;
    margin-bottom: 30px;
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
