import React from 'react'
import ShablonCard from './shabloncard';
import SearchShablon from './search';

class MainButtoms extends React.Component{
    render(){
        const numers = [1, 2, 3, 4, 5, 6];
        const items = numers.map((number) =>
            <ShablonCard cardtitle={"Shablon " + number}
                carddate={"0"+number+".02.2023"}
            />
        );
        return(
            <div className="menucontrol">
                <div className = "groupbtn">
                    <button id='btn1' onClick={this.gotocreate}>
                        <h1>Новый шаблон</h1>
                        <img src={require('../images/arrow.png')} alt="arrow" id = "butImg"></img>
                    </button>
                    <button id='btn1' onClick={this.gotoselect}>
                        <h1>Список шаблонов</h1>
                        <img src={require('../images/arrow.png')} alt="arrow" id = "butImg"></img>
                    </button>
                </div>
                <div className="shablonlist">
                    <SearchShablon/>
                    {items}
                </div>
            </div>
        )
    }
    gotocreate () {
        console.log("Create");
    }
    gotoselect () {
        console.log("Select");
    }
}

export default MainButtoms