import React from 'react'

class Task_Long extends React.Component{
    render(){
        const type = "long_text";
        return(
            <div className = "task_short_text">
                <h1>Текст вопроса</h1>
                <textarea id="short_text"></textarea>
            </div>
        )
    }
}

export default Task_Long