import { useState, useEffect } from "react";
// useEffect is used if you want something to happen when page loads
import Header from "./components/Header";
// we need the line above to import the header component in the entire app
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Instructions from "./components/Instructions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // this gives you the option to add tasks or not based on state

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      // setTasks here adds to our state
    };

    getTasks();
  }, []);

  // fetch tasks (fetches tasks from backend and displays them)
  const fetchTasks = async () => {
    const res = await fetch(
      "https://task-manager-backend-3uiz.onrender.com/tasks"
    );
    const data = await res.json();

    return data;
  };

  // fetch task (fetches only one task for reminder toggle)
  const fetchTask = async (id) => {
    const res = await fetch(
      `https://task-manager-backend-3uiz.onrender.com/tasks/${id}`
    );
    const data = await res.json();

    return data;
  };

  // add task function
  const addTask = async (task) => {
    const res = await fetch(
      "https://task-manager-backend-3uiz.onrender.com/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random () * 10000) + 1
    // const newTask = {id, ...task } // setting a randomized id for the new task the user enters
    // ^^method of setting new id before json backed was used
  };

  // delete task function
  const deleteTask = async (id) => {
    const res = await fetch(
      `https://task-manager-backend-3uiz.onrender.com/tasks/${id}`,
      {
        method: "DELETE",
      }
    );
    setTasks(tasks.filter((task) => task.id !== id));
    // inside the filter HOF we want to check if the id is not equal to the id that we want (id we want is deleted, rest that doesn't meet condition keep)
  };

  // toggle reminder function
  const toggleReminder = async (id) => {
    const toggleTask = await fetchTask(id);
    const updateTask = { ...toggleTask, reminder: !toggleTask.reminder };

    const res = await fetch(
      `https://task-manager-backend-3uiz.onrender.com/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      }
    );

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
    // the map function in this case just reverses the reminder toggle, this works for both turn on and off!
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {/* notice the && is just a shortened ternary operator without else statement */}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show"
                )}
                {/* onDelete is a prop of tasks so you have to pass it to Tasks */}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    // whenever you return, it has to be a single element (one parent) and anything else you want needs to be inside the component
  );
};

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

// quicky jot down ideas onto it (add notes section), integrate with google calendar?, stylize the X as "done"
// have areas for top priority, medium, and low priority?
