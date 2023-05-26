import { createContext } from "react" 
import { useEffect, useState } from "react";

import { tasks } from "../data/tasks";


export const AppContex = createContext() // go have all variables and constant of you app

export function AppContextProvider(props) {
    let x = 20
    const url_backend ='http://localhost:85/test-backend/public/api/'
    const url_img = "http://localhost:85/test-backend/public/images/img_api/"
    const home = "http://localhost:5173/"

    const usuario = {
        id: 0,
        email: "",
        imagen: "",
        estatus: true,
        msgEstatus: "",
        email_verified_at: "",
        creador_id: 0,
        persona_id: 0,
        access_token:"",
    }

    const [mapTask, setmapTask] = useState(tasks);
    const [seccion, setSeccion] = useState(usuario);

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
        createTask: createTask,
        x,
        url_backend,
        url_img,
        setSeccion: setSeccion,
        seccion: seccion
    }}>
        {/* {/* <h1>appcontext</h1> */}
     {props.children}
    </AppContex.Provider>
  )
}
