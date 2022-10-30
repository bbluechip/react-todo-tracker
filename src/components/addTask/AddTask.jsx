import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
    setTask("");
    setDate("");
  };

  const addNewTask = async (newTask) => {
    const url = "https://635d17b6cb6cf98e56acaefe.mockapi.io/api/tasks";

    try {
      await axios.post(url, newTask);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            style={{ outline: "none" }}
            type="text"
            placeholder="Enter Task"
            className="form-control shadow-none"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            style={{ outline: "none" }}
            type="date"
            placeholder="Date"
            className="form-control shadow-none"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>
        <div className="text-center m-2">
          <Button variant="success btn-lg w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
