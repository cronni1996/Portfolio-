import React from 'react';

function NameInput(props) {
    return (
        <section className="name-input">
            <label htmlFor="nameInput">Введите ваше имя:</label>
            <input
                type="text"
                id="nameInput"
                value={props.name}
                onChange={props.onChange}
            />
        </section>
    );
}

export default NameInput;