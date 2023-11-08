import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import WaveSurfer from "wavesurfer.js";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const AudioWaveform = () => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#BFC5D0",
      progressColor: "#E4E8EF",
      height: 30,
    });

    wavesurferRef.current = wavesurfer;

    wavesurfer.load("src/assets/music/LetItGo.mp3");

    wavesurfer.on("ready", () => {
      setIsPlaying(false);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, []);

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
      <S.Length>3:44</S.Length>
    </>
  );
};

export default AudioWaveform;
