import React, { useState } from 'react';

function AddTodoForm(props) {
    const [newTodoText, setNewTodoText] = useState("");
    const [priority, setPriority] = useState("medium");
    const [deadline, setDeadline] = useState(""); // Добавляем состояние для дедлайна

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            props.onAddTodo(newTodoText, priority, deadline); // Передаем дедлайн
            setNewTodoText("");
            setPriority("medium");
            setDeadline(""); // Очищаем поле дедлайна
        }
    };

    const handleNewTodoTextChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value); // Обновляем состояние дедлайна
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
            <input // Добавляем поле для выбора дедлайна
                type="date"
                value={deadline}
                onChange={handleDeadlineChange}
            />
            <button onClick={handleAddTodo}>Добавить</button>
        </section>
    );
}

export default AddTodoForm;