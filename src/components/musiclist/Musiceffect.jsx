// Musiceffect.jsx
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
  const [likedTracks, setLikedTracks] = useState([]);
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await API.get("http://127.0.0.1:8000/music/");

        // Check if the expected arrays are present in the response
        if (
          Array.isArray(response.data.effect_music) &&
          Array.isArray(response.data.bg_music)
        ) {
          // Combine the two arrays into a single array
          const combinedMusicData = [
            ...response.data.effect_music,
            ...response.data.bg_music,
          ];

          // Set the combined array as the musicData state
          setMusicData(combinedMusicData);
        } else {
          console.error(
            "API에서 예상대로 배열이 아닌 데이터가 반환되었습니다.",
            response.data
          );
        }
      } catch (error) {
        console.error("음악 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchMusicData();
  }, []);

  const toggleLike = async (musicId) => {
    try {
      const response = await API.post(
        `http://127.0.0.1:8000/music/like/${musicId}/`,
        null,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NjMwODM1LCJpYXQiOjE2OTk2MzA1MzUsImp0aSI6IjA2NThkNjBjNDE5YjQ3NzM4NGMzNjJlN2Y5ODk2ZjE4IiwidXNlcl9pZCI6NX0.X_IeTKXA61woFwp_4BBh8lnxCxfi2Ta7CvVHARu0qRw",
          },
        }
      );

      console.log("좋아요 토글 성공:", response.data);
      return response.data;
    } catch (error) {
      console.error("좋아요 토글 실패:", error);
      throw error;
    }
  };

  const handleHeartClick = async (id) => {
    try {
      await toggleLike(id);
      // 좋아요 상태를 토글하면서 해당 음악의 좋아요 상태를 업데이트
      setLikedTracks((prevLikedTracks) =>
        prevLikedTracks.includes(id)
          ? prevLikedTracks.filter((trackId) => trackId !== id)
          : [...prevLikedTracks, id]
      );
    } catch (error) {
      console.error("좋아요 실패", error);
    }
  };

  const handleButtonClick = async (id, title) => {
    try {
      if (!id || !title) {
        console.error("다운로드를 위한 ID 또는 title이 없습니다.");
        return;
      }

      // 다운로드 요청 보내기
      const response = await API.get(
        `http://127.0.0.1:8000/music/download/${id}/`,
        {
          responseType: "blob",
        }
      );

      // 파일 다운로드 링크 생성
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
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
    <>
      {musicData.map((music) => {
        const { id, username, title, music_image } = music;

        const getHeartColor = () =>
          likedTracks.includes(id) ? "#4A88FF" : "#727782";

        return (
          <S.MusicBox key={id}>
            <S.MusicSource>
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleHeartClick(id)}
                style={{ color: getHeartColor() }}
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

export default Musiceffect;
