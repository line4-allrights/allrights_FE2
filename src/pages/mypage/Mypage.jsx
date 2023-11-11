import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import MyPageButton from "../../components/button/button-main";
import ListPost from "../../components/list/list-post";
import ListSave from "../../components/list/list-save";
import ListMyPage from "../../components/list/list-mypage";
import { API } from "../../api/axios";
import MyPageData from "../../util/mypage";

const MyPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MypageBanner = styled.div`
    background: linear-gradient(180deg, #16162a 0%, #316ac5 100%);
    width: 100%;
    height: 18vw;
`;

const MyPageP2 = styled.p`
    color: ${colors.HomeExp};
    font-size: 1.2vw;
    font-weight: 700;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4vw;
    width: 2.3vw;
`;

const Circle = styled.div`
    width: 0.2vw;
    height: 0.2vw;
    border: none;
    border-radius: 50%;
    background-color: ${colors.white};
`;

const Bar = styled.div`
    width: 100%;
    height: 0.1vw;
    background-color: ${colors.white};
    margin-top: 0.7vw;
`;

const MyPage = () => {
    const [showPost, setShowPost] = useState(true);
    const [postData, setPostData] = useState([]);
    const [saveData, setSaveData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const access = localStorage.getItem("access");
                console.log(access);
                if (!access) {
                    throw new Error('Access token not found in localStorage.');
                }

                const response = await API.get("http://127.0.0.1:8000/account/auth/", {
                    headers: {
                        Authorization: `Bearer ${access}`
                    }
                });

                // 서버 응답에서 데이터 추출
                const userData = response.data;
                const { user_info: userInfo, post: postData, save: saveData } = userData;

                // 상태에 데이터 설정
                setUserInfo(userInfo);
                setPostData(postData);
                setSaveData(saveData);
            } catch (error) {
                setError(error.message || 'An error occurred.');
            }
        };

        fetchData();
    }, []);


    if (error) {
        return <p>Error: {error}</p>;
    }


// ... (나머지 코드)


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if (userInfo) { 
    //                 const response = await API.get(`http://127.0.0.1:8000/account/mypage/${id}/`);
    //                 setUserInfo(response.data.user_info);
    //                 setPostData(response.data.post);
    //                 setSaveData(response.data.save);
    //             }
    //         } catch (error) {
    //             console.error("error", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <MyPageContainer>
            <MypageBanner/>
            
            {/* 유저 정보 */}
            <ListMyPage data={userInfo} />

            {/* nav */}
            <div
                style={{
                    display: "flex",
                    width: "64%",
                    gap: "1.35vw",
                    alignItems: "center",
                    marginTop: "5.7vw",
                }}
            >
                <TitleContainer
                    onClick={() => setShowPost(true)}
                    style={{ cursor: "pointer" }}
                >
                    {showPost && <Circle />}
                    <MyPageP2 style={{ color: showPost ? colors.white : colors.HomeExp }}>
                        Post
                    </MyPageP2>
                    {showPost ? (
                        <Bar />
                    ) : (
                        <div style={{ width: "100%", marginTop: "0.7vw" }} />
                    )}
                </TitleContainer>
                <MyPageP2>|</MyPageP2>
                <TitleContainer
                    onClick={() => setShowPost(false)}
                    style={{ cursor: "pointer" }}
                >
                    {!showPost && <Circle />}
                    <MyPageP2
                        style={{ color: !showPost ? colors.white : colors.HomeExp }}
                    >
                        Save
                    </MyPageP2>
                    {!showPost ? (
                        <Bar />
                    ) : (
                        <div style={{ width: "100%", marginTop: "0.7vw" }} />
                    )}
                </TitleContainer>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "0.1vw",
                    backgroundColor: colors.darkgray,
                    marginTop: "-0.1vw",
                    zIndex: "-1",
                }}
            />

            {/* 저장 목록 */}
            <div style={{ width: "64%", marginTop: "4.3vw", marginBottom: "9vw" }}>
                {showPost ? (
                    <div
                        className="postContainer"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <MyPageButton
                            buttonText="Upload your Record"
                            linkTo="/upload"
                            style={{ marginBottom: "3.15vw" }}
                        />
                        <ListPost data={postData} />
                    </div>
                ) : (
                    <div
                        className="saveContainer"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <ListSave data={saveData} />
                    </div>
                )}
            </div>
        </MyPageContainer>
    );
};

export default MyPage;