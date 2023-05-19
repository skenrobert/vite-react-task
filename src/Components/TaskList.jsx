import { useContext } from "react";
import { AppContex } from "../contex/AppContext";
import TaskCard from "./TaskCard"

//shortcut rfce
// function TaskList(props) {
  function TaskList() {

     //console.log(props)
  const { mapTask } = useContext(AppContex)

  if (mapTask.length === 0) {
    return <h1 className="text-4xl text-white font-bold text-center">there are not tasks now</h1>;
  }

    return (
    <div className="grid grid-cols-4 gap-2">
        {   
            // props.tasks.map((task) => (
              mapTask.map((task) => (
                // <div key={task.id}>
                //     <div>{task.title}</div>
                //     <div>{task.description}</div>
                // </div>
                //optimize syntax
                // <TaskCard key={task.id} task={task} deleteTask={props.deleteTask} />
                <TaskCard key={task.id} task={task} />
            ))
            }
    </div>
  )
}

export default TaskList