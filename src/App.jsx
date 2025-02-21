import { useState } from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import LoginControl from './LoginControl';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import NameInput from './NameInput';

function App() {
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([
        { id: 1, text: 'Купить хлеб' },
        { id: 2, text: 'Заплатить за квартиру' },
        { id: 3, text: 'Выгулять собаку' }
    ]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAddTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="app-container">
            <NameInput name={name} onChange={handleNameChange} />
            <Greeting name={name} />
            <Counter />
            <LoginControl />
            <TodoList todos={todos} />
            <AddTodoForm onAddTodo={handleAddTodo} />
        </div>
    );
}

export default App;