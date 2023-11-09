import { useState, useEffect } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import profilePhoto from "../../assets/images/profilePhoto.png";
import MyPageButton from "../../components/button/button-main";
import ListPost from "../../components/list/list-post";
import ListSave from "../../components/list/list-save";
import API from "../../api/axios";

const MyPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MypageBanner = styled.div`
    background: linear-gradient(180deg, #16162A 0%, #316AC5 100%);
    width: 100%;
    height: 18vw;
`

const MyPageP = styled.p`
    font-weight: 700;
    font-size: 1.75vw;
    color: ${colors.white};
`

const MyPageP2 = styled.p`
    color: ${colors.HomeExp};
    font-size: 1.2vw;
    font-weight: 700;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4vw
    width: 2.3vw;
`

const Circle = styled.div`
    width: 0.2vw;
    height: 0.2vw;
    border: none;
    border-radius: 50%;
    background-color: ${colors.white};
`

const Bar = styled.div`
    width: 100%;
    height: 0.1vw;
    background-color: ${colors.white};
    margin-top: 0.7vw;
`

const MyPage = () => {
    const [showPost, setShowPost] = useState(true);
    const [postData, setPostData] = useState([]);
    const [saveData, setSaveData] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get(`http://127.0.0.1:8000/account/mypage/${parseInt(userInfo?.userid, 10)}/`);
                setPostData(response.data.post);
                setSaveData(response.data.save);
                setUserInfo(response.data.user_info);
            } catch (error) {
                console.error("Error: ", error);
            }
        };
        if (userInfo) { 
            fetchData();
        }
    }, [userInfo]);

    return (
        <MyPageContainer>
            <MypageBanner/>
            
            {/* 유저 정보 */}
            <div style={{width: "70%", display: "flex", alignItems: "center", marginTop: "-4vw"}}>
                <div className="left" style={{ width: "20%", textAlign: "center"}}>
                    <img src={profilePhoto} alt="profilePhoto" style={{width: "10vw", height: "10vw"}}/> <br/>
                    <MyPageButton buttonText="수정하기" style={{marginTop: "1.2vw", backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`}}/>
                </div>
                <div className="right" style={{display: "flex", flexDirection: "column", gap: "0.4vw"}}>
                    <MyPageP>닉네임</MyPageP>
                    <MyPageP style={{fontWeight: 500, fontSize: "1vw"}}>아이디</MyPageP>
                </div>
            </div>

            {/* nav */}
            <div style={{display: "flex", width: "64%", gap: "1.35vw", alignItems: "center", marginTop: "5.7vw"}}>
                <TitleContainer onClick={() => setShowPost(true)} style={{cursor: "pointer"}}>
                    {showPost && <Circle /> }
                    <MyPageP2 style={{ color: showPost ? colors.white : colors.HomeExp }}>Post</MyPageP2>
                    {showPost ? <Bar/> : <div style={{ width: '100%', marginTop: '0.7vw' }} />}
                </TitleContainer>
                <MyPageP2>|</MyPageP2>
                <TitleContainer onClick={() => setShowPost(false)} style={{cursor: "pointer"}}>
                    {!showPost && <Circle /> }
                    <MyPageP2 style={{ color: !showPost ? colors.white : colors.HomeExp }}>Save</MyPageP2>
                    {!showPost ? <Bar/> : <div style={{ width: '100%', marginTop: '0.7vw' }} />}
                </TitleContainer>
            </div>
            <div style={{width: "100%", height: "0.1vw", backgroundColor: colors.darkgray, marginTop: "-0.1vw", zIndex: "-1"}}/>

            {/* 저장 목록 */}
            <div style={{ width: "64%", marginTop: "4.3vw", marginBottom: "9vw" }}>
                {showPost ? (
                    <div className="postContainer" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <MyPageButton buttonText="Upload your Record" linkTo="/upload" style={{ marginBottom: "3.15vw" }} />
                        <ListPost data={postData} />
                    </div>
                ) : (
                    <div className="saveContainer" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <ListSave data={saveData} />
                    </div>
                )}
            </div>
        </MyPageContainer>
    )
};

export default MyPage;