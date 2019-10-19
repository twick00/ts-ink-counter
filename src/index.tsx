import * as React from "react";
import { render, Color } from "ink";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });

  return <Color green>{counter}</Color>;
};

render(<Counter />);
