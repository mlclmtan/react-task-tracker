const Task = ({task}) => { //must destructure, otherwise task.task.text
    return (
        <div className="task">
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
