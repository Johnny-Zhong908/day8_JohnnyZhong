import { useState } from 'react';
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [lastSize, setLastSize] = useState(size);

    const handleSizeChange = (event) => {
        let newSize = parseInt(event.target.value, 10);

        // 限制 newSize 在 0 到 20 的范围内
        if (newSize < 0) newSize = 0;
        if (newSize > 20) newSize = 20;

        setSize(newSize);
    };

    const handleReset = () => {
        if (size !== lastSize) {
            setLastSize(size);
        }
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
            </div>
            <CounterGroup size={size} onReset={handleReset} />
        </div>
    );
};

export default MultipleCounter;