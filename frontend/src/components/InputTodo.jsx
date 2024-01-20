import { useState } from "react";
import { useFirebase } from "../context/firebase";
const InputTodo = () => {
    const firebase = useFirebase();
    const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
        firebase.addTask(newTask.title, newTask.description);
        setNewTask({ title: "", description: "" });
    //   window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5 text-2xl">PERN Todo List</h1>
      <form
        className="flex justify-center items-center mt-5"
        onSubmit={handleAddTask}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border-2 border-gray-300 items-center w-3/5 h-10"
        />

        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="border-2 border-gray-300 items-center w-3/5 h-10"
        />
        <input
          type="submit"
          value="Add Task"
          className="text-white bg-black w-16 h-10"
        />
      </form>
    </>
  );
};

export default InputTodo;
