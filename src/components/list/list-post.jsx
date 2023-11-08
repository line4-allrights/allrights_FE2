import ItemPost from "../listItem/item-post";


const ListPost = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemPost
                        key = {index}
                        id = {item.id}
                        name = {item.name}
                        producer = {item.producer}
                        song = {item.song}
                        time={item.time}
                        img={item.image}
                    />
                )
            })}
        </>
    )
}

export default ListPost;