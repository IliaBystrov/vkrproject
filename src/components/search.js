import React from 'react'

export const SearchShablon = (props) =>{

        return(
            <div className = "groupbtn">
                <input id = "InSearch" placeholder = {"Найти шаблон"}></input>
                <button id ="SearchButton" onClick={() => props.ReloadList()}>
                    <img id="searchimg" src={require('../images/search.png')} alt="search"></img>
                </button>
            </div>
        )
    };