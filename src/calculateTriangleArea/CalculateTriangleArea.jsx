const CalculateTriangleArea = (area) => {
    const base = area.base 
    const height = area.height
    const resultArea = (base * height) / 2
    return <h2>Area triángulo: {resultArea}</h2>
}
export default CalculateTriangleArea;