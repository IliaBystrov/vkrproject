import React from 'react'
import Task_short from './task_short_text'
import Task_Long from './task_long_text'

class QPool extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'short'};
        this.handleChange = this.handleChange.bind(this);
        const item = <Task_short></Task_short>;
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
                <button>
                    <img src={this.props.image_delete} alt="delete"></img>
                </button>
            </div>
        )
    }
    onChangeEvent(x){
        this.item=null;
        switch(x){
            case 'short':
            this.item=<Task_short></Task_short>;
            break;
            case 'long':
            this.item=<h1><Task_Long></Task_Long></h1>;
            break;
            case 'one':
            this.item=<h1>one</h1>;
            break;
            case 'many':
            this.item=<h1>many</h1>;
            break;
        }
    }
}

export default QPool