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
        <div className='btn__box'>
            <div className="stepsBox">
                <input type='range' min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
                <span>Step: {step}</span>
            </div>
            <div className="counterBox">
                <button className='btn' onClick={() => setCount(c => c - step)}>-</button>
                <div><input className='input' style={{ fontSize: "20px" }} type='number' value={count} onChange={e => setCount(Number(e.target.value))} /></div>
                <button className='btn' onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <h2>Today is {date.toDateString()}</h2>
            {(count !== 0 || step !== 1) ? <div>
                <button className='reset' onClick={handelReset}>Reset</button>
            </div> : ""}
        </div>
    )
}

export default App
