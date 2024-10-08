const TotalPrice = (number) => {
    const price = number.price
    const iva = (price * 21) / 100
    const resultIVA = price + iva
    return <h2>Precio con IVA: {resultIVA}</h2>
}
export default TotalPrice