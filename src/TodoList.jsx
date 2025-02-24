import React from 'react';
import TodoItem from './TodoItem'; // Import TodoItem

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
        onEditDeadline,
        editingTodoDeadline,
        formatDate
    } = props;

    return (
        <ul>
            {todos ? (
                todos.map(todo => (
                    <TodoItem // Use TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onEditTodo={onEditTodo}
                        editingTodoId={editingTodoId}
                        editingTodoText={editingTodoText}
                        onSaveEditTodo={onSaveEditTodo}
                        onCancelEditTodo={onCancelEditTodo}
                        onToggleComplete={onToggleComplete}
                        onEditDeadline={onEditDeadline}
                        editingTodoDeadline={editingTodoDeadline}
                        formatDate={formatDate}
                    />
                ))
            ) : (
                <li>Список задач пуст</li>
            )}
        </ul>
    );
}

export default TodoList;