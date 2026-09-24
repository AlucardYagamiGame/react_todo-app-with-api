import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  loadingTodoIds: number[];
  onDelete: (todoId: number) => Promise<boolean>;
  onUpdate: (todoId: number, data: Partial<Todo>) => Promise<boolean>;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  loadingTodoIds,
  onDelete,
  onUpdate,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        isProcessed={loadingTodoIds.includes(todo.id)}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    ))}

    {tempTodo && (
      <TodoItem
        todo={tempTodo}
        isProcessed
        onDelete={() => Promise.resolve(false)}
        onUpdate={() => Promise.resolve(false)}
      />
    )}
  </section>
);
