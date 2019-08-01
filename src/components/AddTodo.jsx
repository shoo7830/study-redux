import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const AddTodo = ({dispatch}) => {
    const textInput = React.createRef();

    const clear = () => {
        textInput.current.value = ''
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = textInput.current.value;

        dispatch(addTodo(text));
        clear();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={textInput} />
            <button>Add Todo</button>
        </form>
    )
}

export default connect() (AddTodo)