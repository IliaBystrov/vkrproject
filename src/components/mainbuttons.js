import React, { useState } from 'react';
import { ShablonCard } from './shabloncard';
import {SearchShablon} from './search';

export const MainButtoms = () =>{

    const [shablon_cards, setCard] = useState([
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

        /*setValue((prevState) => []);

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
        stype.value="public";*/
        let bl2 = document.getElementById('mainp');
        bl2.hidden = false;
    }
        //Показать результаты
        const ShowResult =(id)=>{
            
        }


        const items = shablon_cards.map((lst) =>
            <ShablonCard cardtitle={lst.title}
                carddate={lst.data} 
                key={lst.id}
                link={lst.link}
                id={lst.id}
                CopyShablon = {CopyShablon}
                CopyLink = {CopyLink}
                EditShablon = {EditShablon}
                DeleteShablon = {DeleteShablon}
                ShowResult = {ShowResult}
            />
        );

        return(
            <div className="menucontrol">
                <div className = "groupbtn">
                </div>
                <div className="shablonlist">
                    <SearchShablon ReloadList={ReloadCardList}/>
                    {items}
                </div>
            </div>
        )
    }
