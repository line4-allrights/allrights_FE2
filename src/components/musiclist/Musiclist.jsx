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
  const [isSaved, setIsSaved] = useState(false);
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
      const response = await API.post(
        `http://127.0.0.1:8000/music/like/${id}/`,
        null,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NjMwODM1LCJpYXQiOjE2OTk2MzA1MzUsImp0aSI6IjA2NThkNjBjNDE5YjQ3NzM4NGMzNjJlN2Y5ODk2ZjE4IiwidXNlcl9pZCI6NX0.X_IeTKXA61woFwp_4BBh8lnxCxfi2Ta7CvVHARu0qRw",
          },
        }
      );
      console.log("좋아요 토글 성공:", response.data);
      setIsSaved(!isSaved);
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
        const { id, username, title, music_image } = music;

        return (
          <S.MusicBox key={id}>
            <S.MusicSource>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleHeartClick(id)}
                style={{ color: isSaved ? "#4A88FF" : "#727782" }}
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
