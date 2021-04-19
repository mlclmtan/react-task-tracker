import { FaTimes } from 'react-icons/fa'; //times=cross

const Task = ({ task }) => { //must destructure, otherwise task.task.text
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
