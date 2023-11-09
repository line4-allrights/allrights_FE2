import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import axios from "axios";
import InputSign from "../../components/input/input-sign";
import SignButton from "../../components/button/button-main";

const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -2vw;
`;

const SignUpP = styled.div`
    font-size: 1.75vw;
    font-weight: 700;
    color: ${colors.white};
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8vw;
`

const Signup = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    // const [responseMessage, setResponseMessage] = useState("");

    const isFill = name !== "" && id !== "" && password !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFill) {
          try {
            const response = await axios.post("/account/signup", {
              username: name,
              userid: id,
              password: password,
            });
            console.log(response.data);
      
            // 회원가입 성공 시 localStorage에 닉네임 저장
            localStorage.setItem("userNickname", name);
      
            
            window.location.href = "/signin";
          } catch (error) {
            console.error("error: ", error);
            // setResponseMessage("회원가입 실패");
          }
        }
      };
      

    return (
        <SignUp>
            <SignUpP>회원가입</SignUpP>
            <SignUpContainer>
                <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "1.2vw"}}>
                    <InputContainer>
                        <SignUpP style={{fontSize: "0.8vw", fontWeight: 600}}>닉네임</SignUpP>
                        <InputSign type="text" placeholder="닉네임을 입력해주세요." onChange={(e) => setName(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <SignUpP style={{fontSize: "0.8vw", fontWeight: 600}}>아이디</SignUpP>
                        <InputSign type="text" placeholder="아이디를 입력해주세요." onChange={(e) => setId(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <SignUpP style={{fontSize: "0.8vw", fontWeight: 600}}>비밀번호</SignUpP>
                        <InputSign type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => setPassword(e.target.value)} />
                    </InputContainer>
                </div>
                <SignButton buttonText="회원가입" style={{ width: "11.7vw", margin: "3vw 0 1vw 0" }} disabled={!isFill} onClick={handleSubmit}/>
                {/* <div style={{color: colors.white}}>{responseMessage}</div> */}
            </SignUpContainer>
        </SignUp>
    );
};

export default Signup;