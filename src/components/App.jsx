import React, { useState } from 'react';
import TodoMenu from './TodoMenu';
import TodoGroup from './TodoGroup';

const DATA = {
    "result": {
        "groups": [
            {
                "name": "2018년 목표",
                "list": [
                    {
                        "description": "직장구하기",
                        "checked": false
                    },
                    {
                        "description": "몸무게정상화",
                        "checked": false
                    },
                    {
                        "description": "건강정상화",
                        "checked": false
                    },
                    {
                        "description": "HTML & CSS 공부",
                        "checked": false
                    }
                ]
            },
            {
                "name": "가족",
                "list": [
                    {
                        "description": "집사기",
                        "checked": false
                    },
                    {
                        "description": "땅사기",
                        "checked": false
                    },
                    {
                        "description": "가출하기",
                        "checked": false
                    },
                    {
                        "description": "집에가기",
                        "checked": false
                    }
                ]
            }
        ]
    }
}

const App = () => {
    const dataGroups = DATA.result.groups;
    const [ index, setIndex ] = useState(0);
    const [ data, setData ] = useState(dataGroups);

    return (
        <div className="app">
            <TodoMenu data={data} index={index} setIndex={setIndex} />
            <TodoGroup data={data} setData={setData} index={index} />
        </div>
    )
}

export default App;