import React, { useState } from "react";

function StatefulCounter(props) {
    const [count, setCount] = useState(5);

    function increaceCounter() {
        setCount(prevCount => (prevCount + 1))
    }

    function decreaseCounter() {
        setCount(prevCount => (prevCount - 1))
    }

    return(
        <>
            <div>clicked {count} times</div>
            <button onClick={increaceCounter}>+1</button>
            <button onClick={decreaseCounter}>-1</button>
        </>
    )
}

export default StatefulCounter;