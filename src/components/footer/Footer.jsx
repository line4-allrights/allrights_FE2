import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import insta from "../../assets/images/footer_insta.png";
import github from "../../assets/images/footer_github.png";
import logo from "../../assets/images/AllRights.png";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterLeft>
          <S.FooterMainLogo src={logo} alt="logo" />
          <S.FooterCopyRight>
            우리는 당신의 모든 창작 활동과 함께 합니다.<br></br> 쉽고 빠르게
            자료를 다운로드하고,<br></br> 당신의 작품을 공유해 보세요.
          </S.FooterCopyRight>
          <S.FooterCopyRight>All Rights reserved by you.</S.FooterCopyRight>
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
          <S.FooterMenu>
            <S.FooterSort>
              <S.FooterSortDetail>Product</S.FooterSortDetail>
              <S.FooterSortDetail>About</S.FooterSortDetail>
              <S.FooterSortDetail>Legal</S.FooterSortDetail>
            </S.FooterSort>
            <S.FooterDetail>
              <S.FooterDetailMenu>
                <Link to="/sound">
                  <S.Styled>효과음</S.Styled>
                </Link>
                <Link to="/music">
                  <S.Styled>배경음악</S.Styled>
                </Link>
                <Link to="/pricing">
                  <S.Styled>요금제</S.Styled>
                </Link>
              </S.FooterDetailMenu>
              <S.FooterDetailMenu>
                <S.FooterDetailMenu2>About Us</S.FooterDetailMenu2>
                <S.FooterDetailMenu2>FaQ</S.FooterDetailMenu2>
              </S.FooterDetailMenu>
              <S.FooterDetailMenu>
                <S.FooterDetailMenu2>이용약관</S.FooterDetailMenu2>
                <S.FooterDetailMenu2>저작권 안내</S.FooterDetailMenu2>
              </S.FooterDetailMenu>
            </S.FooterDetail>
          </S.FooterMenu>
          <S.FooterCopyRight2>
            <S.CopyRight>멋쟁이 사자처럼 , South Korea</S.CopyRight>
            <S.CopyRight>© 2023 All Rights. All rights reserved.</S.CopyRight>
          </S.FooterCopyRight2>
        </S.FooterRight>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
