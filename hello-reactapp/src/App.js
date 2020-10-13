import React, {useEffect, useState } from "react";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTaskItem, updateNewTaskItem] = useState("")
  
  

  let addNewTaskToList = function(taskItem) {
      let taskListCopy = [...taskList]
      let taskItemObj = {"id": Math.floor(Date.now() / 1000), "taskContent": taskItem }
      taskListCopy.push(taskItemObj)
      setTaskList(taskListCopy)
      updateNewTaskItem("")

    }


    let deleteTask = function(taskId) {
        let taskListCopy = [...taskList]
        // taskListCopy.forEach((taskListItem) => if(taskListItem.id === taskId {taskListAnotherCopy.push(taskListItem)})
        let shortenedTaskList = taskListCopy.filter(taskListItem => taskListItem.id !== taskId)
        // console.log(shortenedTaskList)
        setTaskList(shortenedTaskList)
    
      }


    let deleteTaskFromList = function(taskItemId) {


    }

  return (
    <div className="App">

    <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value)}/>
    <input type="button" value="Lisää taski" onClick= {() => addNewTaskToList(newTaskItem) } />

      {taskList.map( (singleTask)  => <p>{singleTask.taskContent}<button onClick={() => deleteTask(singleTask.id)}>X</button></p>)}

     {/* <button type = "button" onClick={() => increaseCounter(counter + 1)}>Laskurin arvo {counter}</button> */}
    </div>
  );
}

export default App;
