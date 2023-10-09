import React, { useRef, useEffect, useState } from 'react';

function Test() {
    const prevCountRef = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        prevCountRef.current = count;
    });

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Test;