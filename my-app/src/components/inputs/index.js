import React from 'react';


function InputAndButton({userInput, handleClick, handleChange}) {
const handleButtonClick = () => {
    handleClick(); // Call the handleClick function passed as a prop
    };
    
    return(
    <div>
        <input value= {userInput} onChange={(event) => {handleChange(event.target.value)}} placeholder='enter your task here'/>
        <button onClick={handleButtonClick}>Add to list!</button>
    </div>
    )
}

export default InputAndButton; 