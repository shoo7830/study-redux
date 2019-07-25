import React, { useState } from 'react';

const Form = (props) => {
    const [ text, setText ] = useState('');
    const { list, setList } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([
            ...list,
            {
                "description": text,
                "checked": false
            }
        ])
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} />
            <button>전송</button>
        </form>
    )
}

export default Form;