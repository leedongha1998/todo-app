import React from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: readonly Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodosProps) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default React.memo(TodoList);
