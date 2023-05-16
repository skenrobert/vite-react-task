//shortcut rfce
function TaskList(props) {

     //console.log(props)
    return (
    <div>
        {   
            props.tasks.map((task) => (
                <div key={task.id}>
                    <div>{task.title}</div>
                    <div>{task.description}</div>
                </div>
            ))
            }
    </div>
  )
}

export default TaskList