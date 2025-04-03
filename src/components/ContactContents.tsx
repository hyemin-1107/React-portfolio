import styled from "styled-components";
import ico_phone from '../images/ico_phone.png'
import ico_mail from '../images/ico_mail.png'
import ico_notion from '../images/ico_notion.png'
import ico_notionhover from '../images/ico_notionhover.png'
import ico_contactgithub from '../images/ico_contactgithub.png'
import ico_github_hover from '../images/ico_github_hover.png'

const ContactContents = () => {

    return (
        <>
            <ProjectTitle id="nav_contact">
                <h2>
                    CONTACT
                </h2>
                <div></div>
            </ProjectTitle>
            <ContactWrap id="content_contact" className="content">
                <ContactBox className="contact">
                    <div>저의 포트폴리오를 봐주셔서 감사합니다.</div>
                    <Contact>
                        <img src={ico_phone} alt=""></img>
                        <div>PHONE</div>
                    </Contact>
                    <div>010 4042 0706</div>
                    <Contact>
                        <img src={ico_mail} alt=""></img>
                        <div>MAIL</div>
                    </Contact>
                    <div>hyem92.11.07@gmail.com</div>
                </ContactBox>
                <StudyPage className="contact">
                    <p>더 많고 자세한 저의 기록들이 있습니다.</p>
                    <a className="button-text" href="https://rust-collarbone-363.notion.site/HYEMIN-PORTFOLIO-28404bfd03854947b1dcdc14aff04170?pvs=4" target='blank' rel="noreferrer">
                        <ContactImg src={ico_notion} alt="" />
                        <ContactImgHover src={ico_notionhover} alt="" />
                        NOTION
                    </a>
                    <a className="button-text" href="https://github.com/hyemin-1107" target='blank' rel="noreferrer">
                        <ContactImg src={ico_contactgithub} alt="" />
                        <ContactImgHover src={ico_github_hover} alt="" />
                        GITHUB
                    </a>
                </StudyPage>
            </ContactWrap>
        </>
    )
};

export default ContactContents;

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

const ContactWrap = styled.section`
  display: flex;
  justify-content: space-around;
  
  margin: 150px 0;
`

const ContactBox = styled.div`
  text-align: center;
  
  padding: 30px;
  
  width: 400px;

  font-size: 20px;
  font-weight: 400;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 10px -2px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset;
  
  div{
    margin-bottom: 6px;
  }
  
  div:nth-child(1) {
    margin-bottom: 42px;
    
    font-size: 18px;
    font-weight: 400;
  }
  
  div:nth-child(3){
    margin-bottom: 40px;
  }
`

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 6px;
  
  img{
    margin-bottom: 3px;
    
    width: 25px;
    height: 24px;
  }
`

const ContactImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21px;
`

const ContactImgHover = styled.img`
  width: 21px;
  display: none;
`

const StudyPage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  gap: 50px;
  padding: 30px;
  width: 400px;

  font-size: 18px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 10px -2px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset;

  p{
    margin-bottom: 8px;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 6px;
    padding: 14px;  

    font-size: 18px;
    font-weight: 500;

    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, .2),
      inset 0 2px 0 hsla(0, 0%, 100%, .1),
      inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
      inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
      inset 0 -.28em 0 hsla(0, 0%, 0%, .1),
      0 .25em .25em hsla(0, 0%, 0%, .05);

    &:hover {
      color: #fff;
      background-color: #6E6D70;
    
      transform: translateY(-1px);
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px,
      /* hsla - 색상 채도 명도 불투명도 */
        inset 0 2px 0 hsla(0, 0%, 100%, .1),
        inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
        inset 0 -.28em 0 hsla(0, 0%, 0%, .1),
        0 .25em .25em hsla(0, 0%, 0%, .05);
        :first-child{
          display: none;
        }
        :nth-child(2){
          display: block;
        }
    }
  
    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`