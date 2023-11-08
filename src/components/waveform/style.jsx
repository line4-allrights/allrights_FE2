import styled from "styled-components";

export const WaveBox = styled.div`
  /* display: block; */
  /* border: 1px solid red; */
  width: 50%;
  flex-direction: row;
  align-items: center; /* 수직 가운데 정렬 */
`;

export const AudioWaveformContainer = styled.div`
  flex-direction: row;
  margin-right: 1.5rem;
`;

export const Button = styled.button`
  /* display: block; */
  flex-direction: row;
  margin-right: 1.5rem;
  /* border: 1px solid yellow; */
  &:hover {
    cursor: pointer;
  }
`;

export const Length = styled.div`
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  color: #bfc5d0;
  margin-right: 2rem;
`;
