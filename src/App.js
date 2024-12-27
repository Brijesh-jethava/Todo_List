import logo from './logo.svg';
import './App.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications'
import { useState } from 'react';
import { data } from './data';

function App() {
  let[todolist , setTodolist] = useState([])

  let saveToDolist = (event)=>
    {
      let toName = event.target.txtbox.value;
      // alert(toName);
      if(!todolist.includes(toName))
        {
           let finalTodolist = [...todolist , toName]
           setTodolist(finalTodolist)
        }
        else
        {
          NotificationManager.error("ToDolist already exists");
        }
      event.preventDefault();  //To avoid Refreshing of page at save time

    }

    let list = todolist.map((val,i)=>{
    return(
      <ToDoListItems value ={val} key={i} indexNumber = {i} todolist={todolist} setTodolist={setTodolist}/>
    ) 
   })
  

  return (

    <div className="App">

    {/* ToDoList */}
    <NotificationContainer/>
      <h1>ToDo List</h1>
      <form onSubmit = {saveToDolist}>
        <input type="text"  name='txtbox' placeholder='Add Task'/>
        <button>Save</button>
      </form>

     <div className="outerDiv">
      <ul>
        {list}
      </ul>
     </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist})
{
  let[status,setStatus] = useState(false)
  let deletRow = ()=>
    {
      let finaldata = todolist.filter((val,i)=>i!=indexNumber)
      setTodolist(finaldata)
    }
  
  let checkStatus = ()=>
    {
      setStatus(!status)
    }
  return(
    <li className={(status) ? 'completeTodo':''} onClick={checkStatus}>{indexNumber+1}. {value}<span onClick={deletRow}>&times;</span></li>
  )
}
 
