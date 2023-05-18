import React from 'react';

export const Result = (props) =>{

    return(
        <div id="res_col">
            <h1 id = 'res_tit'>{"Результаты опроса: " + props.title}</h1>
            {
                props.res_answ.map((i) => {
                    return(
                        <div id="res_item" key={i.id}>
                            <h1>{i.ti + ': '}</h1>
                            <p>{i.re}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}