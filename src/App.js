import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./todoList";
import { Typography } from "@material-ui/core";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h5">To-do List Application using React</Typography>
                <ToDoList />
            </header>
        </div>
    );
}

export default App;
