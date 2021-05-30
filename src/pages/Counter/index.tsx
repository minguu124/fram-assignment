import React, { useCallback } from "react";
import { Button, Card } from "react-bootstrap";
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
    <div className="counter-container">
      <Card className="text-center counter">
        <Card.Header>COUNTER</Card.Header>
        <Card.Body>
          <Card.Title>{counter}</Card.Title>
        </Card.Body>
        <Card.Footer className="counter-container-btn">
          <Button onClick={onReset} variant="secondary" className="counter-btn">
            RESET
          </Button>
          <Button
            onClick={onIncrease}
            variant="primary"
            className="counter-btn"
          >
            INCREASE
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Counter;
