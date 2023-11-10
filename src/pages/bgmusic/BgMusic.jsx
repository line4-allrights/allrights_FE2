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
import { API } from "../../api/axios";

const BgMusic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sort, setSort] = useState("");
  const [sortOptions, setSortOptions] = useState([]);

  const fetchSortOptions = async () => {
    try {
      const response = await API.get(
        "http://127.0.0.1:8000/music/?sort_by=downloads"
      );
      setSortOptions(response.data);
    } catch (error) {
      console.error("정렬 기준을 불러오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchSortOptions();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", searchTerm);
  };

  const handleButtonClick = () => {
    console.log("버튼이 클릭되었습니다.");
  };

  const openSideBar = (menuName) => {
    setIsSideBarOpen(true);
    setActiveMenu(menuName);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
    setActiveMenu("");
  };

  const handleOutsideClick = (e) => {
    if (isSideBarOpen && !e.target.closest("#sideBar")) {
      closeSideBar();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const SortList = [
    { value: "upload_date", name: "최신순" },
    { value: "downloads", name: "다운로드순" },
  ];

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
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

          {/* 카테고리 메뉴바 */}
          <S.Category>
            <S.ExpandedBox isOpen={isSideBarOpen}>
              <S.ExContainer>
                <S.Genre>
                  <S.CategoryText>
                    힙합<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    블루스<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    클래식<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    포크<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    팝<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    재즈<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    인디<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    R&B<br></br>
                  </S.CategoryText>
                  <S.CategoryText>락</S.CategoryText>
                </S.Genre>

                <S.Mood>
                  <S.CategoryText>
                    신나는<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    쾌활한<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    우울한<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    평화로운<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    심각한<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    급박한<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    즐거운<br></br>
                  </S.CategoryText>
                  <S.CategoryText>웃긴</S.CategoryText>
                </S.Mood>

                <S.Instrument>
                  <S.CategoryText>
                    어쿠스틱 기타<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    베이스<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    드럼<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    바이올린<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    피아노<br></br>
                  </S.CategoryText>
                  <S.CategoryText>etc</S.CategoryText>
                </S.Instrument>

                <S.Length>
                  <S.CategoryText>
                    1분 이내<br></br>
                  </S.CategoryText>
                  <S.CategoryText>
                    1-5분<br></br>
                  </S.CategoryText>
                  <S.CategoryText>5분 이상</S.CategoryText>
                </S.Length>
              </S.ExContainer>
            </S.ExpandedBox>
          </S.Category>
        </S.SideBarWrapper>
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

        <S.BgMusicBox>
          <S.BgSubTitle>
            <S.BgTitle>배경음악</S.BgTitle>
            <S.StyledSelect
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="" disabled hidden>
                정렬
              </option>
              {SortList.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.name}
                </option>
              ))}
            </S.StyledSelect>
          </S.BgSubTitle>

          <Musiclist />
          <Musiclist />
          <Musiclist />
          <Musiclist />
          <Musiclist />

          <PaginationIcon />

          <S.PhoneMargin>
            <ItemPhone />
          </S.PhoneMargin>
        </S.BgMusicBox>
      </S.BgBox>
    </>
  );
};

export default BgMusic;
