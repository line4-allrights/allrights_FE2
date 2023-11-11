import styled from "styled-components";
import colors from "../../styles/colors";
import MyPageButton from "../../components/button/button-main";

const StyleItem = styled.div`
    width: 70%;
    display: flex;
    alignItems: center;
    margin-top: -4.5vw;
`

const MyPageP = styled.p`
    font-weight: 700;
    font-size: 1.75vw;
    color: ${colors.white};
`;

const ItemMyPage = (props) => {
    const { id, username, img, bio } = props;

    return (
        <StyleItem key={id}>
            <div className="left" style={{ width: "20%", textAlign: "center" }}>
                <img src={img} alt="profilePhoto" style={{ width: "10vw", height: "10vw", border: "none", borderRadius: "50%" }}/>
                <br />
                <MyPageButton buttonText="수정하기" style={{ marginTop: "1.2vw", backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`}} />
            </div>

            <div className="right" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "0.4vw", marginTop: "5.3vw" }} >
                <MyPageP>{username}</MyPageP>
                <MyPageP style={{ fontWeight: 500, fontSize: "1vw" }}>{bio}</MyPageP>
            </div>
        </StyleItem>
    )
}
export default ItemMyPage;