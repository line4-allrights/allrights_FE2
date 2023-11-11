import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import axios from "axios";
import InputSign from "../../components/input/input-sign";
import SignButton from "../../components/button/button-main";

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2vw;
`;

const SignInP = styled.div`
  font-size: 1.75vw;
  font-weight: 700;
  color: ${colors.white};
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2vw;
  margin-top: 6vw;
`;

const SignupButton = styled.button`
  width: 11.7vw;
  height: 2.2vw;
  border: 0.15vw solid ${colors.mainBlue};
  background-color: transparent;
  border-radius: 1.2vw;
  color: ${colors.mainBlue};
  font-weight: 600;
  font-size: 0.8vw;
`;

const Signin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");


  useEffect(() => {
    // localStorage에서 닉네임 가져오기
    const storedNickname = localStorage.getItem("userNickname");
    if (storedNickname) {
      setUserNickname(storedNickname);
    }
  }, []);

    const isFill = id !== "" && password !== "";

const handleSubmit = async (e) => {
  e.preventDefault();
  if (id && password) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/account/signin/",
        {
          userid: id,
          password: password,
        },
        {
          withCredentials: true // 쿠키를 사용하여 요청을 보낼 때 이 옵션을 설정합니다.
        }
      );

      const { message, user_info } = response.data; // 백엔드로부터 받은 데이터 추출

      if (message === "login success") {
        // 로그인 성공 시 처리
        localStorage.setItem("userNickname", user_info.username); // 필요한 경우 사용자 닉네임을 로컬 스토리지에 저장
        // 다른 작업 수행 가능 (예: 페이지 이동 등)
        window.location.href = "/";
      } else {
        // 로그인 실패 시 처리 (예: 에러 메시지 표시)
        console.log("로그인 실패: ", message);
      }
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  }
};



  const handleSignup = () => {
    window.location.href = "/signup";
  };
  return (
    <SignIn>
      <SignInP>로그인</SignInP>
      <SignInContainer>
        <InputSign
          type="text"
          placeholder="아이디를 입력해주세요."
          onChange={(e) => setId(e.target.value)}
        />
        <InputSign
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignButton
          buttonText="로그인"
          style={{ width: "11.7vw", marginTop: "3.4vw" }}
          disabled={!isFill}
          onClick={handleSubmit}
        />
        <SignupButton onClick={handleSignup}>회원가입</SignupButton>
        {/* <div style={{color: colors.white}}>{responseMessage}</div> */}
      </SignInContainer>
    </SignIn>
  );
};

export default Signin;
