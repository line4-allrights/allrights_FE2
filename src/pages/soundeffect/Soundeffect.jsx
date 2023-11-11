import styled from "styled-components";
import color from "../../styles/colors";
import ButtonMain from "../../components/button/button-main";
import Check from "../../assets/images/Check.png";
import ItemPhone from "../../components/listItem/item-phone";
import InputSearch from "../../components/input/input-search";
import PostsData from "../../util/posts";
import { useState } from "react";
import PaginationIcon from "../../components/pagination/Pagination";
import * as S from "../bgmusic/style";
import MusicEffect from "../../components/musiclist/Musiceffect"

const EffectContainer = styled.div`
  width:60%;
`

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HomeBanner = styled.div`
  background: linear-gradient(180deg, #16162a 0%, #316ac5 100%);
  width: 100%;
`;

export const HomeExplain = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.2vw;
`;

export const HomeP = styled.p`
  color: ${color.white};
  font-size: 2vw;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 1.8vw;
`;

export const HomeExP = styled.p`
  color: ${color.HomeExp};
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
`;

export const HomeExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.8vw;
  margin-bottom: 1vw;
`;

export const CheckImage = styled.img`
  width: 1.8vw;
  height: 1.8vw;
`;

const Soundeffect = () => {

  const itemsPerPage = 5;
  const [postsData, setPostsData] = useState(PostsData);
  const [currentPage, setCurrentPage] = useState(1);
  
  // 현재 페이지에 따른 데이터 필터링
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = postsData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 처리
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const [sort, setSort] = useState("");

  const SortList = [
    { value: "upload_date", name: "최신순" },
    { value: "downloads", name: "다운로드순" },
  ];

  return (
    <Home>
      <HomeBanner>
        <HomeExplain>
          <HomeExplainContainer>
            <HomeP>
              저작권 걱정 없는 <br />
              <span style={{ fontSize: "1.75vw", fontWeight: 600 }}>
                효과음 50,000+
              </span>
            </HomeP>
            <HomeExP style={{ marginTop: "-1vw" }}>
              누구나 음향 감독이 될 수 있다. <br />
              일상 속 음향 기록을 공유해 보세요. <br />
              당신의 기록이 새로운 창작물을 완성시킵니다 <br />
            </HomeExP>
          </HomeExplainContainer>

          <ButtonContainer>
            <ButtonMain
              buttonText="업로드 하기"
              variant="white"
              linkTo="/Upload"
            />
            <ButtonMain
              buttonText="다운로드 하기"
              onClick={() => {
                const soundSection = document.getElementById("soundContainer");
                if (soundSection) {
                  soundSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </ButtonContainer>

          <CheckImage img src={Check} />
        </HomeExplain>

      </HomeBanner>

      <InputSearch />
      <ItemPhone />

      <S.BgMusicBox style={{width:"70%"}}>
          <S.BgSubTitle>
            <S.BgTitle>효과음</S.BgTitle>
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

          <section id="soundContainer">
            <MusicEffect />
          </section>

          <PaginationIcon />
          </S.BgMusicBox>
    </Home>
  );
};

export default Soundeffect;