import React from "react";
import TaskForm from "../../components/TaskForm";
import TasksList from "../../components/TasksList";
import s from "./TodoPage.module.scss";

function TaskPage() {
  return (
    <div className={s.todoContainer}>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default TaskPage;
