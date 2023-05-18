import React from 'react'
import {edit_Short_Answer} from './edit_short_answer'
import {edit_Long_Answer} from './edit_long_answer'
import {edit_One_Answer} from './edit_one_answer'
import {edit_Many_Answers} from './edit_many_answers'

class edit_QPool extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'short'};
        this.handleChange = this.handleChange.bind(this);
        const item = <edit_Short_Answer
        uid={this.props.id}
        returnValue={this.props.setInfo}
        ></edit_Short_Answer>
    }
    handleChange(event){
        this.setState({value: event.target.value});
        this.onChangeEvent(event.target.value);
    }
    render(){
        
        return(
            <div className = "qarea">
                <div id="qcolumn">
                    <select id="selecttype" onChange={this.handleChange}>
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
            this.item=<edit_Short_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></edit_Short_Answer>;
            break;
            case 'long':
            this.item=<edit_Long_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></edit_Long_Answer>;
            break;
            case 'one':
            this.item=<edit_One_Answer
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></edit_One_Answer>;
            break;
            case 'many':
            this.item=<edit_Many_Answers
                uid={this.props.id}
                returnValue={this.props.setInfo}
            ></edit_Many_Answers>;
            break;
        }
    }
}

export default edit_QPool