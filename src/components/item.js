import { React, useState, useEffect } from "react";
import "../todolist.css";
import { Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/task";

const Item = ({ task, priority, id, deleteTask }) => {
  return (
    <div className={`item item--${priority}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography style={{ marginLeft: "1rem" }} variant="subtitle1">
          {task}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0 1rem", backgroundColor: "red", color: "#FFF" }}
            onClick={(e) => deleteTask(id, window.alert("Deleted Task"))}
          >
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ taskList: state.task.list });

const mapActionToProps = {
  deleteTask: actions.deleteTask,
};

export default connect(mapStateToProps, mapActionToProps)(Item);
