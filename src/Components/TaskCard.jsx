// import AppContext from "../contex/AppContext";
import { useContext } from "react";
import { AppContex } from "../contex/AppContext";

function TaskCard({task}) { //task no is in the context because is the task will be delete, come loop
  
  const {deleteTask, x} = useContext(AppContex)
  
  // function deleteTask(){
  //     alert('delete task' + task.id);
  // }

  return (
    // <AppContext>

  //  {/* <div key={task.id}> */}
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <div className="text-xl font-bold capitalize">{task.title}</div>
      <div className="text-gray-500 text-sm">{task.description}</div>
      <button className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
      // onClick={deleteTask(task.id)} //fail below correct construction
      onClick={ () => deleteTask(task.id)
      }> 
        Delete {x}</button>
    </div>

    // </AppContext>
  );
}

export default TaskCard;
