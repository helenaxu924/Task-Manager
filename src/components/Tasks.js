import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task = {task} 
        onDelete = {onDelete}
        onToggle = {onToggle}/>
        // ^^passing each task as a prop, the map array method loops through them and we pass each task as a prop with a unique id
      ))}
    </>
    // map array method takes in a function, which in this case is just taking the "text" property of each element in the array that is from 
    // the Task component and assigning each to a new id
  );
};

export default Tasks;
