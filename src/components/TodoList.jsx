import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const TodoList = ({todos, toggleTodo}) => {
    const handleChange = (todo, e) => {
        toggleTodo(todo.id);
    }
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={(e) => {
                        handleChange(todo, e)
                    }} />
                    {todo.text}
                </div>
            ))}
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);