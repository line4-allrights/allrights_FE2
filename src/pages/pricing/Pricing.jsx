import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import PricingButton from "../../components/button/button-main";

const PricingContainer = styled.div`
  width: 100%;
`;

const PricingBanner = styled.div`
    background: linear-gradient(180deg, #16162a 0%, #316ac5 100%);
    width: 100%;
    height: 25vw;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const PricingPContainer = styled.div`
`

const PricingP = styled.p`
  font-weight: 700;
  font-size: 2vw;
  color: ${colors.white};
`

const Phone1 = styled.div`
  width: 14.25vw;
  height: 30.9vw;
  border: 0.2vw solid;
  border-radius: 1.8vw;
  border-image-source: linear-gradient(180deg, rgba(191, 197, 208, 0.2) 0%, rgba(191, 197, 208, 0.8) 100%);
  overflow: hidden;
`;

const Pricing = () => {
  return (
    <PricingContainer>
      {/* 배너 */}
      <PricingBanner>
        <PricingPContainer>
          <PricingP>전문가의 퀄리티 높은</PricingP>
          <PricingP style={{fontWeight: 600, fontSize: "1.75vw", marginTop: "0.5vw"}}>음원 10,000+</PricingP>
          <PricingP style={{fontWeight: 400, fontSize: "1vw", lineHeight: "1.5vw", color: colors.HomeExp, marginTop: "1.5vw"}}>
            저렴한 구독료로<br/>
            전문가의 퀄리티 높은 음원을<br/>
            다운로드하고 새로운 창작물로 만들어 보세요!
          </PricingP>
        </PricingPContainer>
      </PricingBanner>

      <div style={{height: "100%", display: "flex", justifyContent:"center", alignItems: "center", marginTop: "10vw", marginBottom: "10vw", gap: "2.5vw"}}>
        <Phone1>
          <img src={phone1} alt="phone1" style={{width: "100%", height: "100%", position: "relative"}}/>
        </Phone1>
        <PricingPContainer style={{position: "absolute", marginLeft: "-35vw"}}>
          <PricingP>Single</PricingP>
          <PricingPContainer style={{display: "flex", alignItems: "flex-end", marginTop: "1.8vw", gap: "0.5vw"}}>
            <PricingP style={{fontWeight: 600, fontSize: "1.5vw"}}>5천원</PricingP>
            <PricingP style={{fontWeight: 400, fontSize: "1vw"}}>/50개</PricingP>
          </PricingPContainer>
          <PricingP style={{fontWeight: 400, fontSize: "0.8vw", lineHeight: "1.4vw", marginTop: "1.8vw"}}>
            하나의 음원만<br/>
            다운로드하고 싶다면<br/>
            싱글 요금제를 사용해 보세요<br/>
            50개의 효과음 및 배경음악을<br/>
            다운로드할 수 있습니다
          </PricingP>
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <PricingButton buttonText="구독하기" style={{marginTop: "9.25vw", marginLeft: "1.5vw"}}/>
          </div>
        </PricingPContainer>


        <Phone1 style={{ borderImageSource: "linear-gradient(180deg, #3460B3 0%, #3A3A72 100%)" }}>
          <img src={phone2} alt="phone2" style={{width: "100%", height: "100%"}}/>
        </Phone1>
        <PricingPContainer style={{position: "absolute", marginLeft: "-2vw"}}>
          <PricingP>Standard</PricingP>
          <PricingPContainer style={{display: "flex", alignItems: "flex-end", marginTop: "1.8vw",  gap: "0.5vw"}}>
            <PricingP style={{fontWeight: 600, fontSize: "1.5vw"}}>1만원</PricingP>
            <PricingP style={{fontWeight: 400, fontSize: "1vw"}}>/1달</PricingP>
          </PricingPContainer>
          <PricingP style={{fontWeight: 400, fontSize: "0.8vw", lineHeight: "1.4vw", marginTop: "1.8vw"}}>
            효과음 또는 배경음악 중<br/>
            하나를 선택하여<br/>
            다운로드 할 수 있습니다<br/>
            퀄리티 높은 자료를 자유롭게<br/>
            이용해 보세요
          </PricingP>
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <PricingButton buttonText="구독하기" style={{marginTop: "9.25vw",  marginLeft: "1.5vw"}}/>
          </div>
        </PricingPContainer>

        <Phone1>
          <img src={phone1} alt="phone1" style={{width: "100%", height: "100%"}}/>
        </Phone1>
        <PricingPContainer style={{position: "absolute", marginLeft: "32vw"}}>
          <PricingP>Premium</PricingP>
          <PricingPContainer style={{display: "flex", alignItems: "flex-end", marginTop: "1.8vw",  gap: "0.5vw"}}>
            <PricingP style={{fontWeight: 600, fontSize: "1.5vw"}}>2만원</PricingP>
            <PricingP style={{fontWeight: 400, fontSize: "1vw"}}>/1달</PricingP>
          </PricingPContainer>
          <PricingP style={{fontWeight: 400, fontSize: "0.8vw", lineHeight: "1.4vw", marginTop: "1.8vw"}}>
            모든 음원을 이용할 수 있는<br/>
            프리미엄 요금제입니다<br/>
            당신의 창의력을 마음껏<br/>
            펼쳐 보세요<br/><br/>
          </PricingP>
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <PricingButton buttonText="구독하기" style={{marginTop: "9.25vw",  marginLeft: "1.5vw"}}/>
          </div>
        </PricingPContainer>
      </div>
    </PricingContainer>
  )
};

export default Pricing;
