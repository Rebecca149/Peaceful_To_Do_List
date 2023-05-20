import React from 'react'

function TheList({list, handleClick}) {
    return (
        <ul>
            {list.map((userInput, index) => (<li key={index}>{userInput}
            <button key= {index} onClick={()=>handleClick(index)}>Delete</button>
            </li>))}
        </ul>
    )
};

export default TheList