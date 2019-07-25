import React, { useState, useEffect } from 'react';

const TodoItem = (props) => {
    const { description, checked } = props.item;
    const { index } = props;
    const [ checkState, setCheckState ] = useState(checked);

    const handleChange = () => {
        setCheckState(!checkState);
    }

    return (
        <div key={index}>
            <input type="checkbox" checked={checkState} onChange={handleChange} />
            {description}
        </div>
    )
}

export default TodoItem;