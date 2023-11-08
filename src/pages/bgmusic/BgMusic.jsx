import React, { useState } from "react";
import * as S from "./style";
import Musiclist from "../../components/musiclist/Musiclist";
import ButtonMain from "../../components/button/button-main";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PaginationIcon from "../../components/pagination/Pagination";
import ItemPhone from "../../components/listItem/item-phone";
import BgMusicImg from "../../assets/images/BgMusicImg.png";

const BgMusic = () => {
  // 검색어를 저장하는 상태
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어 입력 시 호출
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼을 눌렀을 때 호출
  const handleSearch = () => {
    // 검색 로직을 이곳에 추가
    console.log("검색어:", searchTerm);
  };

  const handleButtonClick = () => {
    console.log("버튼이 클릭되었습니다.");
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="   검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
      </S.SearchContainer>
      <S.BgMenuContainer>
        <S.BgMenubar>
          <S.BgMenu>장르</S.BgMenu>
          <S.BgMenu>무드</S.BgMenu>
          <S.BgMenu>악기</S.BgMenu>
          <S.BgMenu>디테일</S.BgMenu>
        </S.BgMenubar>
      </S.BgMenuContainer>
      <S.BgBox>
        <S.BgTop>
          <S.BgMention>
            <S.BgIntro>
              퀄리티 높은<br></br>아티스트의 작품
            </S.BgIntro>
            <S.BgIntro2>
              구독 또는 포인트로 퀄리티 높은 배경음악을<br></br>자유롭게 이용해
              보세요
            </S.BgIntro2>
            <S.ButtonBox>
              <S.SubscribeButton onClick={handleButtonClick}>
                구독하기
              </S.SubscribeButton>
            </S.ButtonBox>
          </S.BgMention>
          <S.BgImg img src={BgMusicImg} alt="Background Music" />
        </S.BgTop>
        {/* 배경음악 부분 */}
        <S.BgMusicBox>
          <S.BgTitle>배경음악</S.BgTitle>
          <S.BgSubTitle>
            정렬
            <FontAwesomeIcon icon={faChevronDown} />
          </S.BgSubTitle>
        </S.BgMusicBox>
        <Musiclist />
        <Musiclist />
        <Musiclist />
        <Musiclist />
        <Musiclist />

        <PaginationIcon />

        {/* 이렇게 사용해보세요 */}
        <S.PhoneMargin>
          <ItemPhone />
        </S.PhoneMargin>
      </S.BgBox>
    </>
  );
};

export default BgMusic;
