import ItemPost from "../listItem/item-post";


const ListPost = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemPost
                        key = {index}
                        id = {item.id}
                        title = {item.title}
                        username = {item.username}
                        song = {item.song}
                        music_img={item.music_img}
                    />
                )
            })}
        </>
    )
}

export default ListPost;