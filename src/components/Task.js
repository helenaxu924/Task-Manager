import { FaTimes } from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className = {`task ${task.reminder ? "reminder" : ''}`}
    // the above is a template literal involving javascript ternary operator to set the reminder class on or off depnding on whether reminder toggle on or off, also note the template literal
    // allows for default task styling as well as the reminder styling if it is on or not, so multiple classes can be applied to one element
     onDoubleClick={() => onToggle(task.id)}><h3>{task.text}{''} <FaTimes style={{ color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)}/></h3>
    {/* we add FaTimes just like we'd add any component, that's using the react icons */}
    {/* for the onDelete function you can't directly do that because it will pass information about the event as the id of each so you pass it an anonymous function where the execution is just the delete */}
    </div>
  )
}

export default Task