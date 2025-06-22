import './style.css';
import { useRef, useState } from 'react';

export default function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);

    const [bmiResult, setBmiResult] = useState(null);

    function calBmi() {
        const w = w_inputRef.current.value;
        const h = h_inputRef.current.value / 100;
        if (w > 0 && h > 0) 
        {
            const results = (w / (h * h));
            setBmiResult(results.toFixed(2));
        } 
        else 
        {
            setBmiResult(null);
        }
    }
    
    return (
        <div className="bmi-container">
            <h1>BMI Calculator</h1>
                <div className="input-group">
                    <label htmlFor="weight">Weight (Kg)</label>
                    <input id="weight" ref={w_inputRef} type="number" />
                </div>
                <div className="input-group">
                    <label htmlFor="height">Height (Cm)</label>
                    <input id="height" ref={h_inputRef} type="number" />
                </div>
                {bmiResult && (<p className="bmi-result">Your BMI is: <span>{bmiResult}</span></p>)}
            <button className="calculate-btn" onClick={calBmi}>Calculate</button>
        </div>
    );
}