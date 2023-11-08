import ItemSave from "../listItem/item-save";


const ListSave = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemSave
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

export default ListSave;