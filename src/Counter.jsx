import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </div>
    );
}

export default Counter;