import React from 'react'

class Task_short extends React.Component{
    render(){
        const type = "short_text";
        return(
            <div className = "task_short_text">
                <h1>Текст вопроса</h1>
                <textarea id="short_text"></textarea>
            </div>
        )
    }
}

export default Task_short