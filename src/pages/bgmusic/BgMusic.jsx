import React, { useState, useRef, useEffect } from "react";
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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // 추가: 활성 메뉴를 추적

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

  // 사이드바 열기
  const openSideBar = (menuName) => {
    setIsSideBarOpen(true);
    setActiveMenu(menuName);
    console.log("사이드바가 열렸습니다.");
  };

  // 사이드바 닫기
  const closeSideBar = () => {
    setIsSideBarOpen(false);
    setActiveMenu("");
    console.log("사이드바가 닫혔습니다.");
  };

  // 외부 클릭 시 사이드바 닫기
  const handleOutsideClick = (e) => {
    if (isSideBarOpen && !e.target.closest("#sideBar")) {
      closeSideBar();
    }
  };

  useEffect(() => {
    // 외부 클릭 이벤트 리스너 등록
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSideBarOpen]);

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

      {/* 카테고리 부분 */}
      <S.BgMenuContainer>
        <S.SideBarWrapper
          ref={(ref) => {
            if (ref) {
              ref.id = "sideBar";
            }
          }}
        >
          <S.BgMenubar>
            <S.BgMenu
              onClick={() => {
                if (activeMenu === "장르") {
                  closeSideBar();
                } else {
                  openSideBar("장르");
                }
              }}
              active={activeMenu === "장르"} // 스타일을 업데이트하기 위한 조건 추가
            >
              장르
            </S.BgMenu>
            <S.BgMenu
              onClick={() => {
                if (activeMenu === "무드") {
                  closeSideBar();
                } else {
                  openSideBar("무드");
                }
              }}
              active={activeMenu === "무드"} // 스타일을 업데이트하기 위한 조건 추가
            >
              무드
            </S.BgMenu>
            <S.BgMenu
              onClick={() => {
                if (activeMenu === "악기") {
                  closeSideBar();
                } else {
                  openSideBar("악기");
                }
              }}
              active={activeMenu === "악기"} // 스타일을 업데이트하기 위한 조건 추가
            >
              악기
            </S.BgMenu>
            <S.BgMenu
              onClick={() => {
                if (activeMenu === "디테일") {
                  closeSideBar();
                } else {
                  openSideBar("디테일");
                }
              }}
              active={activeMenu === "디테일"} // 스타일을 업데이트하기 위한 조건 추가
            >
              디테일
            </S.BgMenu>
          </S.BgMenubar>
          <S.ExpandedBox isOpen={isSideBarOpen} />
        </S.SideBarWrapper>
      </S.BgMenuContainer>

      {/* 메인 부분 */}
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
