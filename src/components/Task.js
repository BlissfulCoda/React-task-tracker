const Task = ({ task }) => {
    return (
        <div class="task">
            <h4>{task.text}</h4>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
