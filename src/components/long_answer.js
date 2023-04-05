import React from 'react'

class Long_Answer extends React.Component{
    render(){
        const type = "long";
        return(
            <div className = "task_short_text">
                <h1>Текст вопроса</h1>
                <textarea id="short_text"></textarea>
            </div>
        )
    }
}

export default Long_Answer