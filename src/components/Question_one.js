import React from 'react'

export const Question_one = (props) =>{
        const type = "short";
        var i = -1;
        return(
            <div className = "question_one_text">
                <h1>{""+props.q_text}</h1>
                {
                    props.ans.map((answers) => {
                        i++;
                        return(
                            <p key={i}>
                                <input name={"one"+props.uid} type="radio" value={answers}/>
                                {" "+answers}
                            </p>
                        );
                    })
                }
            </div>
        )
}