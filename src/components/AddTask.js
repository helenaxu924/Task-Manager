import { useState } from "react"
// each input has component level state

const AddTask = ( {onAdd}) => {
    const [text, setText] = useState('')
    // notice the first in the array is the value, which is what we change in the value for each below
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false) // default for reminder since checkbox is false
    // setText is method to update text 
    
const onSubmit = (e) => {
    e.preventDefault() // prevents form from auto submitting

    if (!text) { // checking to see if user added text 
        alert('Please add a task')
        return
      }
  
      onAdd({ text, day, reminder })
  
      setText('')
      setDay('')
      setReminder(false)
    //   clearing all of the inputs 
    }
    
  return (
    <form className= 'add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type = 'text' placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            {/*  e.target.value is the value property of some DOM element, in this case that means the text entered in the text input. */}
            </div>
            <div className="form-control">
             <label>Day & Time</label>
             <input type = 'text' placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
             </div>
             <div className="form-control form-control-check">
             <label>Set Important</label>
             <input type = 'checkbox' checked = {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
             </div>
             <input type='submit' value='Save Task' className='btn btn-block'/>
             </form>

  )
}

export default AddTask;
