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
  const [mapTask1, setmapTask] = useState(tasks);

//   useEffect (() => {
//     // setMaptaSk (MATTASK)
// }, [console.log('here')])


  //shortcut clg
  
  // console.log(mapTask1)
  // fetchUsers(setError)
  // console.log(users)

  // if (mapTask.length === 0) {
  //   return <h1>there not tasks now</h1>;
  // }

  // function createTask(tasktitle, textDescription) {
  //   // go ro send en props createTask

    // const newTask1 = {
    //   title: tasktitle,
    //   id: mapTask.length +1,
    //   description: textDescription,
    // };

    // setmapTask([...mapTask, newTask]); // create new array tasks and add task, create new array no change the main
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

  return (
   <div>
        {/* <Navi/> */}

  <Home/>

        {/* <div className="bg-zinc-900 h-screen"> */}
          {/* <div className="container mx-auto p-4"> */}
              {/* <TaskForm createTask={createTask} /> */}
              {/* <TaskForm /> */}
              {/* <TaskList tasks={mapTask} deleteTask = {deleteTask} /> */}
              {/* <TaskList /> */}
          {/* </div> */}
        {/* </div> */}


        {/* <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <div>
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul> */}
  </div>
  );
}

export default App;
