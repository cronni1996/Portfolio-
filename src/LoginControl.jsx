import React, { useState } from 'react';

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <button onClick={handleLogoutClick}>Выйти</button>;
    } else {
        button = <button onClick={handleLoginClick}>Войти</button>;
    }

    return (
        <div>
            {isLoggedIn ? (
                <p>Добро пожаловать, пользователь!</p>
            ) : (
                <p>Пожалуйста, войдите.</p>
            )}
            {button}
        </div>
    );
}

export default LoginControl;