import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AllRights from "../../assets/images/AllRights.png";
import colors from "../../styles/colors";
import axios from "axios";
import { API } from "../../api/axios";
import { useEffect } from "react";

const HeaderNavBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.bgColor};
  padding-top: 1rem;
`;

const LogoImage = styled.img`
  width: 5vw;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${colors.navtext};
  font-size: 0.8vw;
  font-weight: 500;
  text-decoration: none;
  align-items: center;

  &.active {
    color: ${colors.white};
  }

  &:hover {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  display: flex;
  color: #bfc5d0;
  font-size: 0.8vw;
  font-weight: 500;
  text-decoration: none;
  align-items: center;
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    try {
      const storedNickname = localStorage.getItem("userNickname");

      if (storedNickname) {
        setIsLoggedIn(true);
        setUserNickname(storedNickname);
      } else {
        setIsLoggedIn(false);
        setUserNickname("");
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await API.delete(
        "http://127.0.0.1:8000/account/signout/"
      );
      console.log("Logout response:", response);

      if (response.status === 202) {
        // 상태 변수 업데이트
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <HeaderNavBar>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "77%",
        }}
      >
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <StyledNavLink to="/">
            <LogoImage src={AllRights} alt="로고" />
          </StyledNavLink>
          <StyledNavLink to="/sound">효과음</StyledNavLink>
          <StyledNavLink to="/music">배경음악</StyledNavLink>
          <StyledNavLink to="/pricing">요금제</StyledNavLink>
        </div>
        <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
          {isLoggedIn ? (
            <>
              <span style={{ color: colors.navtext, fontSize: "1vw", cursor: "pointer" }}>
                {userNickname}
              </span>
              <span style={{ color: colors.navtext, fontSize: "1vw" }}>|</span>
              <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
            </>
          ) : (
            <>
              <StyledNavLink to="/signin">Sign In</StyledNavLink>
              <p style={{ color: colors.navtext, fontSize: "1vw" }}>|</p>
              <StyledNavLink to="/signup">Sign Up</StyledNavLink>
            </>
          )}{" "}
        </div>
      </div>
    </HeaderNavBar>
  );
};

export default Header;
