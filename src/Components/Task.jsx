const Task = ({ task, onToggle, onDelete }) => {
  return (
    <>
      <div className={`task  ${task.completed ? "completed" : "incomplete"}`}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button
          onClick={() => onToggle(task.id)}
          className={`btn btn-sm ${
            task.completed ? "btn-warning" : "btn-success"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Task;
=======

const Task=({task,onToggle,onDelete})=>{
    return(
        <>
        <div className={`task  ${task.completed ? 'completed' : 'incomplete'}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => onToggle(task.id)} className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>

        </div>
        </>
    )
}

export default Task
>>>>>>> b1cb9cb52f1eea50d893367fac69f768a6a4f6e8
