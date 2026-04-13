import { ChecklistItems } from "@containers/ChecklistItems";
import "@views/TodoView.css";

export const TodoView = () => {
  return (
    <div className="todo-view">
      <div className="todo-view-tasks-box">
        <h1 className="todo-view-title">To-do list</h1>
        <ChecklistItems />
      </div>
      <div className="todo-view-footer"></div>
    </div>
  );
};
