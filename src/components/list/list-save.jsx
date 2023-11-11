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
                        music_file = {item.music_file}
                        music_image={item.music_image}
                    />
                )
            })}
        </>
    )
}

export default ListSave;