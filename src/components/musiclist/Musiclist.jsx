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
  background-image: url(${(props) => props.imageUrl});
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
        setMusicData(response.data);
      } catch (error) {
        console.error("음악 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchMusicData();
  }, []);

  if (!musicData || musicData.length === 0) {
    return <div>Loading...</div>;
  }

  const {
    id,
    username,
    title,
    music_file,
    music_type,
    genre,
    instruments,
    mood,
    length,
    description,
    upload_date,
    downloads,
    music_image,
    author,
    liker,
  } = musicData[0]; // Assuming you want the first music, change the index accordingly

  const toggleLike = async (musicId) => {
    try {
      const response = await API.post(
        `http://127.0.0.1:8000/music/like/${musicId}/`
      );
      return response.data;
    } catch (error) {
      console.error("좋아요 실패다 ㅋ", error);
      throw error;
    }
  };

  const getHeartColor = () => (isSaved ? "#4A88FF" : "#727782");

  const handleHeartClick = async () => {
    if (!musicData) {
      console.error("음악 데이터가 없습니다.");
      return;
    }

    try {
      await toggleLike(music_id);
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("스크랩 실패", error);
    }
  };

  const handleButtonClick = () => {
    console.log("음원이 다운로드 되었습니다.");
  };

  return (
    <>
      <S.MusicBox>
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
          <AudioWaveform />
          <S.DownloadBtn onClick={handleButtonClick}>다운로드</S.DownloadBtn>
        </S.MusicSource>
      </S.MusicBox>
    </>
  );
};

export default Musiclist;
