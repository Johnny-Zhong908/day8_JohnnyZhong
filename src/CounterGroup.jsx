import { useState, useEffect } from 'react';
import Counter from './Counter';

const CounterGroup = ({ size }) => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    setCounters(Array(size).fill(0));
  }, [size]);

  const increment = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const decrement = (index) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  const sum = counters.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="counter-group">
      <div className="sum">
        <p>Total Sum: {sum}</p>
      </div>
      {counters.map((value, index) => (
        <Counter
          key={index}
          value={value}
          onIncrement={() => increment(index)}
          onDecrement={() => decrement(index)}
        />
      ))}
    </div>
  );
};

export default CounterGroup;
