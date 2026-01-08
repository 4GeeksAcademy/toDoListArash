import React, { useState } from "react";

const TodoItem = ({ text, onDelete }) => {
  return (
    // Each row in the list
    <li className="todo-item">
      {/* Task text on the left */}
      <span>{text}</span>

      {/* Delete button on the right (only visible on hover with CSS) */}
      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
      >
        ×
      </button>
    </li>
  );
};

const CompJ = () => {
  const [tasks, setTasks] = useState([]);

  // State-> text currently typed in the input
  const [newTask, setNewTask] = useState("");

  // Handle form submission->when user press Enter
  const handleSubmit = (event) => {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Remove spaces at the beginning and end
    const trimmed = newTask.trim();

    // If the input is empty after trimming, do nothing
    if (trimmed === "") return;

    // Add the new task ->create a new array
    setTasks((prevTasks) => [...prevTasks, trimmed]);

    // Clear the input
    setNewTask("");
  };

  // Handle each keystroke in  input
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Handle deletion of a task by its index in the array
  const handleDelete = (indexToRemove) => {
    // Filter out the task whose index matches indexToRemove
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  };

  // how many items  left
  const itemsLeft = tasks.length;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={handleChange}  // Update state
        />
      </form>

      {/* Task list */}
      <ul className="todo-list">
        {/* If there are no tasks, show no task message */}
        {tasks.length === 0 ? (
          <li className="todo-empty">No tasks, add a task</li>
        ) : (
          // Otherwise, map each task to TodoItem
          tasks.map((task, index) => (
            // Use index as key
            <TodoItem
              key={index}
              text={task}
              onDelete={() => handleDelete(index)}
            />
          ))
        )}
      </ul>

      {/* Footer with items left */}
      <div className="todo-footer">
        {itemsLeft === 1
          ? "1 item left"
          : `${itemsLeft} items left`}
      </div>
    </>
  );
};

export default CompJ;