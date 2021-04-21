import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

const formatData = (data) => ({
  ...data,
  taskName: data.taskName,
  priority: parseInt(data.priority),
  date: data.date,
  status: data.date,
});

export const fetchAll = () => (dispatch) => {
  api
    .task()
    .fetchAll()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addTask = (data, onSuccess) => (dispatch) => {
  // data = formatData(data);
  api
    .task()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

// export const addTask = (data, onSuccess) => (dispatch) => {
//   data = formatData(data);
//   api
//     .task()
//     .create(data)
//     .then((res) => {
//       dispatch({
//         type: ACTION_TYPES.CREATE,
//         payload: res.data,
//       });
//       onSuccess();
//     })
//     .catch((err) => console.log(err));
// };

export const deleteTask = (id, onSuccess) => (dispatch) => {
  // data = formatData(data);
  api
    .task()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
