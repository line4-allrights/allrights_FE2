import React, { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Waveform from "../waveform/Wavefrom";
import AudioWaveform from "../waveform/Wavefrom";

const Musiclist = () => {
  // 스크랩 저장 정보 상태를 관리하는 변수
  const [isSaved, setIsSaved] = useState(false);

  // 하트 아이콘의 색을 동적으로 설정하는 함수
  const getHeartColor = () => (isSaved ? "#4A88FF" : "#727782");

  // 하트 아이콘을 클릭했을 때 저장 정보를 토글하는 함수
  const handleHeartClick = () => {
    setIsSaved(!isSaved);
  };

  //음원 다운로드 버튼
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
            style={{ color: getHeartColor() }} // 하트 아이콘의 색을 동적으로 설정
          />
          <S.AlbumCover />
          <S.MusicInfo>
            <S.MusicTitle>4호선톤 파이팅</S.MusicTitle>
            <S.MusicOwner>아프지마 도토 잠보</S.MusicOwner>
          </S.MusicInfo>
          <AudioWaveform />
          <S.DownloadBtn onClick={handleButtonClick}>다운로드</S.DownloadBtn>
        </S.MusicSource>
      </S.MusicBox>
    </>
  );
};

export default Musiclist;
