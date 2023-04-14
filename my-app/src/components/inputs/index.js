import React from 'react';


function InputAndButton({userInput, handleClick, handleChange}) {
    return(
        <div>
            <input value= {userInput} onChange={(event) => {handleChange(event.target.value)}} placeholder='enter your task here'/>
            <button onClick={()=>handleClick}>Add to list!</button>
        </div>
    )
}

export default InputAndButton;