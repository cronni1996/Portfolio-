import React from 'react';

function TodoList(props) {
    const { todos } = props;

    return (
        <ul>
            {todos ? ( // Изменяем проверку
                todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))
            ) : (
                <li>Список задач пуст</li> // Отображаем сообщение, если todos нет
            )}
        </ul>
    );
}

export default TodoList;