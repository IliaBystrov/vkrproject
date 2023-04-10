import React, { useState } from 'react';
import QPool from './qpoll';


export const App = () => {

    //let i =0;
    const [items, setValue] = useState([{
        id: 0,
        question_type: '',
        question_text: '',
        answer: []        
    }]);

    const additem = () => {
        let i = 0;
        for(var j=0;j<items.length;j++){
            if(items[j].id>i){
                i=items[j].id;
            }
        }
        i++;
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
        var count = items.length;
        if(count > 1){
            setValue((prevState) => {
                const idx = prevState.findIndex((item) => item.id === id);
                return[...prevState.slice(0,idx), ...prevState.slice(idx+1)];
            });
            //Для проверки
            count--;
        } 
        else{ 
            alert('Нельзя удалить единственный вопрос!');
        };
        //Для проверки
        //console.log(count);
    };
    const SetQuestion = (id, type) =>{
        var qtype = type;
        var qtext ='';
        var qans =[];
        var inputs = document.getElementsByName('question_area_' + id);
        for (var j = 0; j < inputs.length; j++) {
            var a = inputs[j];
            qtext = a.value;
        }
        if((qtype != 'short') || (qtype != 'long')){
            var inputs = document.getElementsByName('answer_area_' + id);
            for (var j = 0; j < inputs.length; j++) {
                var a = inputs[j];
                qans.push(a.value);
            }
        }
        var copy = Object.assign([], items);
        var idx = copy.findIndex((item) => item.id === id);
        var newitem={
            id: id,
            question_type: qtype,
            question_text: qtext,
            answer: qans
        };
        copy[idx]=newitem;
        setValue(copy);
        /*setValue((prevState) => {
            const idx = prevState.findIndex((item) => item.id === id);
            const oldanswer = prevState[idx];
            const newanswer = {...oldanswer, question_type: qtype, question_text: qtext, answer: qans};
            if(idx===0){
                return[newanswer,...prevState.slice(idx+1)];
            }
            else{
                return[...prevState.slice(0,idx), newanswer,...prevState.slice(idx+1)];
            }
        });*/
        console.log(qtype);
        console.log(qtext);
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
                            onDeleted={deleteitem}
                            setInfo={SetQuestion}>
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