import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {
  const [state,setState]=useState({
    tasks:[],
    taskName:"",
    taskDescription:""
  });

  useEffect(()=>{
    console.log("Task upadated:",state.tasks)
  },[state.tasks]);

  // handle Inputs
  const handleInputs=(e)=>{
    const {name,value}=e.target;
    setState((prevData)=>({
      ...prevData,[name]:value

    }))
  }
  // handle addTask
  const addTask=(e)=>{
    e.preventDefault();

    const {taskName,taskDescription}=state;
    
    if(taskName.trim()==="" || taskDescription.trim()===""){
      alert('Please fill in both fields');
      return;
    }

    const newTask={
      id:Date.now(),
      name:taskName,
      description:taskDescription,
      completed:true
    }

    setState((prevData)=>({
      ...prevData,
      tasks:[...prevData.tasks,newTask],
      taskName:"",
      taskDescription:''

    }));
    



  }
  const toggleComplete = (id) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const deleteTask = (id) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };


  return (
    <div className="App">
    {/* Header */}
    <header className="App-header bg-primary text-white py-4 rounded-top text-center">
      <h1 className="mb-0">TODO LIST</h1>
      <p className="lead">Stay organized, one task at a time</p>
    </header>

    {/* Form */}
    <form onSubmit={addTask} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          name="taskName"
          className="form-control"
          placeholder="Task Name"
          value={state.taskName}
          onChange={handleInputs}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="taskDescription"
          className="form-control"
          placeholder="Task Description"
          value={state.taskDescription}
          onChange={handleInputs}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        ADD TASK
      </button>
    </form>

    {/* Task List or Message */}
    {state.tasks.length === 0 ? (
      <p className="text-center mt-4 text-muted">No tasks available.</p>
    ) : (
      <TodoList tasks={state.tasks} onToggle={toggleComplete} onDelete={deleteTask} />
    )}

    {/* Footer */}
    <footer className="App-footer bg-skyblue  text-center text-muted py-3 rounded-bottom mt-5">
      <small className='App-footer-small'>&copy; 2025 Todo App. All rights reserved.</small>
    </footer>
  </div>
    
  )
}

export default App;
//       <header className="App-header"> </header>
       
       

