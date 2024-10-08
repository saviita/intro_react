const FahrenheitToCelsius = (number) => {
    const fahrenheit = number.fahrenheit
    const resultCelsius = (fahrenheit - 32) / 1.8
    return <h2>Celsius: {resultCelsius}</h2>
}
export default FahrenheitToCelsius