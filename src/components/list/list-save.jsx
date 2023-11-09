import ItemSave from "../listItem/item-save";


const ListSave = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemSave
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

export default ListSave;