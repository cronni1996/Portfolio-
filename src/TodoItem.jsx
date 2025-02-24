import React, { useState } from 'react';

function TodoItem(props) {
    const { todo, onDeleteTodo, onEditTodo, editingTodoId, editingTodoText, onSaveEditTodo, onCancelEditTodo, onToggleComplete, onEditDeadline, editingTodoDeadline, formatDate } = props;
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li>
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
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleComplete(todo.id)}
                    />
                    {todo.text}
                    <button onClick={toggleDetails}>
                        {showDetails ? 'Скрыть подробности' : 'Подробнее'}
                    </button>
                    {showDetails && (
                        <span className="todo-info">
              (Приоритет: {todo.priority}, Создано: {formatDate(todo.createdAt)}, Дедлайн: {formatDate(todo.deadline)})
            </span>
                    )}
                    <button onClick={() => onEditTodo(todo.id, todo.text, todo.deadline)}>Редактировать</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;