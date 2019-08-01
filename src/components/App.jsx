import React from 'react';
// import { connect } from 'react-redux';
// import { addTodo } from '../actions';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <div>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App;