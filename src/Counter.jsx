import './style.css'
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
    const [value,setValue] = useState("");
    function onTextChange(event){
        console.log("function event got call : " +event.target,value)
        setValue(event.target.value);
    }


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
                </center>
                <center>
                    <div>
                        <p>
                            <input type="number" value={value} onChange={(event)=>onTextChange(event)} />
                            <br />
                            <span>Celsius : {value} to Fahrenheit : {value *1.8+32}</span>
                        </p>
                    </div>
                    <hr />
                    <p>
                        <button onClick={refreshPage} class = "footer">Click when u got bug</button>
                    </p>
                </center>
                </p>
            </div>
        </body>
    );
}