import React from 'react';
import { ShablonCard } from './shabloncard';
import {SearchShablon} from './search';

export const MainButtoms = (props) =>{

        const items = props.List.map((lst) =>
            <ShablonCard cardtitle={lst.title}
                carddate={lst.data} 
                key={lst.id}
                link={lst.link}
                id={lst.id}
                CopyShablon = {props.CopyShablon}
                CopyLink = {props.CopyLink}
                EditShablon = {props.EditShablon}
                DeleteShablon = {props.DeleteShablon}
                ShowResult = {props.ShowResult}
            />
        );

        return(
            <div className="menucontrol">
                <div className = "groupbtn">
                    <button id='btn1' onClick={()=> props.NewShablon()}>
                        <h1>Новый шаблон</h1>
                        <img src={require('../images/arrow.png')} alt="arrow" id = "butImg"></img>
                    </button>
                </div>
                <div className="shablonlist">
                    <SearchShablon ReloadList={props.ReloadList}/>
                    {items}
                </div>
            </div>
        )
    }
