import { useState } from 'react'
import Header from './components/Header' 
// we need the line above to import the header component in the entire app
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false) 
  // this gives you the option to add tasks or not based on state 
  
  const [tasks, setTasks] = useState([
    {id: 1,
    text: "cry"},
    {id: 2,
    text: "die"}, 
    {id: 3,
      text: "speedrun coop"}
])

 
// add task function 
const addTask = (task) => {
  const id = Math.floor(Math.random () * 10000) + 1
  const newTask = {id, ...task } // setting a randomized id for the new task the user enters
  setTasks([...tasks, newTask])
}

// delete task function 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  // inside the filter HOF we want to check if the id is not equal to the id that we want (id we want is deleted, rest that doesn't meet condition keep)
}

// toggle reminder function 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  // the map function in this case just reverses the reminder toggle, this works for both turn on and off!
}

  return (
    <div className="container">
      <Header  onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd = {addTask} />}
      {/* notice the && is just a shortened ternary operator without else statement */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>)  : ('No tasks to show')}
      {/* onDelete is a prop of tasks so you have to pass it to Tasks */}
    </div>
    // whenever you return, it has to be a single element (one parent) and anything else you want needs to be inside the component 
  );
}

// ternary operator form 

export default App;


/* importing and adding components like above but using classes instead of functions
import React from "react";

class App extends React.Component {
  render () {
    return <h1> hello again</h1>
  }
  // TODO: is this like the function render that is called and then returns the html? 
}
export default App
 */





// we install react icons which allows us to use multiple icon libraries 