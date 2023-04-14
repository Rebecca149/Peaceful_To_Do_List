import InputAndButton from "./components/inputs";
import {useState} from 'react'
import TheList from "./components/listItems";



function App() {

  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('')

  function addItemToList() {
    const newList = [userInput, ...list];
    setList(newList);
  }

  function changeUserInputValue(userInput){
    setUserInput(userInput)
  }

  // function displayInList() {
  //     const newListItem = 
  // }


  return (
    <div>
      <h1>To Do List</h1>
      <InputAndButton handleChange={changeUserInputValue} handleClick= {addItemToList} text={userInput}/>
      <TheList/>
    </div>
  )
}

export default App;
