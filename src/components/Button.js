import React from "react";

const Button = ({value, handleClick}) => {
    return (
        <button onClick={() => handleClick(value)}>
            {value}
        </button>
    );
};

export default Button;