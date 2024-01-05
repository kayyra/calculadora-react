import React, {useState} from "react";
import Button from './Button'
import './Calculator.css'


const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if(value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C',
    ];


    return (
        <div className="calculator">
        <input className="input-display" type="text" value={input} readOnly />
        <div className="button-container">
          {buttons.map((button) => (
            <Button key={button} value={button} handleClick={handleClick} />
          ))}
        </div>
      </div>
    )
}

export default Calculator;