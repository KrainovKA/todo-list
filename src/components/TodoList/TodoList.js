import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleDone, onToggleImportant, onDeleted }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;