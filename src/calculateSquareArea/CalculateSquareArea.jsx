const CalculateSquareArea = ({children}) => {

    const number = {children}.children
    const resultArea = number * number
    return <h2>Area cuadrado: {resultArea}</h2>
}
export default CalculateSquareArea;