import React, {useEffect, useState } from "react";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(["juu", "jaa", "joo"])
  const [newTaskItem, updateNewTaskItem] = useState("")  

  let addNewTaskToList = function(taskItem) {
      let taskListCopy = [...taskList]
      taskListCopy.push(taskItem)
      setTaskList(taskListCopy)

    }


  return (
    <div className="App">

    <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value)}/>
    <input type="button" value="Lisää taski" onClick= {() => addNewTaskToList(newTaskItem) } />

      {taskList.map( (singleTask)  => <p>{singleTask}</p>)}
      
     {/* <button type = "button" onClick={() => increaseCounter(counter + 1)}>Laskurin arvo {counter}</button> */}
    </div>
  );
}

export default App;
