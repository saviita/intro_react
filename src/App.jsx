import CalculateCircleArea from "./calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./celsiusToFahrenheit/CelsiusToFahrenheit";
import SayHello from "./sayHello/SayHello";

const App = () => {
  return (
  <>
  <SayHello>tati</SayHello>
  <CalculateSquareArea>2</CalculateSquareArea>
  <CalculateTriangleArea base={4} height={5}/>
  <CalculateCircleArea radius={2}/>
  <CelsiusToFahrenheit celsius={34}/>
  </>
  ); 
};
export default App;