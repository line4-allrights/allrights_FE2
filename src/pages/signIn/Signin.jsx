import React, { useState } from "react";
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

const Signin = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    // const [responseMessage, setResponseMessage] = useState("");

    const isFill = id !== "" && password !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFill) {
            axios.post("/account/signin", {
                userid: id,
                password: password
            })
            .then (res => {
                console.log(res.data);
                // setResponseMessage("로그인 성공");
                window.location.href = "/";
            })
            .catch((err) => {
                console.log("error: ", err);
                // setResponseMessage("로그인 실패");
            });
        }
    }

    return (
        <SignIn>
            <SignInP>로그인</SignInP>
            <SignInContainer>
                <InputSign type="text" placeholder="아이디를 입력해주세요." onChange={(e) => setId(e.target.value)} />
                <InputSign type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => setPassword(e.target.value)} />

                <SignButton buttonText="로그인" style={{ width: "11.7vw", marginTop: "3.4vw" }} disabled={!isFill} onClick={handleSubmit}/>
                <SignButton buttonText="회원가입" linkTo="/signup" style={{ width: "11.7vw", backgroundColor: "transparent", border: `0.15vw solid ${colors.mainBlue}`, color: colors.mainBlue }} />
                {/* <div style={{color: colors.white}}>{responseMessage}</div> */}
            </SignInContainer>
        </SignIn>
    );
};

export default Signin;