// Musiclist.jsx
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

const Musiclist = () => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await API.get("http://127.0.0.1:8000/music/");
        // Combine arrays from different properties
        const combinedMusicData = [
          ...response.data.effect_music,
          ...response.data.bg_music,
        ];
        setMusicData(combinedMusicData);
      } catch (error) {
        console.error("음악 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchMusicData();
  }, []);

  if (!musicData) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(musicData)) {
    console.error("Music data is not an array:", musicData);
    return <div>Error loading music data</div>;
  }

  if (musicData.length === 0) {
    return <div>No music data available</div>;
  }

  const handleHeartClick = async (id) => {
    try {
      // 클릭할 때마다 좋아요 상태를 토글하는 요청을 서버에 보냄
      await API.post(`http://127.0.0.1:8000/music/like/${id}/`, null);

      // 서버 응답 없이 성공하면, musicData 상태를 업데이트
      setMusicData((prevMusicData) =>
        prevMusicData.map((music) =>
          music.id === id ? { ...music, isLiked: !music.isLiked } : music
        )
      );
    } catch (error) {
      console.error("좋아요 토글 실패:", error);
    }
  };

  const handleButtonClick = async (id, title) => {
    try {
      const response = await API.get(
        `http://127.0.0.1:8000/music/download/${id}/`,
        {
          responseType: "blob",
        }
      );

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${title}.mp3`);
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);
    } catch (error) {
      console.error("다운로드 실패", error);
    }
  };

  return (
    <>
      {musicData.map((music) => {
        const { id, username, title, music_image, isLiked } = music;

        return (
          <S.MusicBox key={id}>
            <S.MusicSource>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleHeartClick(id)}
                style={{ color: isLiked ? "#4A88FF" : "#727782" }}
              />
              <AlbumCover imageUrl={music_image} />
              <S.MusicInfo>
                <S.MusicTitle>{title}</S.MusicTitle>
                <S.MusicOwner>{username}</S.MusicOwner>
              </S.MusicInfo>
              <AudioWaveform musicData={music} />
              <S.DownloadBtn onClick={() => handleButtonClick(id, title)}>
                다운로드
              </S.DownloadBtn>
            </S.MusicSource>
          </S.MusicBox>
        );
      })}
    </>
  );
};

export default Musiclist;
