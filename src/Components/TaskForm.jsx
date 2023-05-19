import { useState, useContext } from "react";
import { AppContex } from "../contex/AppContext";

// function TaskForm({createTask}) {
function TaskForm({}) {
  const [inputText, setInputText] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const { createTask } = useContext(AppContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTask = {
    //   title: inputText,
    //   id: 4,
    //   description: "test create task"
    // }
    console.log(inputText);
    createTask(inputText, textDescription); // execute function send App.jsx, for add newTask at maptask

    //inicializate input after submit

    setInputText("");
    setTextDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-700 p-10 mb-4">
       <h1 className="text-2xl text-white mb-3 font-bold">create your task</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="write you task"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          autoFocus
        />

        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Add description"
          onChange={(e) => setTextDescription(e.target.value)}
          value={textDescription}
        ></textarea>

        <button
        className="bg-indigo-500 px-2 py-1 text-white"
        >Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
