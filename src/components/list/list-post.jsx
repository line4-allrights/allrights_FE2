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
                        music_file = {item.music_file}
                        music_image={item.music_image}
                    />
                )
            })}
        </>
    )
}

export default ListPost;