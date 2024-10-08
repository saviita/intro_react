import CalculateCircleArea from "./calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./fahrenheitToCelsius/FahrenheitToCelsius";
import SayHello from "./sayHello/SayHello";
import TotalPrice from "./totalPrice/TotalPrice";
import WriteMessage from "./writeMessage/WriteMessage";

const App = () => {
  return (
  <>
  <SayHello name='tati'/>
  <CalculateSquareArea>2</CalculateSquareArea>
  <CalculateTriangleArea base={4} height={5}/>
  <CalculateCircleArea radius={2}/>
  <CelsiusToFahrenheit celsius={34}/>
  <FahrenheitToCelsius fahrenheit={28}/>
  <TotalPrice price={15}/>
  <WriteMessage name='Lucas' material='nubes' size='enorme' note='Sigo sin sufrir con los ejercicios'/>
  </>
  ); 
};
export default App;