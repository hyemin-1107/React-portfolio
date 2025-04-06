import { useState, useRef } from "react";
import styled from "styled-components";
import { onClickModal } from "../utills/onClickModal";
import { useOnClickOutside } from "../utills/useOnClickOutside";
import img_pagination from '../images/img_pagination.png'
import img_commentlike from '../images/img_commentlike.png'
import ico_click from '../images/ico_click.png'
import ico_click_hover from '../images/ico_click_hover.png'
import ico_close from '../images/ico_close.png'
import video_commentlike from '../images/video_commentlike.gif'
import video_pagination from '../images/video_pagination.gif'

const SubProjectContents = () => {

  const [isCommentModal, setIsCommentModal] = useState<boolean>(false);
  const [isPaginationModal, setIsPaginationModal] = useState<boolean>(false);

  const ButtonMmodalRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: modalContainerRef, handler: () => setIsCommentModal(false) });
  useOnClickOutside({ ref: modalContainerRef, handler: () => setIsPaginationModal(false) });


  return (
    <SubProjectWrap id="content_subproject" className="content">
      <SubProject className="sub">
        <SubProjectNumber className="project-number">1-1</SubProjectNumber>
        <SubProjectImg src={img_commentlike} alt="코멘트,좋아요버튼"></SubProjectImg>
        <SubProjectText>
          <h3>Comment, Like </h3>
          <p>
            Comment를 남길 수 있고 Like버튼을 누르고 취소 할 수 있는 <br />페이지 입니다.
          </p>
          <em>
            · React
          </em>
          <button
            ref={ButtonMmodalRef}
            onClick={() =>
              onClickModal(isCommentModal, setIsCommentModal)}>
            <ClickImg src={ico_click} alt="클릭" />
            <ClickImgHover src={ico_click_hover} alt="클릭" />
            Click for more
          </button>
          <a href="https://github.com/hyemin-1107/React-router/tree/main/CommentLike"
            target='blank' rel="noreferrer">Github Source code</a>
        </SubProjectText>
      </SubProject>
      {isCommentModal && (
        <ModalWrap>
        <ModalContainer ref={modalContainerRef}>
          <ModalHeader>
            <h3 className="text-dark">Comment, Like</h3>
            <ModalCloseButton
              onClick={() =>
                onClickModal(isCommentModal, setIsCommentModal)}>
              <ModalCloseIco src={ico_close} alt="닫기" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalText>
            <img src={video_commentlike} alt="코멘트,좋아요버튼" />
            <div className="text-dark">
              <p> 댓글을 저장할 state와 input comment를 저장하는 state를 작성합니다.</p>
              <p> 댓글, e.target.value를 state에 저장하는 onChange 함수 작성합니다.</p>
              <p> onChange 함수를 댓글 입력 input tag에 적용해줍니다.</p>
              <p> Button을 클릭 시, input 내용을 저장합니다.</p>
              <p> .map()함수를 활용해서 userID와 comment를 넣어줍니다.</p>
              <p> @ant-design/icons 라이브러리를 import 해주고, 클릭시 체크되고 해제되는 state를 작성합니다.</p>
              <p> 체크시 모양이 변화되는 아이콘을 랜더링 합니다.</p>
            </div>
          </ModalText>
        </ModalContainer>
        </ModalWrap>
      )}
      <SubProject className="sub">
        <SubProjectNumber className="project-number">1-2</SubProjectNumber>
        <SubProjectImg src={img_pagination} alt="페이지네이션"></SubProjectImg>
        <div></div>
        <SubProjectText>
          <h3>Login, Pagination</h3>
          <p>
            Login을 하면 다음 페이지로 이동하며 받아온 외부API를 Modal창과 Pagination으로 랜더링 합니다.
          </p>
          <em>
            · React
          </em>
          <button
            onClick={() =>
              onClickModal(isPaginationModal, setIsPaginationModal)}>
            <ClickImg src={ico_click} alt="클릭" />
            <ClickImgHover src={ico_click_hover} alt="클릭" />
            Click for more
          </button>
          <a href="https://github.com/hyemin-1107/React-router/tree/main/pagination"
            target='blank' rel="noreferrer">Github Source code</a>
        </SubProjectText>
      </SubProject>
      {isPaginationModal && (
        <ModalWrap>
        <ModalWrapPagination ref={modalContainerRef}>
          <ModalHeader>
            <h3 className="text-dark">Login, Pagination</h3>
            <ModalCloseButton
              onClick={() =>
                onClickModal(isPaginationModal, setIsPaginationModal)}>
              <ModalCloseIco src={ico_close} alt="닫기" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalTextPagination>
            <img src={video_pagination} alt="" />
            <div className="text-dark">
              <p>ID와 PW를 저장하는 state 생성하고 e.target.value 를 state에 저장하는 onChange 함수를 각각의 input tag에 적용합니다.</p>
              <p>ID와 PW를 비교하는 함수 작성, 일치하면 main page로 이동하고 틀릴시 alert()창 띄웁니다.</p>
              <p>현재 페이지 limit, page당 표시할 데이터 수를 설정하고 API를 저장하는 useState를 생성하고 fetch로 API 호출합니다.</p>
              <p>limit props를 가져와서 select박스에 페이지당 보여질 게시물 수를 설정합니다.</p>
              <p>버튼 컴포넌트를 Styled-components로 조건부 스타일링 합니다.</p>
              <p>index 클릭 시 Modal창에 해당 데이터가 자세히 보여지도록 설정합니다.</p>
            </div>
          </ModalTextPagination>
        </ModalWrapPagination>
        </ModalWrap>
      )}
    </SubProjectWrap>
  )
};

export default SubProjectContents;

const ModalWrap = styled.div`
  display: flex;
  position: fixed; 
  top: 0;
  left: 0;

  width: 100vw;  
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
    
  width: 990px;
  height: 570px;
    
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px 0px 0px inset;

  box-sizing: border-box;
  animation: modal 0.5s ease;
  @keyframes modal {
    from {
    opacity: 0;
      transform: translate(-50%, -52%);
    }
    to {
        opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalWrapPagination = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
    
  width: 1140px;
  height: 596px;
    
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px 0px 0px inset;
  box-sizing: border-box;
  
  animation: modal 0.5s ease;
  @keyframes modal {
      from {
      opacity: 0;
        transform: translate(-50%, -52%);
      }
      to {
          opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
`

const ModalHeader = styled.header`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  
  h3{
      margin-left: 10px;
  }
`

const ModalCloseButton = styled.div`
  cursor: pointer;
`

const ModalCloseIco = styled.img`
  display: flex;
  
  margin-right: 10px;
  width: 33px;
  
  opacity: .7;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px 0px 0px inset;
  border-radius: 3px;
  transition: .1s;
  
  &:hover{
      opacity: 1;
      border: 1px solid rgba(0, 0, 0, 0.8);
      transition: .1s;
  }
`

const ModalText = styled.div`
    display: flex;
    align-items: center;
    
    gap: 39px;
    margin-top: 50px;
    img{
      width: 410px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px 0px 0px inset;
    }

div{
    display: flex;
    flex-direction: column;

    gap: 12px;
    margin: 0 16px;

  p{
      position: relative;
      text-align: justify;
      word-break: break-all;
      line-height: 1.6;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  p::before{
    content: '';
    position: absolute;
    top: 7px;
    left: -23px;
    
    width: 14px;
    height: 14px;
    
    background-image: url(${ico_click});
    background-size: cover;
    background-position: center;
  }
}
`

const ModalTextPagination = styled.div`
  display: flex;
  align-items: center;
  
  gap: 39px;
  margin-top: 64px;
  img{
    width: 550px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px 0px 0px inset;
  }

  div{
    display: flex;
    flex-direction: column;

    gap: 12px;
    margin: 0 16px;

    p{
      position: relative;
      text-align: justify;
      word-break: break-all;
      
      line-height: 1.6;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    p::before{
      content: '';
      position: absolute;
      top: 7px;
      left: -23px;
      
      width: 14px;
      height: 14px;
      
      background-image: url(${ico_click});
      background-size: cover;
      background-position: center;
    }
  }
`

const SubProjectWrap = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;

  padding-top: 170px;
`

const SubProject = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0px;
  width: 510px;
  height: 612px;
  
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 10px -2px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset;
`

const SubProjectText = styled.section`
  display: flex;
  flex-direction: column;

  margin: 10px 32px;
  gap: 8px;

  h3{
    font-size: 22px;
  }
  em{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p{
    margin: 8px 0 12px 0;
  } 

  span{
    line-height: 1;
    font-size: 15px;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 4px;
    margin-top: 10px;
    padding: 6px;

    font-size: 16px;

    box-sizing: border-box;
    background-color: #fff;
    
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 5px 10px -1px, 0px 0px 0px inset;
    transition: all .2s;
    cursor: pointer;
    
    &:hover {
      color: #fff;
      background-color: #6E6D70;
      box-shadow: rgba(0, 0, 0, 0.2) 0 8px 15px;
      transform: translateY(-2px);
      :first-child{
        display: none;
      }
      :nth-child(2){
        display: block;
      }
    }
    &:active {
      transform: translateY(0);
    }
  } 

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 4px;
    margin-top: 10px;
    padding: 6px;
    
    font-size: 16px;
    
    box-sizing: border-box;
    background-color: #fff;
    
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 5px 10px -1px, 0px 0px 0px inset;
    transition: all .2s;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #6E6D70;
      
      box-shadow: rgba(0, 0, 0, 0.2) 0 8px 15px;
      transform: translateY(-2px);

      :first-child{
        display: none;
      }
      :nth-child(2){
        display: block;
      }
    }

    &:active {
      transform: translateY(0);
    }
  }
`

const SubProjectNumber = styled.span`
  position: absolute;
  top: -165px;
  left: 10px;

  font-size: 170px;
  font-weight: 900;

  opacity: .1;
  // z-index: -1;
`

const SubProjectImg = styled.img`
  width: 510px;
  height: 310px;
  
  z-index: 1;
  border-radius: 6px 6px 0 0;
`

const ClickImg = styled.img`
  margin-top: 2px;
  
  width: 18px;
`

const ClickImgHover = styled.img`
  display: none;
  
  margin-top: 2px;
  
  width: 18px;
`