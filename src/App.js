import { useState } from 'react';
import './app.css';
function App() {
    const [count, setCount] = useState(0);

    const [step, setStep] = useState(1);

    const date = new Date();
    function handelReset() {
        setCount(0);
        setStep(1);
    }

    date.setDate(date.getDate() + count);

    return (
        <div>
            <div className="stepsBox">
                <input type='range' min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
                <span>Step: {step}</span>
            </div>
            <div className="counterBox">
                <button onClick={() => setCount(c => c - step)}>-</button>
                <div><input style={{ fontSize: "20px" }} type='number' value={count} onChange={e => setCount(Number(e.target.value))} /></div>
                <button onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <h1>Today is {date.toDateString()}</h1>
            {(count !== 0 || step !== 1) ? <div>
                <button onClick={handelReset}>Reset</button>
            </div> : ""}
        </div>
    )
}

export default App
