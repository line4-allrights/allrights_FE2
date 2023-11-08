import styled from "styled-components";
import colors from "../../styles/colors";

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${colors.navtext};
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
`;

export const FooterLeft = styled.div`
`;

export const FooterMainLogo = styled.img`
  margin-top: 1.8vw;
  width: 6vw;
`;

export const FooterCopyRight = styled.p`
  font-weight: 400;
  font-size: 0.8vw;
  color: ${colors.darkgray};
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  margin: 0.5vw 0 1.5vw 0;
  padding-left: 0.1vw;
`;

export const FooterInsta = styled.img`
  width: 1.5vw;
`;

export const FooterGithub = styled.img`
  width: 1.5vw;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 1.5vw;
`

export const RightContainer2 = styled.div`
  text-align: right;
`

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
