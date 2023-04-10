import React from 'react'

export const Long_Answer = (props) =>{
        const type = "long";
        return(
            <div className = "task_short_text">
                <h1>Текст вопроса</h1>
                <textarea id="short_text" name={'question_area_' + props.key}
                onBlur={() => props.returnValue(props.key, type)}></textarea>
            </div>
        )
}