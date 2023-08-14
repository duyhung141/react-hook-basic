import React from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

Index.defaultProps={
    todos: [],
    onTodoClick: null
}

function Index(props) {
    const {todos, onTodoClick}=props
    const handleTodoClick=((todo)=>{
        if(!onTodoClick) return;
        onTodoClick(todo)
    })
    return (
        <ul>
            {todos.map((todo=>{
                return <li
                    key={todo.id}
                    onClick={()=>onTodoClick(handleTodoClick(todo))}
                >
                    {todo.title}</li>
            }))}
        </ul>
    );
}

export default Index;