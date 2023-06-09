import InputAndButton from "./components/inputs";
import TheList from './components/ListItems/index.js';
import {useState} from 'react';
import React from 'react';
import './App.css';



function App() {

  const [list, setList] = useState([]); // Sets the state of the list (empty at first)
  const [userInput, setUserInput] = useState('') // Sets the state of the user input (empty at first)


  //The function that deals with adding the user input to the list
  function addItemToList() { 
    const newList = [userInput, ...list];
    setList(newList);
    setUserInput('');
  }

  // The function that changes the value of 'userInput' every time they type in the input field
  function changeUserInputValue(userInput){
    setUserInput(userInput)
  }

  function deleteAnItem(index) {
    const newList = [...list.slice(0,index), ...list.slice(index+1)];

    setList(newList);
  }


  return (
    <div>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </head>
    <div className='page'>
    <div className='listCard'>
      <h1 className='listTitle'>To Do List</h1>
      <InputAndButton 
      handleChange={changeUserInputValue} 
      handleClick= {addItemToList}
      text={userInput}/>
      <TheList 
      list={list} 
      userInput={userInput}
      handleClick={deleteAnItem}/>
    </div>
    </div>
    </div>
  )
}

export default App;
