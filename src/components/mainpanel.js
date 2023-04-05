import React, { useState } from 'react'
import QPool from './qpoll'

class MainPanel extends React.Component{

   /* const [items, setValue] = useState([{
        id: 0,
        question_type: '',
        question_text: '',
        answer: []        
    }]);

    render(){

        return(
            <div className = "mainp">
                <h1>Название</h1>
                <input type = "text" id = "shablon_title"></input>
                <h1>Выберите логотип компании</h1>
                <select id ="logoselect">
                    <option value="src/images/logo.jpeg">OKB</option>
                    <option value="QWE">QWE</option>
                </select>
                <QPool image_delete={this.props.image_delete_task}></QPool>

                <button id="addtask" onClick={this.emptyvoid()}>
                    <img src={this.props.image_add_task} alt='add'></img>
                    <h1>Добавить вопрос</h1>
                </button>
                <button id="addtask">
                    <h1>Сохранить</h1>
                </button>
            </div>
        )
    }
    emptyvoid(){}
    additem () {
        let copy = Object.assign([], arr);
        let i = copy.lenght();
        i += 1;
        copy.push({
            id: i,
            question_type: '',
            question_text: '',
            answer: []
        });
        setValue(copy);
    }*/
}

export default MainPanel