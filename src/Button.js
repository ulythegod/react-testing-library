import React from "react";

function Button(props) {
    return (
        <button onClick={() => props.onClick()}>click me nao</button>
    )
}

export default Button;