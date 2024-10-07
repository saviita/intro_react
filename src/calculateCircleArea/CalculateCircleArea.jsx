const CalculateCircleArea = (area) => {
    const radius = area.radius
    const resultArea = Math.PI * radius * radius
    return <h2>Area círculo: {resultArea}</h2>
}
export default CalculateCircleArea;