import React from 'react';

const TodoMenu = (props) => {
    const { data, index, setIndex } = props;

    const handleClick = (e) => {
        const index = parseInt(e.target.dataset.index, 10);

        setIndex(index);
    }

    return data.map((item, index) => {
        return (
            <div key={index} data-index={index} onClick={handleClick}>
                {item.name}
            </div>
        )
    })
}

export default TodoMenu;