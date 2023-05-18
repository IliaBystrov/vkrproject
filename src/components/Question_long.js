import React from 'react'

export const Question_long = (props) =>{
        const type = "long";
        return(
            <div className = "question_short_text">
                <h1>{props.q_text}</h1>
                <textarea id="long_answer" name = {'long' + props.uid}></textarea>
            </div>
        )
}