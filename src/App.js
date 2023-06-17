import { useState } from 'react';
import './app.css';
function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date();
    date.setDate(date.getDate() + count);
    return (
        <div>
            <div className="stepsBox">
                <button onClick={() => setStep(c => c - 1)}>-</button>
                <div>Steps {step}</div>
                <button onClick={() => setStep(c => c + 1)}>+</button>
            </div>
            <div className="counterBox">
                <button onClick={() => setCount(c => c - step)}>-</button>
                <div>Counter {count}</div>
                <button onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <h1>Today is {date.toDateString()}</h1>
        </div>
    )
}

export default App
