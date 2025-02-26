import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const {
        todo,
        onDeleteTodo,
        onEditTodo,
        editingTodoId,
        editingTodoText,
        onSaveEditTodo,
        onCancelEditTodo,
        onToggleComplete,
        onEditDeadline,
        editingTodoDeadline,
        formatDate
    } = props;

    return (
        <li className="todo-item" key={todo.id}>
            {editingTodoId === todo.id ? (
                <>
                    <input
                        type="text"
                        value={editingTodoText}
                        onChange={(e) => onEditTodo(todo.id, e.target.value, editingTodoDeadline)}
                    />
                    <input
                        type="date"
                        value={editingTodoDeadline ? new Date(editingTodoDeadline).toISOString().split('T')[0] : ''}
                        onChange={(e) => onEditDeadline(todo.id, new Date(e.target.value).getTime())}
                    />
                    <button onClick={() => onSaveEditTodo(todo.id)}>Сохранить</button>
                    <button onClick={onCancelEditTodo}>Отменить</button>
                    <button onClick={() => onDeleteTodo(todo.id)}>Удалить</button>
                </>
            ) : (
                <>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggleComplete(todo.id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <div className="todo-content">
                        {todo.text}
                        <span className="todo-info">
                            (Приоритет: {todo.priority}, Создано: {formatDate(todo.createdAt)})
                        </span>
                    </div>
                    <button onClick={() => onEditTodo(todo.id, todo.text, todo.deadline)}>Редактировать</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;