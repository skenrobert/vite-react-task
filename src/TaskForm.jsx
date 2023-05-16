import { useState } from "react";

function TaskForm() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputText)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write you task"
        onChange={(e) => ( setInputText(e.target.value) )}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
