import ItemEffect from "../listItem/item-effect";


const ListEffect = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemEffect
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

export default ListEffect;