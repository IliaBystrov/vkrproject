import React, { useState } from 'react';
import QPool from './qpoll';
import {MainButtoms} from './mainbuttons';
import { Result } from './Result';
import ReactDOMServer from 'react-dom/server';


export const App = () => {
    var Res_title = '';
    var vis = false;
    var [items, setValue] = useState([
        {
            id: 0,
            question_type: 'short',
            question_text: 'sad',
            answer: []        
        },
        {
            id: 1,
            question_type: 'long',
            question_text: 'szxczxcxc',
            answer: []        
        },
        {
            id: 2,
            question_type: 'one',
            question_text: 'qwe',
            answer: ['1', '2', '3']        
        },
        {
            id: 3,
            question_type: 'many',
            question_text: 'llkjl',
            answer: ['1', '2', '3', '4']        
        }
    ]);

    const  [shablon_cards, setCard] = useState([
        {
            id: 0,
            title: 'Shablon 1',
            link: 'https://Shablon1',
            data: '01.02.2023'  
        },
        {
            id: 1,
            title: 'Shablon 2',
            link: 'https://Shablon2',
            data: '21.05.2023'  
        }
    ]);
    
    //Метод для поиска шаблонов по совпадению с поисковой строкой и обновления списка
    //Работает, но нужно связать с бд
    const ReloadCardList =()=>{
        var title = document.getElementById("InSearch");
        setCard((prevState) => []);
        //Тут надо получить данные из бд и запихнуть их в cards
        //Get date from bd -> cards [{id: , title: , link: , data: }]
        const cards = [{id:3, title: "Title", link: "link", data: "02.02.2022"},
        {id:4, title: "Title2", link: "link", data: "02.02.2023"}]

        cards.map((card) => {
            addcard(card.id, card.title, card.link, card.data);
        })
    };
    //Работает
    const addcard = (c_id, c_title, c_link, c_data) => {

        var newcard = {
            id: c_id,
            title: c_title,
            link: c_link,
            data: c_data 
        };
        setCard((prevState) => [...prevState, newcard]);
    };


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
    //Поиск
    //Добавить запись в бд
    const SaveShablon = () => {
        var s_title = document.getElementById("shablon_title");//Название шаблона
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
    //Новый шаблон-очистить поле создания шаблона+
    const NewShablon =()=>{

        setValue((prevState) => []);
        let title = document.getElementById('shablon_title');
        title.value="";
        let stype = document.getElementById("typeselect");
        stype.value="public";
    };
    //Копировать шаблон
    const CopyShablon =(id)=>{
        var s_copy = Object.assign([], shablon_cards);
        var i_copy = [];
        var new_shablon;
        for(var i = 0; i<s_copy.length; i++){
            if(s_copy[i].id === id){
                new_shablon = {
                    id: s_copy[i].id,
                    title: s_copy[i].title,
                    link: s_copy[i].link,
                    data: s_copy[i].data,
                }
                break;
            }
        }
        console.log(new_shablon);
        //Здесь надо получить записи о вопросах данного шаблона
        //из бд и запихнуть их в i_copy, после чего записать
        //данные из new_shablon и i_copy в бд, если нельзя создать копию сразу на беке.
        ReloadCardList();
    };
    //Удалить шаблон //Сюда надо подкрутить удаление шаблона
    const DeleteShablon =(id)=>{
        console.log("delete - " + id);

        //Это для перезагрузки списка
        var title = document.getElementById("InSearch");
        ReloadCardList(title.value);
    };
    //Копировать ссылку на шаблон - работает
    const CopyLink =(link)=>{
        console.log(link);
        navigator.clipboard.writeText(link);
    };
    //Редактировать шаблон
    const EditShablon =(id)=>{

        setValue((prevState) => []);

        //Получаем структуру из вопросов конкретного шаблона
        //в виде x = [{id: 1, question_type: '', question_text: '', answer: [] }]

        var x = [];
        for(var j=0;j<x.length;j++){
            var newitem = {
                id: x[j].id,
                question_type: x[j].question_type,
                question_text: x[j].question_text,
                answer: x[j].answer
            };
            setValue((prevState) => [...prevState, newitem]);
        }

        let title = document.getElementById('shablon_title');
        title.value="Название";
        let stype = document.getElementById("typeselect");
        stype.value="public";
    }

    //Показать результаты
    const ShowResult =(id)=>{
        
        const res = [{id: 0, ti: 'Title1', re: 'res1'}, {id: 1, ti: 'Title2', re: 'res2'}];
        Res_title = "Shablon title123";
        var bl = document.getElementById('Res');
        if(vis ===false){
            bl.innerHTML = ReactDOMServer.renderToString(<Result title = {Res_title} res_answ={res}></Result>);
            vis = true;
        }
        else{
            bl.innerHTML = ReactDOMServer.renderToString();
            vis = false;
        }
        
        
    }

    return(
        <div id = "main_block_c">
            <div id="block1">
                <MainButtoms 
                    NewShablon={NewShablon} 
                    List = {shablon_cards}
                    CopyShablon = {CopyShablon}
                    CopyLink = {CopyLink}
                    EditShablon = {EditShablon}
                    DeleteShablon = {DeleteShablon}
                    ReloadList = {ReloadCardList}
                    ShowResult = {ShowResult}
                    >
                </MainButtoms>
            </div>
            <div id="block2">
                <div id = 'Res'></div>
                <div className = "mainp" id = "mainp">
                    <h1>Название</h1>
                    <input type = "text" id = "shablon_title" name='Shablon_title' autoFocus={true}></input>
                    <h1>Тип опроса</h1>
                    <select id ="typeselect" name='shablontype'>
                        <option value="public">Публичный</option>
                        <option value="anon">Анонимный</option>
                    </select>
                        {
                            items.map((item) => {
                                return(
                                    <QPool 
                                    id={item.id} 
                                    key={item.id}
                                    type={item.question_type}
                                    text={item.question_text}
                                    answ={item.answer}
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
            </div>
        </div>
    );
        
};