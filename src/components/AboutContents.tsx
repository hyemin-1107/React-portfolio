import styled from "styled-components";
import ico_html from "../images/ico_html.png";
import ico_css from "../images/ico_css.png";
import ico_figma from "../images/ico_figma.png";
import ico_javascript from "../images/ico_javascript.png";
import ico_jquery from "../images/ico_jquery.png";
import ico_typescript from "../images/ico_typescript.png"
import ico_react from "../images/ico_react.png";
import ico_sc from "../images/ico_sc.png";
import ico_github from "../images/ico_github.png";

interface SkillIcoProps {
  "data-text": string;
}

const AboutContents = () => {
  return (
    <About id="content_skill" className="content">
      <Skill id="nav_skill">
        SKILL
        <ul>
          {SKILL_DATA.map((data) => {
            return (
              <li key={data.id}>
                <SkillIco data-text={data.text}>
                  <img src={data.imgSrc} alt={data.text} />
                </SkillIco>
              </li>
            );
          })}
        </ul>
      </Skill>
      <SkillList />
      <Experience>
        <section>
          EXPERIENCE
          <div>CERTIFICATE</div>
        </section>
        <ExperienceLine></ExperienceLine>
        <section>
          <ExperienceText>Figma활용 UI/UX 퍼블리셔 과정</ExperienceText>
          <ExperienceText>웹디자인기능사</ExperienceText>
        </section>
      </Experience>
    </About>
  );
};

export default AboutContents;

const SkillList = () => {
  return (
    <SkillLanguage>
      <li>
        HTML
        <ul>
          <li>시멘틱 마크업</li>
          <li>웹 표준/접근성</li>
        </ul>
      </li>
      <li>
        CSS
        <ul>
          <li>Animation</li>
          <li>Media Query 사용경험</li>
          <li>styled-components</li>
        </ul>
      </li>
      <li>
        JAVASCRIPT
        <ul>
          <li>ES6</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Jquery</li>
        </ul>
      </li>
      <li>
        ETC
        <ul>
          <li>Figma</li>
          <li>Github</li>
        </ul>
      </li>
    </SkillLanguage>
  );
};

const About = styled.ul`
  margin: 100px 0;
`;

const Skill = styled.li`
  padding-top: 60px;

  text-align: center;

  font-size: 24px;
  font-weight: 500;

  ul {
    display: flex;
    justify-content: center;

    margin: 30px 0 0;
    gap: 47px;

    padding: 30px 0;

    border-top: 1px solid #6e6d70;
  }
  span {
    position: absolute;

    padding: 2px;

    font-size: 14px;

    border: 1px solid #6e6d70;
    border-radius: 5px;
  }
`;

const SkillIco = styled.div<SkillIcoProps>`
  position: relative;
  display: inline-block;

  img {
    width: 36px;
  }

  &::after {
    content: attr(data-text); // 속성 추가
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%); // 중앙 정렬

    background-color: #6e6d70;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap; // 줄바꿈 x

    opacity: 0;

    transition: 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const SkillLanguage = styled.ul`
  display: flex;
  justify-content: space-around;

  margin-top: 80px;

  ul {
    margin: 20px 0 0;

    padding: 20px 0;
  }

  > li {
    font-size: 24px;
    font-weight: 500;
  }

  ul > li {
    padding-bottom: 10px;

    font-size: 16px;
    font-weight: 400;
  }
`;

const Experience = styled.div`
  padding: 100px 0;

  font-size: 24px;
  font-weight: 500;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    text-align: center;
    padding: 30px 0 0;
  }
`;

const ExperienceText = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const ExperienceLine = styled.div`
  margin: 30px 0 0;

  border-bottom: 1px solid #6e6d70;
`;

const SKILL_DATA = [
  {
    id: 1,
    imgSrc: ico_html,
    text: "HTML",
  },
  {
    id: 2,
    imgSrc: ico_css,
    text: "CSS",
  },
  {
    id: 3,
    imgSrc: ico_javascript,
    text: "JavaScript",
  },  
  {
    id: 4,
    imgSrc: ico_typescript,
    text: "TypeScript",
  },
  {
    id: 5,
    imgSrc: ico_react,
    text: "React",
  },
  {
    id: 6,
    imgSrc: ico_jquery,
    text: "Jquery",
  },
  {
    id: 7,
    imgSrc: ico_figma,
    text: "Figma",
  },
  {
    id: 8,
    imgSrc: ico_sc,
    text: "Styled-components",
  },
  {
    id: 9,
    imgSrc: ico_github,
    text: "Github",
  },
];
