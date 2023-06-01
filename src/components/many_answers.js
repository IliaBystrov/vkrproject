import React, { useState } from 'react';

export const Many_Answers = (props) => {
    const type = "many";
        const [answers, setValue] = useState([{
            id: 1,
            qw: ''
        },
        {
            id: 2,
            qw: ''
        }
        ]);
    
        const additem = () => {
            let i = 0;
            for(var j=0;j<answers.length;j++){
                if(answers[j].id>i){
                    i=answers[j].id;
                }
            }
            i++;
            var newanswer = {
                id: i,
                qw: ''
            };
            setValue((prevState) => [...prevState, newanswer]);
        };
        const deleteitem = (id) =>{
            var i = answers.length;
            if(i > 2){
                setValue((prevState) => {
                    const idx = prevState.findIndex((answer) => answer.id === id);
                    return[...prevState.slice(0,idx), ...prevState.slice(idx+1)];
                });
            } 
            else{ 
                alert('Количество вариантов может быть не меньше 2!');
            };
        };

    return(
        <div className = "task_short_text">
            <h1>Текст вопроса</h1>
            <textarea id="short_text" name={'question_area_' + props.uid} 
            onBlur={() => props.returnValue(props.uid, type)}></textarea>
            {
                answers.map((answer) => {
                    return(
                        <div id='answer_list' key={answer.id}>
                            <input type = "text" placeholder = {"Вариант ответа"} 
                            id='answer_text' 
                            key={answer.id}
                            name={'answer_area_' + props.uid}
                            onBlur={() => props.returnValue(props.uid, type)}>
                            </input>
                            <button id='answer_delete' onClick={() => deleteitem(answer.id)}>
                                <img src={require('../images/close.png')} alt='close'></img>
                            </button>
                        </div>
                     );
                })
            }
            <button id='add_answer' onClick={additem}>
                <img src={require('../images/plus.png')} alt='plus'></img>
            </button>
        </div>
    );
};