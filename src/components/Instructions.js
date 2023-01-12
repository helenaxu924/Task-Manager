import {Link} from 'react-router-dom'

const Instructions = () => {
  return (
    <div><h4>Welcome to your handy task manager!</h4>
    <br></br>
   <h5 className='h5'> Easy-to-use, convenient, and made with love,
        you can use this task manager for all your needs ranging from a quick reminder of your errands 
        to organizing all your upcoming assigment deadlines. 
        <br>
        </br> 
         <br>
        </br> 
        To add a task click the green add button at the 
        top right corner, and enter all the required details from the task title to the day and time of your deadline. 
        You can also set the task as "important" by clicking the checkbox, which will highlight this task in your task manager.
        Then just click the "Save Task" button and your task is added! 
        <br>
        </br> 
         <br>
        </br> You can also set a task as important after saving it by double clicking on the task. Don't forget to click the red cross
        icons at the right of each task to complete the task and remove it from the manager! </h5> 
        <br></br>
        <h4>Happy Tasking!</h4><br></br>
   <Link to='/'>Go Back</Link></div>
  )
}

export default Instructions