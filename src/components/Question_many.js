import React from 'react'

export const Question_many = (props) =>{
        const type = "many";
        var i = -1;
        return(
            <div className = "question_one_text">
                <h1>{""+props.q_text}</h1>
                {
                    props.ans.map((answers) => {
                        i++;
                        return(
                            <p key = {i}>
                                <input name={"many"+props.uid} type="checkbox" value={answers}/>
                                {" "+answers}
                            </p>
                        );
                    })
                }
            </div>
        )
}