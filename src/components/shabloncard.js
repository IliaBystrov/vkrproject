import React from 'react'

export const ShablonCard = (props) =>{

        const link = props.link;
        return(
            <div className = "card">
                <div className='title_date'>
                    <h1>{props.cardtitle}</h1>
                    <h1>{props.carddate}</h1>
                </div>
                <div className='cardbuttons'>
                    <button id="cardbutton" onClick={() => props.CopyShablon(props.id)}>
                        <img src={require('../images/copy.png')} alt='copy' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => props.CopyLink(link)}>
                        <img src={require('../images/link.png')} alt='link' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => props.EditShablon(props.id)}>
                        <img src={require('../images/setings.png')} alt='settings' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => props.DeleteShablon(props.id)}>
                        <img src={require('../images/delete.png')} alt='delete' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => props.ShowResult(props.id)}>
                        <img src={require('../images/stats.png')} alt='stats' id="cardimg"></img>
                    </button>
                </div>
            </div>
        )
    

};
