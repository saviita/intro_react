const WriteMessage = (info) => {
    const name = info.name
    const material = info.material
    const size = info.size
    const note = info.note
    console.log(name, material)
    return <h2>{name} ha pedido una caja de {material} de tamaño {size}. {note}</h2>
}
export default WriteMessage