import styled from "styled-components";

const FooterContents = () => {

    return (
        <Footer>
            <p>Park Hyemin portfolio</p>
        </Footer>
    )

};

export default FooterContents;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
 
  gap: 10px;
  margin-top: 250px;
  padding: 70px 0;

  border-top: 1px solid #6E6D70;
  
  img{
    width: 30px;
  }
`