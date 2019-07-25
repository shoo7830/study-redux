import React, { useState } from 'react';
import Form from './Form';
import TodoItem from './TodoItem';

const Todo = () => {
    const [ list, setList ] = useState([]);

    const TodoList = list.map((item, index) => (
        <TodoItem key={index} item={item} />
    ))

    return (
        <div>
            <Form list={list} setList={setList} />
            <div className="list">
                { TodoList }
            </div>
        </div>
    )
}

export default Todo;