import { useState } from 'react';
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(5); // 默认大小
    const [lastSize, setLastSize] = useState(size);

    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
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
                    min="1"
                />
            </div>
            <CounterGroup size={size} onReset={handleReset} />
        </div>
    );
};
export default MultipleCounter;