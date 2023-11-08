import {
  Home,
  HomeExplain,
  HomeExplainContainer,
  HomeP,
  HomeExP,
} from "../../pages/soundeffect/Soundeffect.jsx";
import styled from "styled-components";
import colors from "../../styles/colors.js";
import ButtonMain from "../button/button-main.jsx";
import { useState } from "react";

const HomeBanner = styled.div`
  background: ${colors.mainDarkBlue};
  width: 100%;
  margin-top: 10vw;
  margin-bottom: 10vw;
`;

const SearchContainer = styled.div`
  & > *:not(:last-child) {
    margin-right: 0.8vw; 
  }
`;

const SearchInput = styled.input`
  width: 18.95vw;
  height: 2.2vw;
  // flex-shrink: 0;
  border-radius: 1.2vw;
  border: 0.1vw solid #e4e8ef;
  padding: 0 15px;
  align-items: center;
  color: #999;
  font-size: 0.8vw;

  &::placeholder {
    color: #999;
    opacity: 1;
    font-size: 0.8vw;
    align-items: center;
  }
`;

const InputSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    fetch(``) //api 추가해야함
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <Home>
      <HomeBanner style={{ backgroundColor: colors.mainDarkBlue }}>
        <HomeExplain>
          <HomeExplainContainer
            style={{ alignItems: "center", marginBottom: "2vw" }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                border: "none",
                borderRadius: "50%",
                backgroundColor: colors.white,
                marginBottom: "1vw",
              }}
            />
            <HomeP style={{ fontSize: "1.75vw", marginBottom: "2vw" }}>
              키워드로 검색해보세요 <br />
            </HomeP>
            <HomeExP>
              밝은 / 발랄한 / 깨끗한 / 청량한 / 경쾌한 / 어두운 / 오싹한 /
              웅장한 / 급박한 <br />
              <span
                style={{ textDecorationLine: "underline", lineHeight: "220%" }}
              >
                간단한 검색어로 원하는 자료를 찾아보세요!
              </span>
            </HomeExP>
          </HomeExplainContainer>

          <SearchContainer>
            <SearchInput
              placeholder="검색어를 입력하세요"
              value={search}
              onChange={handleSearchInputChange}
            />
            <ButtonMain buttonText="검색" onClick={handleSearch} />
          </SearchContainer>
        </HomeExplain>
      </HomeBanner>
    </Home>
  );
};

export default InputSearch;
