import React, { useState } from 'react';
import QPool from './qpoll'

export const MainPanel = (props) => {

    const [items, setValue] = useState([
        {
            id: 0,
            Item_order: '',
            question_type: '',
            question_text: '',
            answer: []
        }
    ]);

    //Добавляем вопрос
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
            Item_order: '',
            question_type: '',
            question_text: '',
            answer: []
        };
        setValue((prevState) => [...prevState, newitem]);
        //Вывод для проверки
        //console.log(i);
    };

    //Удаляем вопрос
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

    //Получаем текст и варианты ответов на вопросы
    const SetQuestion = (id, type) =>{
        var qtype = type;
        var qtext ='';
        var qans =[];
        var a, j;
        var inputs = document.getElementsByName('question_area_' + id);
        for (j = 0; j < inputs.length; j++) {
            a = inputs[j];
            qtext = a.value;
        }
        if((qtype !== 'short') || (qtype !== 'long')){
            inputs = document.getElementsByName('answer_area_' + id);
            for (j = 0; j < inputs.length; j++) {
                a = inputs[j];
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

        /*console.log(qtype);
        console.log(qtext);
        console.log(qans);*/
    };

    //Добавить запись в бд
    const SaveShablon = () => {
        var s_title = document.getElementById("shablon_title");//Название шаблона
        if(s_title.value === ''){
            alert("Вы не заполнили поле - Название! ");
            return;
        }
        var s_type = document.getElementById("typeselect");//Тип шаблона
        //Данные о вопросах шаблона беруться из items, ниже цикл для перебора элементов элементов
        var items_copy = Object.assign([], items);
        for(var i = 0; i<items_copy.length; i++){
            /*items_copy[i].id
            items_copy[i].question_type
            items_copy[i].question_text
            items_copy[i].answer*/
        }
        console.log(s_title.value);
        console.log(s_type.value);
        console.log(items);
    };

    return(
            <div className = "mainp" id = "mainp">
                <h1>Название</h1>
                <input type = "text" id = "shablon_title" name='Shablon_title'></input>
                <h1>Тип опроса</h1>
                <select id ="typeselect" name='shablontype'>
                    <option value="public">Публичный</option>
                    <option value="anon">Анонимный</option>
                </select>
                <h1>Выберите логотип вашей компании</h1>
                <select id ="logoselect" name='logoselect' defaultValue={'okb.jpg'}>
                    <option value="okb.jpg">ОКБ Аэрокосмические системы</option>
                    <option value="promtex.jpg">Промтех Дубна</option>
                    <option value="promtexirk.jpg">Промтех Иркутск</option>
                    <option value="promtexkaz.jpg">Промтех Казань</option>
                    <option value="zavod.jpg">Дубненский завод коммутационной техники</option>
                    <option value="atomspec.jpg">Атом спецпроект</option>
                    <option value="kazzavod.jpg">Казанский завод синтетического каучука</option>
                    <option value="logo1.jpg">Промтех</option>
                </select>
                <h1>Выберите цвет для формы опроса</h1>
                <select id ="colorselect" name='colorselect' defaultValue={'#F48221'}>
                    <option value="red" style={{backgroundColor: 'red', color: 'white'}}>Красный</option>
                    <option value="#F48221" style={{backgroundColor: '#F48221', color: 'white'}}>Оранжевый</option>
                    <option value="Yellow" style={{backgroundColor: 'Yellow', color: 'black'}}>Желтый</option>
                    <option value="LimeGreen" style={{backgroundColor: 'LimeGreen', color: 'white'}}>Зеленый</option>
                    <option value="Aqua" style={{backgroundColor: 'Aqua', color: 'white'}}>Голубой</option>
                    <option value="MediumBlue" style={{backgroundColor: 'MediumBlue', color: 'white'}}>Синий</option>
                    <option value="DarkOrchid" style={{backgroundColor: 'DarkOrchid', color: 'white'}}>Фиолетовый</option>
                    <option value="Black" style={{backgroundColor: 'Black', color: 'white'}}>Черный</option>
                </select>
                    {
                        items.map((item) => {
                            return(
                                <QPool 
                                id={item.id} 
                                key={item.id}
                                /*type={item.question_type}*/
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
                <button id="addtask" onClick={SaveShablon}>
                    <h1>Сохранить</h1>
                </button>
            </div>
    )
}