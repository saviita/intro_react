const CelsiusToFahrenheit = (number) => {
    const celsius = number.celsius
    const resultFahrenheit = celsius * 1.8 + 32
    return <h2>Fahrenheit: {resultFahrenheit}</h2>
}
export default CelsiusToFahrenheit;