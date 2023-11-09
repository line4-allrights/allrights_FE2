import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  min-width: 67vw;
  height: 3vw;
  /* flex-shrink: 0; */
  padding: 1vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  margin-right: 1.5rem;
  outline: none;
  font-size: 0.8vw;
  color: #e4e8ef;
  /* border: 1px solid red; */
`;

export const SearchButton = styled.button`
  min-width: 5vw;
  height: 3vw;
  padding: 0.5vw 1.2vw;
  background-color: #4a88ff;
  border-radius: 1.8vw;
  border: none;
  font-size: 0.8vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e4e8ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    cursor: pointer;
  }
`;

export const BgMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #727782;
  justify-content: center;
  position: relative;

  /* border: 1px solid red; */
`;

export const SideBarWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: 9999; */
  /* border: 1px solid yellow; */
`;

export const BgMenubar = styled.div`
  display: flex;
  position: relative;
  width: 67vw;
  margin-top: 5vw;
  justify-content: space-between;
  color: #e4e8ef;
  top: -0.5vw;
  /* border: 3px solid lightblue; */
`;

// 추가: 사이드바가 열릴 때 나타날 박스 스타일
export const Category = styled.div`
  /* border: 1px solid yellow; */
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const ExpandedBox = styled.div`
  width: 100%; // 화면 너비의 67vw로 설정
  height: 31vw;
  background-color: #bfc5d0;
  position: absolute;
  top: 100%; /* SideBarWrapper 아래에 위치 */
  right: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  z-index: 99999;
  justify-content: center;
  /* border: 1px solid lightgreen; */
`;

export const ExContainer = styled.div`
  /* border: 1px solid red; */
  width: 68vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  margin-top: 2vw;
`;

export const Genre = styled.div`
  /* border: 1px solid red; */
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: -0.8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Mood = styled.div`
  /* border: 1px solid red; */
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: -0.8px;
  margin-left: 0.7vw;
  &:hover {
    cursor: pointer;
  }
`;

export const Instrument = styled.div`
  /* border: 1px solid red; */
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: -0.8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Length = styled.div`
  /* border: 1px solid red; */
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: -0.8px;
  &:hover {
    cursor: pointer;
  }
`;

export const BgMenu = styled.div`
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;

  ${(props) =>
    props.active &&
    `
    color: #E4E8EF;
    text-emphasis: filled #e4e8ef;
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const BgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 78vw;
  margin-bottom: 104px;
  /* border: 1px solid red; */
`;

export const BgTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
  /* border: 1px solid red; */
`;

export const BgMention = styled.div`
  display: flex;
  flex-direction: column;
  width: 38vw;
  /* border: 1px solid pink; */
`;

export const BgIntro = styled.div`
  display: flex;
  /* flex-direction: column; */
  color: #e4e8ef;
  font-size: 2.5vw;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1.4px;
  margin-top: 104px;
`;

export const BgIntro2 = styled.div`
  color: #bfc5d0;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  margin-top: 0.5vw;
`;

export const BgImg = styled.img`
  display: flex;
  width: 40vw;
  height: 28vw;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubscribeButton = styled.button`
  display: inline-flex;
  flex-direction: row;

  min-width: 6vw;
  height: 3vw;
  padding: 0.5vw 1.2vw;
  background-color: #4a88ff;
  border-radius: 1.8vw;
  margin-top: 40px;

  /* padding: 10px 24px; */
  justify-content: center;
  align-items: center;
  /* width: 6vw;
  height: 4vh;
  gap: 10px;
  border-radius: 36px; */
  color: #e4e8ef;
  font-size: 1vw;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.03px;
`;

export const BgMusicBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  justify-content: space-between;
  margin-bottom: 30px;
  /* border: 1px solid red; */
`;

export const BgTitle = styled.div`
  color: #e4e8ef;
  font-size: 2vw;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1.4px;
`;

export const BgSubTitle = styled.div`
  color: #e4e8ef;
  display: flex;
  gap: 8px;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  align-items: flex-end;
  margin-bottom: 2vw;
  justify-content: space-between;
  svg {
    margin-bottom: 5px;
  }
`;

export const DropdownMenu = styled.div`
  height: 2.2vw;
  width: 17.53vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  background: #16162a;
  color: #e4e8ef;
  padding: 0.3vw;
  font-size: 0.9vw;
`;

export const PhoneMargin = styled.div`
  display: flex;
  margin-top: 6vw;
`;

export const CategoryText = styled.span`
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: -0.8px;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #4e535d;
  }
`;

export const StyledSelect = styled.select`
  height: 2.2vw;

  background: #16162a;
  color: #e4e8ef;
  padding: 0.3vw;
  font-size: 1vw;
`;
