import { FaTimes } from 'react-icons/fa'; //times=cross

const Task = ({ task, onDelete, onToggle }) => { //must destructure, otherwise task.task.text
    return (
        <div className="task" onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
