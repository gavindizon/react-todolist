import { React, useState, useEffect } from "react";
import "../todolist.css";
import {
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/task";

import Item from "./item.js";

const initialFieldValues = {
  priority: 1,
  input: "",
};

const ToDoList = (props) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [sort, setSort] = useState("time");
  const [infoText, setInfoText] = useState("No Items");

  const sortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    // console.log("Test");
    props.fetchAllTasks();
  }, [props.count]);

  const submitTask = (e) => {
    if (values.input.value !== "") {
      let date = new Date().toJSON();
      let data = {
        taskName: values.input,
        priority: values.priority * 1,
        date,
        status: false,
      };
      props.addTask(data, () => {});

      setInfoText("Not Completed!");
    }
  };
  return (
    <div className="box">
      <div className="inputs">
        <TextField
          name="input"
          id="standard-basic"
          className="customMuiTextField"
          placeholder="Input task here"
          value={values.input}
          onChange={handleInputChange}
        />
        <Select
          className={("priority", "customMuiSelect")}
          id="priority"
          name="priority"
          value={values.priority}
          onChange={handleInputChange}
        >
          <MenuItem value={"1"}>Low</MenuItem>
          <MenuItem value={"2"}>Medium</MenuItem>
          <MenuItem value={"3"}>High</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={submitTask}>
          Submit
        </Button>
      </div>
      <div className="info-heading">
        <Typography variant="h5" style={{ color: "white" }} id="textInfo">
          My Tasks
        </Typography>
      </div>
      <div className="list-container">
        {props.taskList.map((item, index) => {
          const status = item.status ? "checked" : "";
          let priority;

          switch (item.priority) {
            case 1:
              priority = "low";
              break;
            case 2:
              priority = "medium";
              break;
            case 3:
            default:
              priority = "high";
          }
          return (
            <Item
              task={item.taskName}
              priority={priority}
              status={status}
              key={index}
              id={item.id}
              items={props.taskList}
              completed={item.status}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ taskList: state.task.list });

const mapActionToProps = {
  fetchAllTasks: actions.fetchAll,
  addTask: actions.addTask,
};

export default connect(mapStateToProps, mapActionToProps)(ToDoList);
