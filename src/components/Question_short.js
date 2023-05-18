import React from 'react'

export const Question_short = (props) =>{
        const type = "short";
        return(
            <div className = "question_short_text">
                <h1>{props.q_text}</h1>
                <input type='text' id="short_answer" name = {'short' + props.uid}></input>
            </div>
        )
}