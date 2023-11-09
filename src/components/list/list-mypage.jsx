import ItemPost from "../listItem/item-mypage";


const ListMyPage = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemPost
                        key = {index}
                        userid = {item.user_info.userid}
                        username = {item.user_info.username}
                        img = {item.user_info.img}
                        bio = {item.user_info.bio}
                    />
                )
            })}
        </>
    )
}

export default ListMyPage;