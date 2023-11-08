import styled from "styled-components";
import color from "../../styles/colors";
import ButtonMain from "../../components/button/button-main";
import Check from "../../assets/images/Check.png";
import ItemPhone from "../../components/listItem/item-phone";
import InputSearch from "../../components/input/input-search";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HomeBanner = styled.div`
  background: linear-gradient(180deg, #16162a 0%, #316ac5 100%);
  width: 100%;
`;

export const HomeExplain = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.2vw;
`;

export const HomeP = styled.p`
  color: ${color.white};
  font-size: 2vw;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 1.8vw;
`;

export const HomeExP = styled.p`
  color: ${color.HomeExp};
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
`;

export const HomeExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.8vw;
  margin-bottom: 1vw;
`;

export const CheckImage = styled.img`
  width: 1.8vw;
  height: 1.8vw;
`;

const Soundeffect = () => {
  return (
    <Home>
      <HomeBanner>
        <HomeExplain>
          <HomeExplainContainer>
            <HomeP>
              저작권 걱정 없는 <br />
              <span style={{ fontSize: "1.75vw", fontWeight: 600 }}>
                효과음 50,000+
              </span>
            </HomeP>
            <HomeExP style={{ marginTop: "-1vw" }}>
              누구나 음향 감독이 될 수 있다. <br />
              일상 속 음향 기록을 공유해 보세요. <br />
              당신의 기록이 새로운 창작물을 완성시킵니다 <br />
            </HomeExP>
          </HomeExplainContainer>

          <ButtonContainer>
            <ButtonMain
              buttonText="업로드 하기"
              variant="white"
              linkTo="/Upload"
            />
            <ButtonMain buttonText="다운로드 하기" />
          </ButtonContainer>

          <CheckImage img src={Check} />
        </HomeExplain>
      </HomeBanner>

      <InputSearch />
      <ItemPhone />
    </Home>
  );
};

export default Soundeffect;
