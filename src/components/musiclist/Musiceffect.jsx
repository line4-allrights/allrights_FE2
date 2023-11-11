import React, { useState, useEffect } from "react";
import * as S from "./style";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Waveform from "../waveform/Wavefrom";
import AudioWaveform from "../waveform/Wavefrom";
import { API } from "../../api/axios";

const AlbumCover = styled.div`
  display: flex;
  border-radius: 9px;
  background: #727782;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  width: 3.5vw;
  height: 3.5vw;
  margin-right: 1rem;
`;

const Musiceffect = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await API.get("http://127.0.0.1:8000/music/");
        setMusicData(response.data);
      } catch (error) {
        console.error("음악 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchMusicData();
  }, []);

  if (!musicData || musicData.length === 0) {
    return <div></div>;
  }

  return (
    <>
      {musicData.map((music) => {
        const { id, username, title, music_image } = music;
        //좋아요 스크랩 기능
        const toggleLike = async (musicId) => {
          try {
            const response = await API.post(
              `http://127.0.0.1:8000/music/like/${musicId}/`
            );

            console.log("좋아요 토글 성공:", response.data);
            return response.data;
          } catch (error) {
            console.error("좋아요 토글 실패:", error);
            throw error;
          }
        };

        const getHeartColor = () => (isSaved ? "#4A88FF" : "#727782");

        const handleHeartClick = async () => {
          try {
            await toggleLike(id);
            setIsSaved(!isSaved);
          } catch (error) {
            console.error("좋아요 실패", error);
          }
        };

        const handleButtonClick = async () => {
          try {
            // 다운로드 요청 보내기
            const response = await API.get(
              `http://127.0.0.1:8000/music/download/${id}/`,
              {
                responseType: "blob",
              }
            );

            // 파일 다운로드 링크 생성
            const downloadUrl = window.URL.createObjectURL(
              new Blob([response.data])
            );
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.setAttribute("download", `${title}.mp3`);
            document.body.appendChild(link);
            link.click();

            // 다운로드 후 링크 및 객체 제거
            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(link);
          } catch (error) {
            console.error("다운로드 실패", error);
          }
        };

        return (
          <S.MusicBox key={id}>
            <S.MusicSource>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={handleHeartClick}
                style={{ color: getHeartColor() }}
              />
              <AlbumCover imageUrl={music_image} />
              <S.MusicInfo>
                <S.MusicTitle>{title}</S.MusicTitle>
                <S.MusicOwner>{username}</S.MusicOwner>
              </S.MusicInfo>
              <AudioWaveform musicData={music} />
              <S.DownloadBtn onClick={handleButtonClick}>
                다운로드
              </S.DownloadBtn>
            </S.MusicSource>
          </S.MusicBox>
        );
      })}
    </>
  );
};

export default Musiceffect;
