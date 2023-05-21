import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks } from "../data/tasks";

function Home() {
    return (
      <div>
         <div className="bg-zinc-900 h-screen">
          <div className="container mx-auto p-4">
              {/* <TaskForm createTask={createTask} /> */}
              <TaskForm />
              {/* <TaskList tasks={mapTask} deleteTask = {deleteTask} /> */}
              <TaskList />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  