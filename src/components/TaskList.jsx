import './TaskList.css';
import { useState } from 'react';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleUpdate = () => {
    const updated = [...tasks];
    updated[editIndex] = editText;
    setTasks(updated);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="task-container">
      <h2>📝 Task List</h2>
      <div className="input-row">
        <input
          type="text"
          value={newTask}
          placeholder="Add a new task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="update" onClick={handleUpdate}>Update</button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div className="btns">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
