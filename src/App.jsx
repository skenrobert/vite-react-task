import { useEffect, useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { tasks } from "./data/tasks";

import {Routes, Route} from 'react-router-dom'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";



// import { Navi } from "./Components/Navi";

function App() {
  //shortcut useStatesnippet
  // const [mapTask, setmapTask] = useState(tasks);

  // useEffect(() => {
  //     setmapTask(mapTask)
  // }, [])

  //shortcut clg
  // console.log(mapTask)

  // if (mapTask.length === 0) {
  //   return <h1>there not tasks now</h1>;
  // }

  // function createTask(tasktitle, textDescription) {
  //   // go ro send en props createTask

  //   const newTask = {
  //     title: tasktitle,
  //     id: mapTask.length +1,
  //     description: textDescription,
  //   };

  //   setmapTask([...mapTask, newTask]); // create new array tasks and add task, create new array no change the main
  //   //update maptask

  //   //other form is
  //   // setmapTask([...mapTask, {
  //   //   title: tasktitle,
  //   //   id: mapTask.length,
  //   //   description: "test create task"
  //   // }])
  // }

  // function deleteTask(id){

  //    setmapTask(mapTask.filter(task => task.id !== id))
  //   // console.log(mapTask)
  //   // console.log(id)

  // }

  function divRoutes(){

    return ( 
        <Routes>     
            <Route path="/" element={ <Home/>} />
            <Route path="about" element={ <About/>} />
            <Route path="contact" element={ <Contact/>} />
        </Routes>);
  }



  return (
   <div>
        <divRoutes/>
        {/* <Navi/> */}

<h1>NO se que pasa</h1>
<Home/>

        {/* <div className="bg-zinc-900 h-screen"> */}
          {/* <div className="container mx-auto p-4"> */}
              {/* <TaskForm createTask={createTask} /> */}
              {/* <TaskForm /> */}
              {/* <TaskList tasks={mapTask} deleteTask = {deleteTask} /> */}
              {/* <TaskList /> */}
          {/* </div> */}
        {/* </div> */}
  </div>
  );
}

export default App;
