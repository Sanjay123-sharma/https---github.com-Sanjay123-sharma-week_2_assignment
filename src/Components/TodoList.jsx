import Task from "./Task";

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task 
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
