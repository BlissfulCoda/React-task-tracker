import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div class={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToggle(task.id)}>
      <h4>
        {task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/>
      </h4>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
