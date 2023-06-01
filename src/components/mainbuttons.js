import React, { useState, useEffect } from 'react';
import { ShablonCard } from './shabloncard';
import {SearchShablon} from './search';
import axios from 'axios';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Result } from './Result';
import ReactDOMServer from 'react-dom/server';

export const MainButtoms = () =>{

    var vis = false;

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
    const ReloadCardList =()=>{
        let title = document.getElementById("InSearch");
        setCard((prevState) => []);

        let cards = [];

        axios.get('http://127.0.0.1:8000/api/forms/').then((res) => {
            console.log(res.data);
            res.data.map((r) => {
                cards.push({id:r.id, title: r.title, link: r.link, data: r.created_at})
            });
            console.log("cards", cards);
            cards.map((card) => {
                addcard(card.id, card.title, card.link, card.data);
            });
            console.log(shablon_cards);
        });
    };

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
                <div className="shablonlist">
                    <SearchShablon ReloadList={ReloadCardList}/>
                    {items}
                </div>
            </div>
        )
    }
