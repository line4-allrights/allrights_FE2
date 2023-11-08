import React, { useState, useRef } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import MainButton from "../../components/button/button-main";
// import InputSearch from "../../components/input/input-search";
import Search from "../../components/input/input-sign";
import AllrightsHome from "../../assets/images/Allrights_home.png";
import SoundWave1 from "../../assets/images/soundWave1.png";
import SoundWave2 from "../../assets/images/soundWave2.png";
import SoundWave3 from "../../assets/images/soundWave3.png";
import SoundWaveHome from "../../assets/images/soundWave_home.png";
import SoundWave from "../../assets/images/soundWave.png";
import ClipHome from "../../assets/images/clip_home.png";
import Download from "../../assets/images/download.png";
import Ring1 from "../../assets/images/ring_home1.png";
// import Ring2 from "../../assets/images/ring_home2.png";
import axios from "axios";

const HomeContainer = styled.div`
  width: 56%;
`

const Home = styled.div`
  display: flex;
  justify-content: space-between;
`

const HomeLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
`

const HomeRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.4vw;
  padding-top: 0.8rem;
`

const HomeP = styled.p`
  font-weight: 700;
  font-size: 1.75vw;
  color: ${colors.white};

`

const Mainpage = () => {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  // const [responseMessage, setResponseMessage] = useState("");

  const handleGuideClick = () => {
    searchRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", {
      searchText: search,
    })
    .then (res => {
      console.log(res.data);
      // setResponseMessage("검색 전송 성공");
      window.location.href = "/music";
    })
    .catch((err) => {
      console.log("error: ", err);
      // setResponseMessage("검색 전송 실패");
      });
    }

  return (
    <HomeContainer>
      <img src={Ring1} alt="ring1" style={{position: "absolute", width: "24vw", marginLeft: "-12vw", marginTop: "-2vw", zIndex: -1}}/>
      {/* <img src={Ring2} alt="ring2" style={{position: "absolute", width: "18vw", right: "0", marginRight: "7vw", top: "1vw", zIndex: -1}}/> */}
      <Home>
        <HomeLeft>
          <HomeP>효과음부터 배경음악까지</HomeP>
          <div style={{display: "flex", gap: "0.6vw", justifyContent: "flex-end", paddingRight: "7.5vw"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src = {AllrightsHome} style={{width: "10vw"}} alt="Allrights"/>
              <div style={{width: "10vw", height: "0.1vw", backgroundColor: colors.mainBlue}}/>
            </div>
            <HomeP>로 완성</HomeP>
          </div>
          <HomeP style={{fontSize: "1vw", fontWeight: 400, lineHeight: "1.5vw"}}>
            다양한 효과음 및 배경음악을 다운로드하고<br/>
            저작권 걱정 없이 영상을 제작해보세요!
          </HomeP>
          <div style={{display: "flex", gap: "1vw"}}>
            <MainButton buttonText="바로 시작하기" linkTo="/signup"/>
            <MainButton buttonText="이용 가이드" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`}} onClick={handleGuideClick}/>
          </div>
        </HomeLeft>

        <HomeRight>
          <img src={SoundWave1} alt="soundWave1" style={{width: "21.2vw", margin: "0 auto"}}/>
          <img src={SoundWave2} alt="soundWave2" style={{width: "21.2vw", marginLeft: "0"}}/>
          <img src={SoundWave3} alt="soundWave3" style={{width: "21.2vw", marginLeft: "auto"}}/>
        </HomeRight>
      </Home>

      <section id="search" ref={searchRef}>
        <Home style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "10vw 0 10vw 0"}}>
          <div style={{width: "0.4vw", height: "0.4vw", border: "none", borderRadius: "50%", backgroundColor: colors.white}}/>
          <HomeP style={{marginTop: "0.5vw"}}>키워드로 검색해보세요</HomeP>
          <div style={{textAlign: "center", marginTop: "1.8vw"}}>
            <HomeP style={{fontWeight: "400", fontSize: "1vw"}}>밝은 / 발랄한 / 깨끗한 / 청량한 / 경쾌한/어두운 / 오싹한 / 웅장한 / 급박한</HomeP>
            <HomeP style={{fontWeight: "400", fontSize: "1vw"}}>간단한 검색어로 원하는 자료를 찾아보세요!</HomeP>
          </div>
          <div style={{display: "flex", alignItems: "center", marginTop: "2vw", gap: "1vw"}}>
            <div><Search type="text" placeholder="검색어를 입력하세요" onChange={(e) => setSearch(e.target.value)} /></div>
            <div><MainButton buttonText="검색" onClick={handleSubmit}/></div>
          </div>
        </Home>
      </section>

      <Home>
        <HomeLeft style={{padding: "0"}}>
          <HomeP>다채롭고 퀄리티 높은 자료</HomeP>
          <HomeP style={{fontSize: "1vw", fontWeight: 400, lineHeight: "1.5vw"}}>
            여러분의 참여로 더욱 다채로운 자료를 제공합니다.<br/>
            풍성한 자료와 첨부된 설명으로<br/>
            손쉽게 원하는 효과음과 배경음악을 이용할 수 있습니다.
          </HomeP>
          <MainButton buttonText="둘러보기" linkTo="/sound" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`, marginTop: "3vw"}}/>
        </HomeLeft>
        <HomeRight style={{padding: "0"}}>
          <img src={SoundWaveHome} alt="soundWave" style={{width: "21.2vw", marginLeft: "auto"}}/>
        </HomeRight>
      </Home>

      <Home style={{marginTop: "10vw"}}>
        <HomeLeft style={{padding: "0"}}>
          <img src={ClipHome} alt="clip" style={{width: "21.2vw"}}/>
          <img src={SoundWave} alt="soundWave" style={{width: "21.2vw"}} />
        </HomeLeft>
        <HomeRight style={{padding: "0", textAlign: "right"}}>
          <HomeP>영상 클립으로 활용 팁 얻기</HomeP>
          <HomeP style={{fontSize: "1vw", fontWeight: 400, lineHeight: "1.5vw"}}>
            해당 효과음 및 배경음악을 사용한 영상클립을 확인하고<br/>
            더 창의적인 작품을 만들어 보세요.<br/>
          </HomeP>
          <MainButton buttonText="둘러보기" linkTo="/sound" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`, marginTop: "3vw"}}/>
        </HomeRight>
      </Home>

      <Home style={{marginTop: "10vw"}}>
        <HomeLeft style={{padding: "0"}}>
          <HomeP>포인트 적립, 부담없는 다운로드</HomeP>
          <HomeP style={{fontSize: "1vw", fontWeight: 400, lineHeight: "1.5vw"}}>
            일상 속 음향을 공유해보세요. 당신의 녹음본이<br/>
            누군가의 창작물이 됩니다. 작품 공유를 통한 포인트로<br/>
            또 다른 창작물을 완성해 보세요.
          </HomeP>
          <MainButton buttonText="공유하기" linkTo="/mypage" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`, marginTop: "3vw"}}/>
        </HomeLeft>
        <HomeRight style={{padding: "0"}}>
          <img src={Download} alt="download" style={{width: "21.2vw", marginLeft: "auto"}}/>
        </HomeRight>
      </Home>

      <Home style={{margin: "10vw 0 10vw 0"}}>
        <HomeLeft style={{padding: "0", alignItems: "center", width: "21.2vw"}}>
          <HomeP>레코드를 공유하세요</HomeP>
          <MainButton buttonText="Upload" linkTo="/mypage" style={{marginTop: "1.5vw"}}/>
        </HomeLeft>
        <HomeRight style={{padding: "0", alignItems: "center", width: "21.2vw"}}>
          <HomeP>전문가의 음원</HomeP>
          <MainButton buttonText="Browse Plan" linkTo="/pricing" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`, marginTop: "1.5vw"}}/>
        </HomeRight>
      </Home>
    </HomeContainer>
  )
};

export default Mainpage;
