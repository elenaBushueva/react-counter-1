import {useState} from "react";

function Counter( {initialValue = 0, step = 1} ) {

    const [counter, setCounter] = useState(initialValue);

    const plus = () => {
        setCounter(counter + step)
    };

    const minus = () => {
        setCounter(counter - step)
    };

    return (
        <div>
            <button onClick={minus}>Minus</button>
            {counter}
            <button onClick={plus}>Plus</button>
        </div>
    );
}

export default Counter;