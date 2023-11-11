import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";

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

      <div style={{height: "100%", display: "flex", justifyContent:"center", marginTop: "10vw", gap: "2.5vw"}}>
        <Phone1>
          <img src={phone1} alt="phone1" style={{width: "100%", height: "100%"}}/>
        </Phone1>
        <Phone1 style={{ borderImageSource: "linear-gradient(180deg, #3460B3 0%, #3A3A72 100%)" }}>
          <img src={phone2} alt="phone1" style={{width: "100%", height: "100%"}}/>
        </Phone1>
        <Phone1>
          <img src={phone1} alt="phone1" style={{width: "100%", height: "100%"}}/>
        </Phone1>
      </div>
    </PricingContainer>
  )
};

export default Pricing;
