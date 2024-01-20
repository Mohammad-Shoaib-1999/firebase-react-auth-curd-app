import { useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import { useFirebase } from "../context/firebase";

const ListTodo = () => {
  const firebase = useFirebase();

  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    const unsubscribe = firebase.subscribeToTasks(setTasks);

    return () => unsubscribe();
  }, [firebase]);

  const handleDeleteTask = (taskId) => {
    firebase.deleteTask(taskId);
  };

  const handleCheckedChange = async (e, taskId) => {
    e.preventDefault();
    try {
      // Update the task using firebase.updateTask function
      await firebase.updateTask(taskId, {
        completed: e.target.checked,
      });

      // Update the local state
      setChecked(e.target.checked);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <table className="w-3/5 mt-5">
        <thead className="text-left">
          <tr className=" border-y-2 border-y-gray-300 bg-gray-50 p-4">
            <th className="p-4">Title</th>

            <th className="p-4">Description</th>
            <th className="p-4">Edit</th>

            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="p-4">
           
              <td className="p-4"> <input
                  id={`checkbox-${task.id}`}
                  className="checkbox-custom"
                  name="checkbox"
                  checked={checked}
                  onChange={(e) => handleCheckedChange(e, task.id)}
                  type="checkbox"
                /></td>

              <td className="p-4">{task.data.title}</td>
              <td className="p-4">{task.data.description}</td>
              <td className="p-4">
                <EditTodo task={task.id} />
              </td>
              <td className="p-4">
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListTodo;
