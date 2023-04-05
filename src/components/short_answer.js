import React from 'react'

class Short_Answer extends React.Component{
    render(){
        const type = "short";
        return(
            <div className = "task_short_text">
                <h1>Текст вопроса</h1>
                <textarea id="short_text"></textarea>
            </div>
        )
    }
}

export default Short_Answer