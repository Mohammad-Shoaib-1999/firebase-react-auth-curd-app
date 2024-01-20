import { useState } from 'react';
import { useFirebase } from "../context/firebase";

const EditTodo = ({ task }) => {
    console.log(task)
  const firebase = useFirebase();

  const [showPopup, setShowPopup] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleConfirm = () => {
    // Handle confirmation logic
    console.log('Confirmed!');
    setShowPopup(false);
  };

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      // Update the task using firebase.updateTask function
      await firebase.updateTask(task, newTask.title, newTask.description);
      setShowPopup(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleCancel = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <>
      <button
        onClick={handleTogglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      >
        Edit
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            onClick={handleTogglePopup}
          ></div>
          <div className="bg-white p-8 rounded shadow-lg z-20">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Edit Todo
              </h3>
              <div className="flex justify-center gap-4">
                <input
                  type="text"
                  id="title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="border-2 border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                  required
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
                <button
                  onClick={(e) => updateDescription(e)}
                  className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-gray-300"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
