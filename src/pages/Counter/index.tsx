import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  counterIncrease,
  counterReset
} from "src/states/counter/counter.slice";
import { getCounter } from "src/states/counter/selectors";
import "./styles.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  const onIncrease = useCallback(() => {
    dispatch(counterIncrease());
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(counterReset());
  }, [dispatch]);

  return (
    <div className="container">
      <div>{counter}</div>
      <Button onClick={onIncrease} variant="primary">
        Increase
      </Button>{" "}
      <Button onClick={onReset} variant="secondary">
        Reset
      </Button>{" "}
    </div>
  );
};

export default Counter;
