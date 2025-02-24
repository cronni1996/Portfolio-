import React from 'react';
import './TodoList.css';
function TodoList(props) {
    const {
        todos,
        onDeleteTodo,
        onEditTodo,
        editingTodoId,
        editingTodoText,
        onSaveEditTodo,
        onCancelEditTodo,
        onToggleComplete,
        formatDate
    } = props;

    return (
        <ul>
            {todos ? (
                todos.map(todo => {
                    return (
                        <li className="todo-item" key={todo.id}>
                            {editingTodoId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingTodoText}
                                        onChange={(e) => onEditTodo(todo.id, e.target.value)}
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
                                    </label> {/* Добавляем закрывающий тег </label> */}
                                    <div className="todo-content">
                                        {todo.text}
                                        <span className="todo-info">
                                            (Приоритет: {todo.priority}, Создано: {formatDate(todo.createdAt)})
                                        </span>
                                    </div>
                                    <button onClick={() => onEditTodo(todo.id, todo.text)}>Редактировать</button>
                                </>
                            )}
                        </li>
                    );
                })
            ) : (
                <li>Список задач пуст</li>
            )}
        </ul>
    );
}

export default TodoList;