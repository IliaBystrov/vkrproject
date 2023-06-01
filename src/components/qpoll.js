import React from 'react'
import {Short_Answer} from './short_answer'
import {Long_Answer} from './long_answer'
import {One_Answer} from './one_answer'
import {Many_Answers} from './many_answers'

class QPool extends React.Component{
    constructor(props){
        super(props);
        this.state='';
        this.handleChange = this.handleChange.bind(this);
        const item = <Short_Answer
            uid={this.props.id}
            returnValue={this.props.setInfo}
        ></Short_Answer>
    }
    handleChange(event){
        this.setState({value: event.target.value});
        this.onChangeEvent(event.target.value);
    }
    render(){

            return(
                <div className = "qarea">
                    <div id="qcolumn">
                        <select id="selecttype" onChange={this.handleChange} defaultValue={'Выберите тип вопроса'}>
                            <option>Выберите тип вопроса</option>
                            <option value="short">Короткий ответ</option>
                            <option value="long">Длинный ответ</option>
                            <option value="one">Один из списка</option>
                            <option value="many">Несколько из списка</option>
                        </select>
                        {this.item}
                    </div>
                    <button id="question_delete" onClick={() => this.props.onDeleted(this.props.id)}>
                        <img src={this.props.image_delete} alt="delete"></img>
                    </button>
                </div>
            )
        
    }
    onChangeEvent(x){
        this.item=null;
        switch(x){
            case 'short':
            this.item=<Short_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></Short_Answer>;
            break;
            case 'long':
            this.item=<Long_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></Long_Answer>;
            break;
            case 'one':
            this.item=<One_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></One_Answer>;
            break;
            case 'many':
            this.item=<Many_Answers
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></Many_Answers>;
            break;
        }
    }
}

export default QPool