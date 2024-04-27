import React, { useState } from 'react';

const Hook = () => {
    const[a, setA] = useState("");
    const[b, setB] = useState("");
    const [result, setResult] = useState("");
    const handle_plus = () => {
        setResult(Number(a) + Number(b));
    }
    const handle_minus = () => {
        setResult(a - b);
    }
    const handle_multi = () => {
        setResult(a * b);
    }
    const handle_devide = () => {
        setResult(a / b);
    }
    return (
        <div>
            <input 
            value={a}
            onChange={(e) => setA(e.target.value)}
            /> <br />
            <input 
            value={b}
            onChange={(e) => setB(e.target.value)}
            /> <br />
            <button onClick = {handle_plus}>+</button>
            <button onClick = {handle_minus}>-</button>
            <button onClick = {handle_multi}>*</button>
            <button onClick = {handle_devide}>/</button>
            <p>Kết quả: {result}</p>
        </div>
    );
}

export default Hook;
