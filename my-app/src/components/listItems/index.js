import React from 'react'

function TheList({list, handleClick}) {
    return (
        <ul>
            {list.map((userInput, index) => (<li key={index}>{userInput}
            <button id='deleteButton' key= {index} onClick={()=>handleClick(index)}>-</button>
            </li>))}
        </ul>
    )
};

export default TheList