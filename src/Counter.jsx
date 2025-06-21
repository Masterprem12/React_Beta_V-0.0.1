import './Counter.css'
import { useState } from 'react';

export default function Counter (){
    function refreshPage () {
        window.location.reload(false);
    }
    const [count ,setCount] =useState(0);
    const handleClick1 = () => {
        setCount(count + 1);
    };
    const reset = () =>{
        setCount(0);
    }
    const handleClick2 = () => {
        setCount(count - 1 );
    };

    return (
        <body>
            <div class = "main">
                <p>
                <span>Your click me {count} times</span>
                <center>
                    <button type="button" onClick={handleClick1}>
                        Click me for plus 1
                    </button>
                    <button type="button" onClick={handleClick2}>
                        Click me for minus 1
                    </button>
                    <button type="button" onClick={reset}> 
                        reset
                    </button>
                    <button onClick={refreshPage} class = "footer">Click to reload!</button>
                </center>
                </p>
            </div>
        </body>
    );
}