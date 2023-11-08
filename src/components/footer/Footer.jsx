import React from "react";
import * as S from "./style";
import insta from "../../assets/images/footer_insta.png";
import github from "../../assets/images/footer_github.png";
import logo from "../../assets/images/AllRights.png";

function Footer() {
  const handleLinkClick = (link) => {
    if (link === "효과음") {
        window.location.href = "/sound";
    } else if (link === "배경음악") {
        window.location.href = "/music";
    } else if (link === "요금제") {
        window.location.href = "/pricing";
    }
  };

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterLeft>
          <S.FooterMainLogo src={logo} alt="logo" />
          <S.FooterCopyRight style={{marginTop: "0.6vw"}}>2023. © All Rights</S.FooterCopyRight>
          <S.FooterCopyRight style={{marginTop: "0.4vw"}}>All Rights reserved by you.</S.FooterCopyRight>
          <S.FooterCopyRight style={{marginTop: "1.2vw", lineHeight: "1.2vw"}}>
            우리는 당신의 모든 창작 활동과 함께 합니다.<br/>
            쉽고 빠르게 자료를 다운로드하고,<br/>
            당신의 작품을 공유해 보세요.
          </S.FooterCopyRight>
          <S.FooterLogo>
            <a
              href="https://www.instagram.com/line4thon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.FooterInsta src={insta} alt="Instagram" />
            </a>
            <a
              href="https://github.com/line4-allrights"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.FooterGithub src={github} alt="GitHub" />
            </a>
          </S.FooterLogo>
        </S.FooterLeft>
        
        <S.FooterRight>
          <S.RightContainer>
            <S.FooterDiv>
              <S.FooterCopyRight style={{fontWeight: 500}}>Product</S.FooterCopyRight>
              <div style={{marginTop: "0.8vw", display: "flex", flexDirection: "column", gap: "0.3vw"}}>
                  <S.FooterCopyRight onClick={() => handleLinkClick("효과음")} style={{cursor: "pointer"}} onMouseOver={(e) => e.target.style.color = "#16162a"} onMouseOut={(e) => e.target.style.color = "#727782"}>
                    효과음
                  </S.FooterCopyRight>
                  <S.FooterCopyRight onClick={() => handleLinkClick("배경음악")} style={{cursor: "pointer"}} onMouseOver={(e) => e.target.style.color = "#16162a"} onMouseOut={(e) => e.target.style.color = "#727782"}>
                    배경음악
                  </S.FooterCopyRight>
                  <S.FooterCopyRight onClick={() => handleLinkClick("요금제")} style={{cursor: "pointer"}} onMouseOver={(e) => e.target.style.color = "#16162a"} onMouseOut={(e) => e.target.style.color = "#727782"}>
                    요금제
                  </S.FooterCopyRight>
              </div>
            </S.FooterDiv>
            <S.FooterCopyRight style={{fontWeight: 500}}>|</S.FooterCopyRight>
            <S.FooterDiv>
              <S.FooterCopyRight style={{fontWeight: 500}}>About</S.FooterCopyRight>
              <div style={{marginTop: "0.8vw", display: "flex", flexDirection: "column", gap: "0.3vw"}}>
                <S.FooterCopyRight>About us</S.FooterCopyRight>
                <S.FooterCopyRight>FaQ</S.FooterCopyRight>
              </div>
            </S.FooterDiv>
            <S.FooterCopyRight style={{fontWeight: 500}}>|</S.FooterCopyRight>
            <S.FooterDiv>
              <S.FooterCopyRight style={{fontWeight: 500}}>Legal</S.FooterCopyRight>
              <div style={{marginTop: "0.8vw", display: "flex", flexDirection: "column", gap: "0.3vw"}}>
                <S.FooterCopyRight>이용약관</S.FooterCopyRight>
                <S.FooterCopyRight>저작권 안내</S.FooterCopyRight>
              </div>
            </S.FooterDiv>
          </S.RightContainer>

          <S.RightContainer2>
              <S.FooterCopyRight style={{lineHeight: "1.2vw", marginTop: "2.5vw"}}>
                멋쟁이 사자처럼, South Korea<br/>
                © 2023 All Rights. All rights reserved.
              </S.FooterCopyRight>
          </S.RightContainer2>
        </S.FooterRight>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
