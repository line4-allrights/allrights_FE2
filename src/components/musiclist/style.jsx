import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const MusicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5vw;
  /* border: 1px solid white; */
`;

export const MusicSource = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 4.5vw;
  border-radius: 24px;
  background: #4e535d;
  padding: 15px;
  align-items: center;
  svg {
    color: #727782;
    margin-right: 1rem;
    font-size: 2vw;
  }
`;

// export const AlbumCover = styled.div`
//   display: flex;
//   border-radius: 9px;
//   background: #727782;
//   background-image: url(${(props) => props.imageUrl});
//   width: 3.5vw;
//   height: 3.5vw;
//   margin-right: 1rem;
// `;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  height: 5vh;
  /* border: 1px solid yellow; */
  margin-right: 10px;
  justify-content: center;
`;

export const MusicTitle = styled.div`
  display: flex;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  color: #bfc5d0;
  /* border: 1px solid red; */
`;

export const MusicOwner = styled.div`
  display: flex;
  font-size: 0.6%;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  color: #bfc5d0;
`;

export const DownloadBtn = styled.div`
  display: inline-flex;
  flex-direction: row;
  min-width: 6vw;
  height: 3vw;
  border-radius: 1.8vw;
  justify-content: center;
  align-items: center;
  color: #e4e8ef;
  font-size: 1vw;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.03px;
  color: #e4e8ef;
  border: 3px solid #4a88ff;
  border-radius: 36px;
  /* margin-left: 7vw; */
  &:hover {
    cursor: pointer;
  }
`;
