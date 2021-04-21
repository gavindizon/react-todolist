import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";

import ToDoList from "./components/toDoList";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="container">
      <header>
        <Typography variant="h5" align="center">
          To-do List Application using React w/ ASP.net Core
        </Typography>

        <Provider store={store}>
          <ToDoList />
        </Provider>
      </header>
    </div>
  );
}

export default App;
