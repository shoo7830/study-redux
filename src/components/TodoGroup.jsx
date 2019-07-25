import React, { useState } from 'react';

const TodoGroup = (props) => {
    const { data, index } = props;
    const dataset = data[index];
    const [ list, setList ] = useState(dataset.list);
    const [ text, setText ] = useState('');

    const TodoList = list.map((item, index) => {
        const { description, checked } = item;

        return (
            <div key={index}>
                <input type="checkbox" checked={checked} />
                {description}
            </div>
        )
    })

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        setList([
            ...list,
            {
                "description": text,
                "checked": false
            }
        ])
        setText('');
        e.preventDefault();
    }

    return (
        <div className="TodoList">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={text} placeholder="Add Todo" />
                <button>추가</button>
            </form>
            { TodoList }
        </div>
    )
}

export default TodoGroup;