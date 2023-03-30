import React from 'react'

class SearchShablon extends React.Component{
    render(){
        return(
            <div className = "groupbtn">
                <input id = "InSearch" placeholder = {"Найти шаблон"}></input>
                <button id ="SearchButton" onClick={this.gotocreate}>
                    <img id="searchimg" src={this.props.image} alt="search"></img>
                </button>
            </div>
        )
    }
    gotocreate () {
        console.log("Search");
    }
}

export default SearchShablon