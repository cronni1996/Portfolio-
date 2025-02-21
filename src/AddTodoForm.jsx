import React, { useState } from 'react';

function AddTodoForm(props) {
    const [newTodoText, setNewTodoText] = useState("");

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            props.onAddTodo(newTodoText); // Вызываем функцию onAddTodo, переданную через props
            setNewTodoText("");
        }
    };

    const handleNewTodoTextChange = (event) => {
        setNewTodoText(event.target.value);
    };

    return (
        <section className="add-todo">
            <input
                type="text"
                placeholder="Введите новую задачу"
                value={newTodoText}
                onChange={handleNewTodoTextChange}
            />
            <button onClick={handleAddTodo}>Добавить</button>
        </section>
    );
}

export default AddTodoForm;