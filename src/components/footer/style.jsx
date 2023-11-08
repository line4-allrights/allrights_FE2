import styled from "styled-components";

export const FooterWrapper = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100vw;
  background-color: #9da5b3;
  opacity: 0.68;
  /* align-content: space-between;
  justify-content: center; */
  /* border: 3px solid red; */
  /* padding-bottom: 30px; */
`;

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 95vw;
  background-color: #9da5b3;
  opacity: 0.9;
  align-content: space-between;
  justify-content: space-between;
  /* border: 3px solid white; */
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;

export const FooterMainLogo = styled.img`
  display: flex;
  margin-left: 1.25rem;
  margin-top: 1.56rem;
  width: 5vw;
  /* border: 3px solid red; */
`;

export const FooterCopyRight = styled.div`
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  margin-top: 0.125rem;
  position: relative;
  margin-left: 20px;
`;

export const FooterRight = styled.div`
  display: flex;
  margin-right: 4.188rem;
  margin-top: 1.563rem;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  /* border: 1px solid red; */
`;

export const FooterMenu = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 1rem;
  width: 30vw;
  /* border: 3px solid purple; */
`;

export const FooterSort = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3.6rem;
  width: 18vw;
  margin-right: 0.6rem;
  /* border: 1px solid yellow; */
`;

export const FooterSortDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #727782;
  font-weight: normal;
  font-size: 0.8vw;
  gap: 5rem;
  /* border: 3px solid pink; */
`;

export const FooterDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: flex-end;
  margin-top: 1rem;
  /* border: 1px solid green; */
`;

export const FooterDetailMenu = styled.div`
  display: flex;
  flex-direction: column;
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  /* margin-top: 1rem; */
  position: relative;
`;

export const FooterDetailMenu2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  /* border: 1px solid red; */
`;

export const FooterCopyRight2 = styled.div`
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 1rem;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0.2rem;
  /* border: 1px solid yellow; */
`;
export const CopyRight = styled.div`
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  position: relative;
  align-items: flex-end;
  display: flex;

  flex-direction: column;
  /* border: 3px solid red; */
`;

export const FooterLogo = styled.div`
  margin-top: 1rem;
  margin-left: 1.4rem;
  margin-bottom: 1rem;
  align-items: center;
  display: flex;
`;

export const FooterInsta = styled.img`
  margin-left: 0.8rem;
  position: relative;
  right: 0.9rem;
  width: 1.5vw;
`;

export const FooterGithub = styled.img`
  width: 1.5vw;
`;

export const Styled = styled(FooterDetailMenu2)`
  &:hover {
    color: #16162a;
  }

  &.active {
    color: black;
  }
`;
