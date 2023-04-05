import React, { useState } from 'react';
import QPool from './qpoll';


export const App = () => {

    const [items, setValue] = useState([{
        id: 0,
        question_type: '',
        question_text: '',
        answer: []        
    }]);

    const additem = () => {
        var i = items.length;
        i += 1;
        var newitem = {
            id: i,
            question_type: '',
            question_text: '',
            answer: []
        };
        setValue((prevState) => [...prevState, newitem]);
        //Вывод для проверки
        console.log(i);
    };
    const deleteitem = (id) =>{
        var i = items.length;
        if(i > 1){
            setValue((prevState) => {
                const idx = prevState.findIndex((item) => item.id === id);
                return[...prevState.slice(0,idx), ...prevState.slice(idx+1)];
            });
            //Для проверки
            i--;
        } 
        else{ 
            alert('Нельзя удалить единственный вопрос!');
        };
        //Для проверки
        console.log(i);
    };

    return(
        <div className = "mainp">
            <h1>Название</h1>
            <input type = "text" id = "shablon_title"></input>
            <h1>Выберите логотип компании</h1>
            <select id ="logoselect">
                <option value="OKB">OKB</option>
                <option value="QWE">QWE</option>
            </select>

                {
                    items.map((item) => {
                        return(
                            <QPool 
                            key={item.id} 
                            id={item.id} 
                            qtype={item.question_type} 
                            qtext={item.question_text}
                            ans={item.answer}
                            image_delete={require('../images/close.png')}
                            onDeleted={deleteitem}>
                            </QPool>
                        );
                    })
                }
            
            <button id="addtask" onClick={additem}>
                <img src={require('../images/plus.png')} alt='add'></img>
                <h1>Добавить вопрос</h1>
            </button>
            <button id="addtask">
                <h1>Сохранить</h1>
            </button>
        </div>
    );

};