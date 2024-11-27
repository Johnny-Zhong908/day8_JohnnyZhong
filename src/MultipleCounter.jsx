import { useState, useEffect } from 'react';

const MultipleCounter = () => {
    const initialSize = 0;
    const [size, setSize] = useState(initialSize);
    const handleSizeChange = (event) => {
        let newSize = parseInt(event.target.value, 10);

        if (newSize < 0) newSize = 0;
        if (newSize > 20) newSize = 20;

        setSize(newSize);
    };
    const handleReset = () => {
        setSize(initialSize);
    };

    return (
        <div className="multiple-counter">
            <div className="size-selector">
                <label>Counter Size: </label>
                <input
                    type="number"
                    value={size}
                    onChange={handleSizeChange}
                    min="0"
                    max="20"
                />
                <button onClick={handleReset}>Reset</button>
            </div>
            <CounterGroup size={size} />
        </div>
    );
};

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

const Counter = ({ onIncrement, onDecrement, value }) => (
    <div className="counter">
        <button onClick={onDecrement}>-</button>
        <span>{value}</span>
        <button onClick={onIncrement}>+</button>
    </div>
);

export default MultipleCounter;
