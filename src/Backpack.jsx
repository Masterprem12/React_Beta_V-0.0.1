import './style.css'
import { useState } from 'react';

function rollDice() {
    console.log(Math.floor(Math.random() * 6+1));
}


export default function Backpack() {
    const items = ["Money" , "Sunglasses" , "Powerbank"]
    const filterList=items.filter(i=>1.includes("1"));
    return (
        <div className='main'>
            <ol>
                {filterList.map(i=><items name={i}/>)}
            </ol>
        </div>

    );
}