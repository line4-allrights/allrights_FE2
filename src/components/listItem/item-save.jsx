import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const StyleItem = styled.div`
    width: 100%;
    min-height: 4.2vw;
    border: none;
    border-radius: 1.2vw;
    background-color: ${colors.darkgray2};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1vw;
`;

const Button = styled.button`
`;

const WaveBox = styled.div`
    width: 50%;
    flex-direction: row;
    align-items: center;
`

const AudioWaveformContainer = styled.div`
    flex-direction: row;
    margin-right: 1.5rem;
`

const SaveP = styled.p`
    font-weight: 600;
    font-size: 1vw;
    color: ${colors.HomeExp};
`;

const ItemSave = (props) => {
    const { id, name, producer, img, time, song } = props;
    const waveformRef = useRef(null);
    const wavesurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const getHeartColor = () => (isSaved ? "#4A88FF" : "#727782");

    const handleHeartClick = () => {
        setIsSaved(!isSaved);
    };

    const handlePlayPause = () => {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            } 
            else {
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
            height: 10,
        });

        wavesurferRef.current = wavesurfer;

        wavesurfer.load(song);

        wavesurfer.on("ready", () => {
            setIsPlaying(false);
        });

        return () => {
            wavesurfer.destroy();
        };
    }, []);

    return (
        <StyleItem key={id}>
            <Button className="controls" onClick={handlePlayPause}>
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    style={{
                        fontSize: "20px",
                        color: "#E4E8EF",
                        width: "2vw"
                    }}
                />
            </Button>
            <img src={img} alt="img" style={{ width: "3.2vw", height: "3.2vw", border: "none", borderRadius: "0.8vw" }} />
            <div>
                <SaveP>{name}</SaveP>
                <SaveP style={{ fontSize: "0.8vw", fontWeight: 500 }}>{producer}</SaveP>
            </div>
            <WaveBox>
                <AudioWaveformContainer>
                    <div ref={waveformRef}></div>
                </AudioWaveformContainer>
            </WaveBox>
            <SaveP style={{ fontSize: "0.8vw", fontWeight: 400 }}>{time}</SaveP>
            <FontAwesomeIcon
            icon={faHeart}
            onClick={handleHeartClick}
            style={{ color: getHeartColor(), cursor: "pointer" }}
            />
        </StyleItem>
    );
};

export default ItemSave;
