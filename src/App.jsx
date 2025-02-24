import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [
            { id: 1, text: 'Купить хлеб', completed: false, priority: 'medium', createdAt: Date.now(), deadline: null },
            { id: 2, text: 'Заплатить за квартиру', completed: false, priority: 'high', createdAt: Date.now(), deadline: null },
            { id: 3, text: 'Выгулять собаку', completed: false, priority: 'low', createdAt: Date.now(), deadline: null }
        ];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoText, setEditingTodoText] = useState("");
    const [editingTodoDeadline, setEditingTodoDeadline] = useState(null);

    const handleAddTodo = (text, priority) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: Date.now(),
            deadline: null
        };
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (id, text, deadline) => {
        setEditingTodoId(id);
        setEditingTodoText(text);
        setEditingTodoDeadline(deadline);
    };

    const handleSaveEditTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: editingTodoText, deadline: editingTodoDeadline };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditingTodoId(null);
        setEditingTodoText("");
        setEditingTodoDeadline(null);
    };

    const handleCancelEditTodo = () => {
        setEditingTodoId(null);
        setEditingTodoText("");
        setEditingTodoDeadline(null);
    };

    const handleToggleComplete = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleEditDeadline = (id, deadline) => {
        setEditingTodoDeadline(deadline);
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        return new Date(timestamp).toLocaleDateString();
    };

    return (
        <div className="app-container">
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onEditTodo={handleEditTodo}
                editingTodoId={editingTodoId}
                editingTodoText={editingTodoText}
                onSaveEditTodo={handleSaveEditTodo}
                onCancelEditTodo={handleCancelEditTodo}
                onToggleComplete={handleToggleComplete}
                formatDate={formatDate}
                onEditDeadline={handleEditDeadline}
                editingTodoDeadline={editingTodoDeadline}
            />
            <AddTodoForm onAddTodo={handleAddTodo} />
        </div>
    );
}

export default App;