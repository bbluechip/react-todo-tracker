import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineDelete } from "react-icons/md";
const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://635d17b6cb6cf98e56acaefe.mockapi.io/api/tasks";

    try {
      axios.delete(`${url}/${id}`);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = async () => {
    try {
      const url = "https://635d17b6cb6cf98e56acaefe.mockapi.io/api/tasks";
      axios.delete(`${url}/`);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {task.map((t) => {
        console.log(t);
        const { id, task, date } = t;
        return (
          <div className="mt-2 d-flex justify-content-between task-div rounded-2 p-2 align-items-center">
            <div>
              <h4>{task}</h4>
              <small>{date}</small>
            </div>
            <div>
              <MdOutlineDelete
                size={50}
                color={"red"}
                className="delete"
                onClick={() => deleteTask(id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
