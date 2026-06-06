import "@containers/ChecklistItems.css";

import { ChecklistItem, Task } from "@components/ChecklistItem";
import { useEffect, useState } from "react";
import { getStoredSessionValueOrDefault } from "@/utils/storage";

const SESSION_KEY = "todo-tasks";

export const ChecklistItems = () => {
  const initialValue = getStoredSessionValueOrDefault<Task[]>(SESSION_KEY, [{ id: self.crypto.randomUUID() }]);
  const [todoTasks, setTodoTasks] = useState<Task[]>(initialValue);

  // this will ensure the session is always up-to-date with any changes to the todo tasks
  useEffect(() => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(todoTasks));
  }, [todoTasks]);

  const addNewTodoTaskLine = () => {
    setTodoTasks([...todoTasks, { id: self.crypto.randomUUID() }]);
  };

  const updateTaskText = (updatedTodoTask: Task) => {
    setTodoTasks(
      todoTasks.map(todoTask => {
        if (todoTask.id === updatedTodoTask.id) {
          todoTask = {
            ...todoTask,
            ...updatedTodoTask,
          };
        }

        return todoTask;
      })
    );
  };

  const removeTaskFromArray = (checkListItemId: string) => {
    setTodoTasks(todoTasks.filter(todoTask => todoTask.id !== checkListItemId));
  };

  return (
    <div className="check-list-items-box">
      <div className="check-list-items-tasks">
        {todoTasks.map(todoTask =>
          <ChecklistItem
            key={todoTask.id}
            checkListItemId={todoTask.id}
            checkListItemText={todoTask.text}
            checkboxId={`checkbox-${todoTask.id}`}
            checked={todoTask.checked}
            onTaskUpdate={updateTaskText}
            onTaskRemove={removeTaskFromArray}
          />
        )}
      </div>
      <div className="check-list-items-buttons-footer">
        <button className="check-list-items-add-button" onClick={addNewTodoTaskLine}>+</button>
      </div>
    </div>
  );
};
