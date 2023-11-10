import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { API } from "../../api/axios";

const AudioWaveform = ({ musicData }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchMusicData = async () => {
    try {
      const response = await API.get("http://127.0.0.1:8000/music/");
      setMusicData(response.data);
    } catch (error) {
      console.error("음악 데이터를 가져오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  useEffect(() => {
    const initializeWaveSurfer = async () => {
      if (!musicData) {
        return; // 음악 데이터가 없으면 아무것도 하지 않음
      }

      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#BFC5D0",
        progressColor: "#E4E8EF",
        height: 30,
      });

      wavesurferRef.current = wavesurfer;

      const musicId = musicData.id;

      try {
        // 음악 데이터를 Blob 형태로 받아옴
        const response = await API.get(
          `http://127.0.0.1:8000/music/download/${musicId}/`,
          {
            responseType: "blob",
          }
        );

        // Blob 데이터를 URL로 변환하여 Wavesurfer에 로드
        const blobUrl = URL.createObjectURL(response.data);
        wavesurfer.load(blobUrl);

        wavesurfer.on("ready", () => {
          setIsPlaying(false);
        });
      } catch (error) {
        console.error("음악 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    initializeWaveSurfer();

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [musicData]);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <S.WaveBox>
        <S.AudioWaveformContainer>
          <div ref={waveformRef}></div>
        </S.AudioWaveformContainer>
      </S.WaveBox>
      <S.Button className="controls" onClick={handlePlayPause}>
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          style={{
            fontSize: "20px",
            position: "relative",
            top: "2px",
            left: "15px",
            color: "#E4E8EF",
          }}
        />
      </S.Button>
      <S.Length>11:11</S.Length>
    </>
  );
};

export default AudioWaveform;
