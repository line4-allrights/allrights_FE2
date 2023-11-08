import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AllRights from "../../assets/images/AllRights.png";
import colors from "../../styles/colors";
import axios from "axios";
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

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem('token');
    
    // 토큰이 있다면, 사용자가 로그인한 것으로 간주
    if (token) {
      setIsLoggedIn(true);
      // 서버나 다른 곳에서 사용자 정보를 가져올 수 있습니다.
      // 예시를 위해 하드코딩된 값을 사용하겠습니다.
      setUserNickname("User123"); // 사용자 정보를 가져와서 설정해야 합니다.
    }
  }, []);
  

  const handleLogout = async () => {
    try {
      const response = await axios.post('/account/signout/');
      if (response.status === 200) {
        setIsLoggedIn(false);
        setUserNickname("");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <HeaderNavBar>
      <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
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
              <span style={{ color: colors.navtext, fontSize: "1vw" }}>
                {userNickname}
              </span>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/signin">Sign In</StyledNavLink>
              <p style={{ color: colors.navtext, fontSize: "1vw" }}>|</p>
              <StyledNavLink to="/signup">Sign Up</StyledNavLink>
            </>
          )}
        </div>
      </div>
    </HeaderNavBar>
  );
};

export default Header;