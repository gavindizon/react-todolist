import { React, useState, useEffect } from "react";
import "./todolist.css";
import { Button, Select, MenuItem, TextField, Typography } from "@material-ui/core";

let items = [];
let completed = false;

let mappedItems = () => {
    return <div></div>;
};

const Item = ({ task, priority, status, id, setInfoText }) => {
    const [, setStatus] = useState(status);

    useEffect(() => {
        console.log("TEST");
        items.forEach((item) => {
            completed = true;
            if (item.status === false) return (completed = false);
        });
        if (items.length === 0) setInfoText("No Items");
        else if (completed) setInfoText("Completed");
        else setInfoText("Not Completed");
    });

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
                <h4>{task}</h4>
                <div className="custom-checkbox">
                    <input
                        type="checkbox"
                        className="item-checker"
                        onChange={() => {
                            items[id].status = !items[id].status;
                            setStatus(items[id].status);
                            console.log(items);
                        }}
                    />
                    <div></div>
                </div>
            </div>
        </div>
    );
};

const ToDoList = () => {
    const [priority, setPriority] = useState("low");
    const [sort, setSort] = useState("time");
    const [input, setInput] = useState("");
    const [infoText, setInfoText] = useState("No Items");
    const [info, setInfo] = useState(mappedItems);

    const priorityChange = (e) => {
        setPriority(e.target.value);
    };

    const sortChange = (e) => {
        setSort(e.target.value);
    };

    const submitTask = () => {
        items.push({
            prio: priority,
            task: input,
            status: false,
        });

        setInfoText("Not Completed");
        mappedItems = items.map((item, index) => {
            const status = item.status ? "checked" : "";

            return (
                <Item
                    task={item.task}
                    priority={item.prio}
                    status={status}
                    key={index}
                    id={index}
                    infoText={infoText}
                    setInfoText={setInfoText}
                />
            );
        });
        setInfo(mappedItems);
    };

    // useEffect(() => {
    //     console.log(items);
    //     completed = true;
    //     items.forEach((item) => {
    //         if (item.status === false) return (completed = false);
    //     });

    //     if (items.length === 0) setInfoText("No Items");
    //     else if (completed) setInfoText("Completed");
    //     else setInfoText("Not Completed");
    // });

    return (
        <div className="box">
            <div className="inputs">
                <TextField
                    id="standard-basic"
                    className="customMuiTextField"
                    placeholder="Input task here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Select
                    className={("priority", "customMuiSelect")}
                    id="priority"
                    value={priority}
                    onChange={priorityChange}
                >
                    <MenuItem value={"low"}>Low</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"high"}>High</MenuItem>
                </Select>
                <Button variant="contained" color="primary" onClick={submitTask}>
                    Submit
                </Button>
            </div>
            <div className="info-heading">
                <Typography variant="h5" style={{ color: "white" }} id="textInfo">
                    {infoText}
                </Typography>
                <div className="sorting-container">
                    <Typography
                        variant="subtitle2"
                        style={{ color: "white", display: "inline-block", marginRight: "1.6rem", fontSize: "1.0rem" }}
                    >
                        Sort by:
                    </Typography>
                    <Select className={("sort", "customMuiSelect")} id="sort" value={sort} onChange={sortChange}>
                        <MenuItem value={"time"}>Date Created</MenuItem>
                        <MenuItem value={"a-z"}>Medium</MenuItem>
                        <MenuItem value={"z-a"}>High</MenuItem>
                    </Select>{" "}
                </div>
            </div>
            <div className="list-container">{info}</div>
        </div>
    );
};

export default ToDoList;
