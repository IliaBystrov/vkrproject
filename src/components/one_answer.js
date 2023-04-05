import React, { useState } from 'react';

export const One_Answer = () => {
        const type = "one";
        const [answers, setValue] = useState([{
            id: 0,
            value: ''
        },
        {
            id: 1,
            value: ''
        }
        ]);
    
        const additem = () => {
            var i = answers.length;
            i += 1;
            var newanswer = {
                id: i,
                answer: ''
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
        const setAnsValue = (id, text) =>{
            setValue((prevState) => {
            const idx = prevState.findIndex((answer) => answer.id === id);
            const oldanswer = prevState[idx];
            const newanswer = {...oldanswer, value: text};
            return[...prevState.slice(0,idx), newanswer,...prevState.slice(idx+1)];
            });
        };

    return(
        <div className = "task_short_text">
            <h1>Текст вопроса</h1>
            <textarea id="short_text"></textarea>
            {
                answers.map((answer) => {
                    return(
                        <div id='answer_list'>
                            <input type = "text" placeholder = {"Вариант ответа"} 
                            id='answer_text' 
                            key={answer.id}>
                            </input>
                            <button id='answer_delete' onClick={() => deleteitem(answer.id)}>
                                <img src={require('../images/close.png')}></img>
                            </button>
                        </div>
                     );
                })
            }
            <button id='add_answer' onClick={additem}>
                <img src={require('../images/plus.png')}></img>
            </button>
        </div>
    )
}
