import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import Allrights from "/Allrights_not.png";
import NotButton from "../../components/button/button-main";

const NotfoundContainer = styled.div`
  background-color: ${colors.bgColor};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotfoundP = styled.p`
  font-weight: 700;
  font-size: 4vw;
  color: ${colors.white};
`;

const Notfound = () => {
  return (
    <NotfoundContainer>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={Allrights}
          alt="Allrights"
          style={{ width: "19vw", height: "11vw" }}
        />
        <NotfoundP style={{ marginTop: "5vw" }}>SORRY</NotfoundP>
        <div
          style={{
            width: "70%",
            height: "0.1vw",
            backgroundColor: colors.HomeExp,
          }}
        />
        <NotfoundP style={{ fontWeight: 300, fontSize: "2vw" }}>
          ERROR -작업을 다시 확인해 주세요
        </NotfoundP>
        <NotButton
          buttonText="홈으로 가기"
          linkTo="/"
          style={{ marginTop: "2vw" }}
        />
      </div>
    </NotfoundContainer>
  );
};

export default Notfound;
