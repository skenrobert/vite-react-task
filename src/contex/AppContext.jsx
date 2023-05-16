import { createContext } from "react" 
import { useEffect, useState } from "react";

import { tasks } from "../data/tasks";


export const AppContex = createContext() // go have all variables and constant of you app

export function AppContextProvider(props) {
    let x = 20

  const [mapTask, setmapTask] = useState(tasks);

  function createTask(tasktitle, textDescription) {
    // go ro send en props createTask

    const newTask = {
      title: tasktitle,
      id: mapTask.length +1,
      description: textDescription,
    };

    setmapTask([...mapTask, newTask]); // create new array tasks and add task, create new array no change the main
  }

  function deleteTask(id){
    setmapTask(mapTask.filter(task => task.id !== id))
 }


  return (
    <AppContex.Provider value={{ 
        mapTask: mapTask,
        deleteTask: deleteTask,
        createTask: createTask
    }}>
        {/* {/* <h1>appcontext</h1> */}
     {props.children}
    </AppContex.Provider>
  )
}
