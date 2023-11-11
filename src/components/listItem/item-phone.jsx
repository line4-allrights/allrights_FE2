import styled from "styled-components";
import color from "../../styles/colors";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import phone3 from "../../assets/images/phone3.png";
import VectorLeft from "../../assets/images/VectorLeft.png";
import VectorRight from "../../assets/images/VectorRight.png";

const HomeExplain = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.2vw;
`;

const HomeP = styled.p`
  color: ${color.white};
  font-size: 1.75vw;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 1.2vw;
`;

const HomeExP = styled.p`
  color: ${color.HomeExp};
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  margin-top: 0vw;
`;
const HomeExplainContainer = styled.div`
  margin-bottom: 2.6vw;
`;

const PhoneBanner = styled.div`
  background-color: ${color.mainDarkBlue};
  width: 100%;
  height: 45vw;
  margin-top: 3vw;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.8vw;
`;

const PhoneFrame = styled.div`
  width: 14.25vw;
  height: 30.9vw;
  border-radius: 20px;
  border: 1px solid rgba(157, 165, 179, 0.3); // 더 가느다란 테두리와 투명도 조정
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-color: ${color.mainDarkBlue};
`;

const ItemPhone = () => {
  const phoneFrameImages = [phone1, phone2, phone3];

  return (
    <PhoneBanner>
      <HomeExplain>
        <HomeExplainContainer>
          <HomeP>이렇게 사용해보세요</HomeP>
          <HomeExP>
            해당 음원을 사용한 콘텐츠들
            <br />
            더욱 다양한 아이디어를 공유해 보세요.
          </HomeExP>
        </HomeExplainContainer>

        <FrameContainer>
          {/* <img src={VectorLeft}/> */}
          {phoneFrameImages.map((image, index) => (
            <PhoneFrame key={index} image={image} />
          ))}
          {/* <img src={VectorRight}/> */}
        </FrameContainer>
      </HomeExplain>
    </PhoneBanner>
  );
};

export default ItemPhone;
