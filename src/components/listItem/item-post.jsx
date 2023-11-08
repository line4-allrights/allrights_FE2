import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const PostP = styled.p`
    font-weight: 600;
    font-size: 1vw;
    color: ${colors.HomeExp};
`;

const DeleteButton = styled.button`
    width: 3.8vw;
    height: 2.2vw;
    border: 0.15vw solid ${colors.mainBlue};
    background-color: transparent;
    border-radius: 1.8vw;
    color: ${colors.white};
    font-weight: 600;
    font-size: 0.8vw;
`

const ItemPost = (props) => {
    const { id, name, producer, img, time, song } = props;
    const waveformRef = useRef(null);
    const wavesurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleDelete = () => {
        const isConfirmed = window.confirm("영구 삭제 하시겠습니까?");
        if (isConfirmed) {
            alert("삭제 되었습니다.");
        } else {

        }
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
                <PostP>{name}</PostP>
                <PostP style={{ fontSize: "0.8vw", fontWeight: 500 }}>{producer}</PostP>
            </div>
            <WaveBox>
                <AudioWaveformContainer>
                    <div ref={waveformRef}></div>
                </AudioWaveformContainer>
            </WaveBox>
            <PostP style={{ fontSize: "0.8vw", fontWeight: 400 }}>{time}</PostP>
            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </StyleItem>
    );
};

export default ItemPost;
