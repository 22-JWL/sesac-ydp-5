import React from 'react';
import { ToDoItem } from '../types/types';

interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          //{}걸어서 실행이되었을때 실행시키기위해 사용
          onChange={() => toggleComplete(todo.id)}
        ></input>
        {todo.text}
      </label>
    </li>
  );
}
