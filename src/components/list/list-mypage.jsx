import ItemMyPage from "../listItem/item-mypage";


const ListMyPage = ({ data }) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemMyPage
                        key={index}
                        id={item.user_info.id}
                        username={item.user_info.username}
                        img={item.user_info.img}
                        bio={item.user_info.bio}
                    />
                );
            })}
        </>
    );
};

export default ListMyPage;