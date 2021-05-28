import { useSelector } from "react-redux";
import { getCounter } from "src/states/counter/selectors";

const Counter = () => {
  const counter = useSelector(getCounter);
  console.log(counter);
  return <div></div>;
};

export default Counter;
