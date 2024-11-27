import Counter from "./Counter";
import {useState} from "react";

const CounterGroup = ({ size, onReset }) => {
    const [counters, setCounters] = useState(Array(size).fill(0));

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

    const reset = () => {
        setCounters(Array(size).fill(0));
    };

    const sum = counters.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="counter-group">
            {counters.map((value, index) => (
                <Counter
                    key={index}
                    value={value}
                    onIncrement={() => increment(index)}
                    onDecrement={() => decrement(index)}
                />
            ))}
            <div className="sum">
                <p>Total Sum: {sum}</p>
            </div>
            <button onClick={reset}>Reset All</button>
        </div>
    );
};
export default CounterGroup;