import React, { useState } from 'react';
import './AddTodoForm.css';

function AddTodoForm(props) {
    const [newTodoText, setNewTodoText] = useState("");
    const [priority, setPriority] = useState("medium");
    const [deadline, setDeadline] = useState("");

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            props.onAddTodo(newTodoText, priority, deadline);
            setNewTodoText("");
            setPriority("medium");
        }
    };

    const handleNewTodoTextChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };



    return (
        <section className="add-todo">
            <input
                type="text"
                placeholder="Введите новую задачу"
                value={newTodoText}
                onChange={handleNewTodoTextChange}
            />
            <select value={priority} onChange={handlePriorityChange}>
                <option value="low">Низкий</option>
                <option value="medium">Средний</option>
                <option value="high">Высокий</option>
            </select>

            <button onClick={handleAddTodo}>
                <i className="fas fa-plus"></i> Добавить
            </button>
        </section>
    );
}

export default AddTodoForm;