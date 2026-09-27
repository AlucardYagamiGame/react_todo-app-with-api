import React from 'react';
import cn from 'classnames';
import { FILTERS } from '../types/FilterType';
import type { FilterType } from '../types/FilterType';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
};

export const Footer: React.FC<Props> = ({
  todos,
  filter,
  onFilterChange,
  onClearCompleted,
}) => {
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeCount} item${activeCount === 1 ? '' : 's'} left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: filter === FILTERS.all,
          })}
          data-cy="FilterLinkAll"
          onClick={event => {
            event.preventDefault();
            onFilterChange(FILTERS.all);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: filter === FILTERS.active,
          })}
          data-cy="FilterLinkActive"
          onClick={event => {
            event.preventDefault();
            onFilterChange(FILTERS.active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filter === FILTERS.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={event => {
            event.preventDefault();
            onFilterChange(FILTERS.completed);
          }}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={completedCount === 0}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
