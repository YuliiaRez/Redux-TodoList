import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../../actions";
import s from "../../Pages/TodoPage/TodoPage.module.scss";

function TasksList(props) {
  const { tasks, deleteTaskAction, updateTaskAction } = props;

  const mapTask = ({ id, body, isDone }, index) => {
    const changeDone = () => {
      updateTaskAction({ id: id, isDone: !isDone });
    };

    const deleteTask = () => {
      deleteTaskAction(id);
    };
    return (
      <li key={id}>
        <label for="Done">Done</label>
        <input
          className={s.body}
          type="checkbox"
          checked={isDone}
          onChange={changeDone}
          // id="Done"
          name="Done"
        />
        <div>{body}</div>
        <button onClick={deleteTask}>Del</button>
      </li>
    );
  };

  return <ul className={s.tasksList}>{tasks.map(mapTask)}</ul>;
}

const mapStateToProps = (state) => state.taskState;
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTaskAction: (id) => {
      dispatch(deleteTask(id));
    },
    updateTaskAction: (newTaskInfo) => {
      dispatch(updateTask(newTaskInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
