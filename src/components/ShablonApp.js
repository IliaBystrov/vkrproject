import React, { useState } from 'react';
import { Question_short } from './Question_short';
import { Question_long } from './Question_long';
import { Question_one } from './Question_one';
import { Question_many } from './Question_many';
import '../style2.css'

export const ShablonApp = () => {

    //Надо сделать метод для заполнения массива items в таком формате.
    const [items, setQuestion] = useState([{
        id: 0,
        question_type: 'short',
        question_text: 'Текст вопроса 1',
        answer: []
    },
    {
        id: 1,
        question_type: 'long',
        question_text: 'Текст вопроса 2',
        answer: []
    },
    {
        id: 2,
        question_type: 'one',
        question_text: 'Текст вопроса 3',
        answer: ['Ответ 1', 'Ответ 2','Ответ 3','Ответ 4']
    },
    {
        id: 3,
        question_type: 'many',
        question_text: 'Текст вопроса 4',
        answer: ['Ответ 1', 'Ответ 2','Ответ 3']
    }
    ]);


        //Это пример методя для добавления элементов в массив с опросами.
        /*const additem = () => {
            let i = 0;
            for(var j=0;j<items.length;j++){
                if(items[j].id>i){
                    i=items[j].id;
                }
            }
            i++;
            //Сюда надо подставить значения.
            var newitem = {
                id: i,
                question_type: '',
                question_text: '',
                answer: []
            };
            setValue((prevState) => [...prevState, newitem]);
        };*/

    //Добавить запись в бд
    const SendAnswers = () => {
        var i_copy = Object.assign([], items);
        //В answers хранятся ответы на вопросы в формате {id: n, answ: ['1', 'a', '1a']}.
        var answers = [];

        for(var i = 0; i<i_copy.length; i++){
            switch(i_copy[i].question_type){
                case 'short':
                    var ans = document.getElementsByName('short' + i_copy[i].id);
                    var b = [], id_t = i_copy[i].id;
                    for(var j = 0; j < ans.length; j++){
                        b.push(ans[j].value);
                    }
                    if(b.length === 0){
                        alert("Вы не ответили на все вопросы!");
                        return;
                    }
                    answers.push({id: id_t, answ: b});
                break;
                case 'long':
                    var ans = document.getElementsByName('long' + i_copy[i].id);
                    var b = [], id_t = i_copy[i].id;
                    for(var j = 0; j < ans.length; j++){
                        b.push(ans[j].value);
                    }
                    if(b.length === 0){
                        alert("Вы не ответили на все вопросы!");
                        return;
                    }
                    answers.push({id: id_t, answ: b});
                break;
                case 'one':
                    var ans = document.getElementsByName('one' + i_copy[i].id);
                    var b = [], id_t = i_copy[i].id;
                    for(var j = 0; j < ans.length; j++){
                        if(ans[j].checked == true){
                            b.push(ans[j].value);
                        }
                    }
                    if(b.length === 0){
                        alert("Вы не ответили на все вопросы!");
                        return;
                    }
                    answers.push({id: id_t, answ: b});
                break;
                case 'many':
                    var ans = document.getElementsByName('many' + i_copy[i].id);
                    var b = [], id_t = i_copy[i].id;
                    for(var j = 0; j < ans.length; j++){
                        if(ans[j].checked === true){
                            b.push(ans[j].value);
                        }
                    }
                    if(b.length === 0){
                        alert("Вы не ответили на все вопросы!");
                        return;
                    }
                    answers.push({id: id_t, answ: b});
                break;
            }
        }
        //Сюда надо добавить функционал для добавления ответов в БД.
        console.log(answers);
    };
        
    return(
        <div id = "main_block_c">
            
            {
                items.map((item) => {
                    switch(item.question_type){
                        case 'short':
                        return(<Question_short
                            uid = {item.id}
                            q_text = {item.question_text}
                            key = {item.id}
                        ></Question_short>);

                        case 'long':
                        return(<Question_long
                            uid = {item.id}
                            q_text = {item.question_text}
                            key = {item.id}
                        ></Question_long>);
                        
                        case 'one':
                        return(<Question_one
                            uid = {item.id}
                            q_text = {item.question_text}
                            ans = {item.answer}
                            key = {item.id}
                        ></Question_one>);
                        
                        case 'many':
                        return(<Question_many
                            uid = {item.id}
                            q_text = {item.question_text}
                            ans = {item.answer}
                            key = {item.id }
                        ></Question_many>);
                    }
                })
            }

            <button id="addtask" onClick={() => SendAnswers()}><h1>Отправить ответ</h1></button>
        </div>
    );
    
};